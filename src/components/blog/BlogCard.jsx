import { HiOutlineClock, HiOutlineEye } from "react-icons/hi";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
// import locale from 'antd/es/date-picker/locale/zh_CN'
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import Link from "next/link";
dayjs.extend(LocalizedFormat);

export default function BlogCard({ onClick, data }) {
  return (
    <li
      onClick={onClick}
      className="w-full rounded-md border cursor-pointer border-gray-300  dark:border-gray-600 dark:bg-dark scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 animate-shadow"
    >
      {data.map((item, index) => (
        <Link href={`/blog/${item.slug}`} className="" key={index}>
          <div className="flex items-end p-4 mb:flex-col">
            <div className="w-full text-white">
              <h4 className="dark:text-gray-100">{item.title}</h4>
              <p className="mt-4 mb-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="font-bold">
                  {dayjs(item.publishedAt).format("LL")}
                </span>
              </p>
              <p className="text-sm dark:text-gray-300">{item.description}</p>
              <div className="flex items-center justify-start gap-2 mt-2 text-sm font-medium dark:text-gray-300">
                <div className="flex items-center gap-1">
                  <HiOutlineClock className="inline-block text-base" />
                  {item.readingTime.text}
                </div>
                <div className="flex items-center gap-1">
                  <HiOutlineEye className="inline-block text-base" />
                  views
                </div>
              </div>
            </div>

            <div
              className="flex flex-wrap justify-end w-full px-4 py-2 mt-2 text-sm text-black gap-y-1 gap-x-2 dark:text-gray-100"
            >
              {item.tags.split(",").map((tag) => (
                <button
                  className="inline-block rounded-md px-1.5 py-0.5 font-medium transition-colors
                  bg-gray-300 text-gray-700 hover:text-black disabled:bg-gray-200 disabled:text-gray-300
                  dark:bg-gray-700 dark:text-gray-200 dark:hover:text-white dark:disabled:bg-gray-600 dark:disabled:text-gray-500
                  focus:outline-none focus-visible:ring focus-visible:ring-primary-300 disabled:cursor-not-allowed"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </li>
  );
}
