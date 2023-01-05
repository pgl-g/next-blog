import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title: 'pgl-g',
  siteName: 'pgl-g',
  description:
    'pgl-g 个人博客，JS，Vue，React。座右铭：不为模糊不清的未来担忧，只为清清楚楚的现在奋发图强！',
  keywords:
    'pgl-g 个人博客，JS，Vue，React。座右铭：不为模糊不清的未来担忧，只为清清楚楚的现在奋发图强！',
  /** Without additional '/' on the end */
  url: 'https://guxiaobiao.top',
  type: 'website',
  robots: 'follow, index',
  // image: 'https://help-assets.codehub.cn/enterprise/guanwang/favicon.ico',
  image: 'https://img2.woyaogexing.com/2022/12/31/43000c841802e3d12f128a281c8626ca.jpg'
};

// type SeoProps = {
//   date?: string;
//   templateTitle?: string;
//   isBlog?: boolean;
//   banner?: string;
// } & Partial<typeof defaultMeta>;

export default function Seo(props) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  // Use siteName if there is templateTitle
  // but show full title if there is none
  // meta['image'] = openGraph({
  //   description: meta.description,
  //   siteName: props.templateTitle ? meta.siteName : meta.title,
  //   templateTitle: props.templateTitle,
  // });

  return (
    <Head>
      <title>{meta.title}</title>
      <link rel="icon" href="/favicon/favicon.ico" />
      {/* <meta name='robots' content={meta.robots} /> */}
      {/* <meta content={meta.keywords} name='keywords' /> */}
      {/* <meta content={meta.description} name='description' /> */}
      {/* <meta property='' name='header_title' content='顾孝标 官网'></meta> */}
      {/* <meta name='image' property='og:image' content={meta.image} />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} /> */}
      {/* <link rel='canonical' href={`${meta.url}${router.asPath}`} /> */}
      {/* <meta name='theme-color' content='#ffffff' /> */}
    </Head>
  );
}
