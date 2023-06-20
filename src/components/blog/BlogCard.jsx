import { HiOutlineClock, HiOutlineEye } from "react-icons/hi";
import format from "@/lib/format";
import Link from "next/link";

export default function BlogCard({ data, onClick }) {
  return (
    <li
      onClick={onClick}
      className="
      w-full mb-2 rounded-md border cursor-pointer border-gray-300 scale-100 
      hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 animate-shadow
      "
    >
      <Link
        href={`/blog/${data.slug}`}
        className="block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
      >
        <div className="flex items-end p-4 mb:flex-col">
          <div className="w-full">
            <h4 className="text-gray-800">{data.title}</h4>
            <p className="mt-4 mb-2 text-sm text-gray-600">
              <span className="font-bold">
                {format(data.publishedAt, "LL")}
              </span>
            </p>
            <p className="text-sm">{data.description}</p>
            <div className="flex items-center justify-start gap-2 mt-2 text-sm font-medium">
              <div className="flex items-center gap-1">
                <HiOutlineClock className="inline-block text-base" />
                {data.readingTime.text}
              </div>
              <div className="flex items-center gap-1">
                <HiOutlineEye className="inline-block text-base" />
                views
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-end w-full px-4 py-2 mt-2 text-sm text-black gap-y-1 gap-x-2">
            {data?.tags?.split(",").map((tag, index) => (
              <button
                key={index}
                className="inline-block rounded-md px-1.5 py-0.5 font-medium transition-colors
                  bg-gray-100 text-gray-700 hover:text-black disabled:bg-gray-200 disabled:text-gray-300
                  focus:outline-none focus-visible:ring focus-visible:ring-primary-300 disabled:cursor-not-allowed"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </Link>
    </li>
  );
}
