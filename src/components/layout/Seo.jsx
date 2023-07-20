import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title: 'pgl-g',
  siteName: 'pgl-g',
  description:
    'pgl-g 个人博客，JS，Vue，React。座右铭：不为模糊不清的未来担忧，只为清清楚楚的现在奋发图强！',
  keywords:
    'pgl-g 个人博客，JS，Vue，React。座右铭：不为模糊不清的未来担忧，只为清清楚楚的现在奋发图强！',
  url: 'https://guxiaobiao.top',
  type: 'website',
  robots: 'follow, index',
  image: 'https://img2.woyaogexing.com/2022/12/31/43000c841802e3d12f128a281c8626ca.jpg'
};


export default function Seo(props) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;


  return (
    <Head>
      <title>{meta.title}</title>
      <link rel="icon" href="/favicon/favicon.ico" />
    </Head>
  );
}
