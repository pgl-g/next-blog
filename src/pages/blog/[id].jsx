import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";


export default function SingleBlogPage() {
  return (
    <Layout>
      <Seo 
        templateTitle='Blog'
        description="Showcase of my projects on front-end development that I'm proud of."
      />
      详情页
    </Layout>
  )
}