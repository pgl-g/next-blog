import Layout from "../../layout";
import Seo from "../../layout/Seo";
import TypeIt from "../../components/commonCpm/animationText/typeit";
import { getFiles, getFileById, getRecommendations } from "../../utils/mdx";
import InterViewCard from "../../components/pagesCpm/InterViewCard";


const InterView = ({ recommendations }) => {
  return (
    <Layout>
      <Seo />
      <div className="max-w-[1200px] my-0 mx-auto">
        <InterViewCard recommendations={recommendations} />
        <TypeIt>
          📑 好好学习、天天向上...
        </TypeIt>
      </div>
    </Layout>
  )
}



export const getStaticProps = async () => {
  const dir = await getFiles("interview");
  const dirPost = dir.map((p) => ({
    slug: p.replace(/\.mdx/, ""),
  }));
  let post, recommendations;
  for (const params of dirPost) {
    post = await getFileById("interview", params?.slug);
    recommendations = await getRecommendations(params?.slug);
  }

  return {
    props: { ...post, recommendations },
  };
};

export default InterView;


