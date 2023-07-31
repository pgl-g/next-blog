// import CustomLink from '@/components/links/CustomLink';

export default function Footer() {
  return (
    <footer className="mt-4 pb-2">
      <main className="layout flex flex-col items-center border-t pt-6 dark:border-gray-600">
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
      </main>
    </footer>
  );
}
