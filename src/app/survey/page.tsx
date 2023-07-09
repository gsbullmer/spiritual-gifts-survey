"use client";

import Link from "next/link";
import { useState } from "react";
import { LikertScale, Questions } from "./data";
import { useRouter } from "next/navigation";

const Survey = () => {

  const [page, setPage] = useState(1);
  const pageSize = 5;
  const maxPage = Math.ceil(Questions.length / pageSize);

  let responses: { [index: string]: any } = {},
  setResponses: Function = () => {};
  [responses, setResponses] = useState({});
  
  const router = useRouter();

  function handleNextPage() {
    setPage(page + 1);
  }
  
  function handlePrevPage() {
    setPage(page - 1);
  }

  function handleAnswer(e: any) {
    setResponses({ ...responses, [e.target.name]: Number(e.target.value) });
  }

  function handleSubmit() {
    const totals: { [index: string]: any} = Questions.reduce((pv,cv) => ({...pv, [cv.giftId]: 0}), {});
    Object.entries(responses).forEach(res => totals[Questions.filter(q => q.id === res[0])[0].giftId] += res[1]);
    const gifts = Object.entries(totals).sort((a,b) => b[1] - a[1]).map(i => i[0]).slice(0,3);
    // console.log(gifts.join(","));
    router.push(`/survey/results?gifts=${gifts.join(",")}`);
  }

  return (
    <div className="my-auto">
      <div className="flex justify-between">
        <Link href="/">&lt; Return to main page</Link>
        <p>
          Page {page} of {maxPage}
        </p>
      </div>
      <p>Rate each statement as it best relates to you. Your results will be calculated at the end.</p>

      <div className="w-full h-2.5 rounded-full bg-slate-200 my-2">
        <div
          className="rounded-full h-full bg-blue-700 transition-all"
          style={{ width: `${(Object.keys(responses).length / Questions.length) * 100}%` }}></div>
      </div>

      <div>
        {Questions
          .filter((v, i) => i >= (page - 1) * pageSize && i < page * pageSize)
          .map((q) => {
            return (
              <div key={`${q.id}`} className="my-8">
                <p>{q.text}</p>
                <div className="relative top-2.5 mx-auto w-4/5 h-1 rounded-full bg-slate-500"></div>
                <fieldset onChange={handleAnswer} id={q.id} className="w-full flex gap-4">
                  {LikertScale.map((item, i) => {
                    return (
                      <div key={`${q.id}-${i}`} className="w-1/5 flex flex-col items-center">
                        <input
                          type="radio"
                          id={`${q.id}-choice${i}`}
                          name={q.id}
                          value={item.value}
                          className="z-10"
                          defaultChecked={responses[q.id] === item.value}
                        />
                        <label htmlFor={`${q.id}-choice${i}`} className="text-center text-sm whitespace-pre-line">
                          {item.label}
                        </label>
                      </div>
                    );
                  })}
                </fieldset>
              </div>
            );
          })}
      </div>

      <div className="w-full my-2">
        {page > 1 && (
          <button onClick={handlePrevPage} className="rounded-md bg-green-700 py-2 px-4 text-white text-sm flaot-left">
            Prev Page
          </button>
        )}
        {page < maxPage && (
          <button onClick={handleNextPage} className="rounded-md bg-green-700 py-2 px-4 text-white text-sm float-right">
            Next Page
          </button>
        )}
        {page === maxPage && Object.keys(responses).length === Questions.length && (
          <button onClick={handleSubmit} className="rounded-md bg-green-700 py-2 px-4 text-white text-sm float-right">
            Submit Answers
          </button>
        )}
      </div>
    </div>
  );
};

export default Survey;
