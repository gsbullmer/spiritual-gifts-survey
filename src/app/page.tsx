import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="flex gap-4">
        <Image
          src="https://via.placeholder.com/400x250"
          width="400"
          height="250"
          alt="image"
          className="aspect-square"></Image>
        <Image
          src="https://via.placeholder.com/400x250"
          width="400"
          height="250"
          alt="image"
          className="aspect-video"></Image>
      </div>
      <div className="my-8">
        <h1 className="text-3xl font-bold text-blue-900">
          <span className="uppercase">Step 1</span> – Discover Your Gifts
        </h1>
        <p>
          Every child of God is filled with the power of the Holy Spirit, specially gifted to play a unique and valued
          role in the body of Christ. No one is without gift or purpose. Spiritual gifts are not our talents or skills.
          They are the grace of God at work within us, empowering us to match our deep passions with the world’s deep
          need.
        </p>
        <Link href="/survey" className="block w-fit bg-green-700 text-white text-lg font-bold uppercase py-4 px-8 rounded-md my-4 mx-auto">Take the Spiritual Gifts Assessment</Link>
      </div>
      <div className="my-8">
        <h1 className="text-3xl font-bold text-blue-900">
          <span className="uppercase">Step 2</span> – Explore Your Gifts
        </h1>
        <p>
          Learn more about your spiritual gifts, what each one means, where read about it in Scripture, and ideas on how
          to live it out.
        </p>
        <ul className="grid grid-cols-5 gap-x-16 w-fit mx-auto">
          <Link href="/gifts/administration"><li className="w-fit">Administration</li></Link>
          <Link href="/gifts/artistry-creativity"><li className="w-fit">Artistry/Creativity</li></Link>
          <Link href="/gifts/builder"><li className="w-fit">Builder</li></Link>
          <Link href="/gifts/compassion"><li className="w-fit">Compassion</li></Link>
          <Link href="/gifts/encouragement"><li className="w-fit">Encouragement</li></Link>
          <Link href="/gifts/evangelism"><li className="w-fit">Evangelism</li></Link>
          <Link href="/gifts/faith"><li className="w-fit">Faith</li></Link>
          <Link href="/gifts/generosity"><li className="w-fit">Generosity</li></Link>
          <Link href="/gifts/helper-service"><li className="w-fit">Helper/Service</li></Link>
          <Link href="/gifts/hospitality"><li className="w-fit">Hospitality</li></Link>
          <Link href="/gifts/leadership"><li className="w-fit">Leadership</li></Link>
          <Link href="/gifts/music-singing"><li className="w-fit">Music/Singing</li></Link>
          <Link href="/gifts/shepherding"><li className="w-fit">Shepherding</li></Link>
          <Link href="/gifts/teaching"><li className="w-fit">Teaching</li></Link>
          <Link href="/gifts/writing"><li className="w-fit">Writing</li></Link>
        </ul>
      </div>
      <div className="my-8">
        <h1 className="text-3xl font-bold text-blue-900">
          <span className="uppercase">Step 3</span> – Share Your Gifts
        </h1>
        <p>
          All gifts are significant, and all come from the same Spirit. They are all meant to point people to God, and
          they are to be used for the good of all. Specific ways to share your gifts within different ministries can be
          explored in more detail. Contact the ministry leader to get plugged in or complete the Service Interest Form
          and we will follow up with you. We look forward to serving alongside you!
        </p>
        <Link href="#" className="block w-fit bg-blue-900 text-white text-lg font-bold uppercase py-4 px-8 rounded-md my-4 mx-auto">Service Interest Form</Link>
        <ul className="grid grid-cols-4 gap-x-16 w-fit mx-auto">
          <Link href="#"><li className="w-fit">Youth Ministry</li></Link>
          <Link href="#"><li className="w-fit">Children Ministry</li></Link>
          <Link href="#"><li className="w-fit">Care Ministries</li></Link>
          <Link href="#"><li className="w-fit">Mission Ministry</li></Link>
          <Link href="#"><li className="w-fit">Sanctuary</li></Link>
          <Link href="#"><li className="w-fit">Wellspring</li></Link>
          <Link href="#"><li className="w-fit">Welcoming</li></Link>
          <Link href="#"><li className="w-fit">Other</li></Link>
        </ul>
      </div>
    </>
  );
};

export default Home;
