import Head from "next/head";

const defaultMeta = {
  title: "pgl-g",
  siteName: "pgl-g",
  description:
    "pgl-g 个人博客，JS，Vue，React。座右铭：不为模糊不清的未来担忧，只为清清楚楚的现在奋发图强！",
  keywords:
    "pgl-g 个人博客，JS，Vue，React。座右铭：不为模糊不清的未来担忧，只为清清楚楚的现在奋发图强！",
  url: "https://guxiaobiao.top",
  type: "website",
  ico: "/favicon/favicon.ico",
};

export default function Seo(props) {
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta["title"] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <link rel="icon" href={meta.ico} />
    </Head>
  );
}
