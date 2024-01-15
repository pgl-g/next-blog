import Link from "next/link";

export default function BlogCard({ data }) {

  return (
    <div
      className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]"
    >
      <div
        className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block"
      >
      </div>
      <div className="space-y-16">
        {
          data.map((item, i) => (
            <article className="relative group" key={i}>
              <div
                className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50"
              >
              </div>
              <svg
                viewBox="0 0 9 9"
                className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
              >
                <circle
                  cx="4.5"
                  cy="4.5"
                  r="4.5"
                  stroke="currentColor"
                  className="fill-white dark:fill-slate-900"
                  // stroke-width="2"
                  strokeWidth={2}
                ></circle>
              </svg>
              <div className="relative">
                <h3
                  className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0"
                >
                  {item.title}
                </h3>
                <div
                  className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2"
                >
                  <p>
                    {item.description}
                  </p>
                </div>
                <dl
                  className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]"
                >
                  <dt className="sr-only">Date</dt>
                  <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                    <time dateTime="2023-12-20T20:00:00.000Z">{item.time}</time>
                  </dd>
                </dl>
              </div>
              <Link
                className="flex items-center text-sm text-sky-500 font-medium"
                href={`/blog/${item.slug}`}
              ><span
                className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"
              ></span
                ><span className="relative"
                >Read more<span className="sr-only"
                >, Introducing Catalyst: A modern UI kit for React</span
                  ></span
                ><svg
                  className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </Link>
            </article>
          ))
        }
      </div>
    </div>
  );
}
