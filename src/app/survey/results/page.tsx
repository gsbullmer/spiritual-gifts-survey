'use client'

import { useSearchParams } from "next/navigation";
import { Gifts } from "../data";

const Results = () => {
    const searchParams = useSearchParams();
    const gifts = searchParams.get("gifts")?.split(",");

    return (
        <>
            <p>My Gifts are:</p>
            <ul>
                {gifts?.map(gift => <li key={gift}>{Gifts.filter(v => v.id === gift)[0].name}</li>)}
            </ul>
        </>
    );
}

export default Results;