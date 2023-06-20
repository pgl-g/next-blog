// import CustomLink from '@/components/links/CustomLink';

export default function Footer() {
  return (
    <footer className="my-16 text-right text-[#b3b3b3] ">
      <section className="flex flex-col items-end dark:text-gray-300">
        <div>
          <a
            href="https://github.com/pgl-g"
            target="_blank"
            className="pl-1 "
            rel="noreferrer"
          >
            © PGL-G
          </a>
        </div>
        <a href="https://beian.miit.gov.cn/" target="_blank">
          浙ICP备2022036289号-1
        </a>
      </section>
    </footer>
  );
}
