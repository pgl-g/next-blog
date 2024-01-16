


const PageCard = ({ recommendations }) => {
  return (
    <ul className="grid gap-4 grid-cols-3">
      {
        recommendations.map((item, index) => (
          <li
            className="w-full rounded-md border border-gray-300 bg-white dark:border-gray-600 dark:bg-dark scale-100 
    hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 animate-shadow"
            key={index}
          >
            <a
              href={`/interview/${item.slug}`}
              className="block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
            >
              <div>
                <figure className="pointer-events-none overflow-hidden rounded-t-md">
                  <div className="w-full h-[155px]">
                    <img src={item.img} alt={`${item.img} + ${index}`} />
                  </div>
                </figure>
              </div>
              <div className="p-4">
                <h4 className="text-gray-800 dark:text-gray-100">
                  {item.title}
                </h4>
                <p className="mb-2 mt-4 text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-bold text-gray-800 dark:text-gray-100">
                    {item.lastUpdated}
                  </span>
                </p>

                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </a>
          </li>
        ))
      }
    </ul>

  )
}
export default PageCard;