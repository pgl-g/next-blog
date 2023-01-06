import { HiOutlineClock, HiOutlineEye } from "react-icons/hi";
import Link from 'next/link'


export default function BlogCard({ onClick }) {

  return (
    <li
      onClick={onClick}
      className="w-full rounded-md border cursor-pointer border-gray-300  dark:border-gray-600 dark:bg-dark scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 animate-shadow"
    >
      <Link
        href={`/blog/1.jsx`}
        className=""
      >
        <div className="flex items-end p-4 mb:flex-col">
          {/* blog_info */}
          <div className="w-full text-white">
            <h4 className="dark:text-gray-100">标题</h4>
            <p className="mt-4 mb-2 text-sm text-gray-600 dark:text-gray-300">
              <span className="font-bold">时间</span>
            </p>
            <p className="text-sm dark:text-gray-300">内容</p>
            <div className="mt-2 flex items-center justify-start gap-2 text-sm font-medium dark:text-gray-300">
              <div className="flex items-center gap-1">
                <HiOutlineClock className="inline-block text-base" />
                文本
              </div>
              <div className="flex items-center gap-1">
                <HiOutlineEye className="inline-block text-base" />
                views
              </div>
            </div>
          </div>
          {/* tags */}
          <div className="w-full px-4 py-2 mt-2 flex flex-wrap justify-end gap-y-1 gap-x-2 text-sm dark:text-gray-100">
            {/* <Tag tabIndex={-1} className="bg-opacity-80 dark:!bg-opacity-60">
            <Accent>tag</Accent>
          </Tag> */}
            xxx
          </div>
        </div>
      </Link>
    </li>
  );
}
