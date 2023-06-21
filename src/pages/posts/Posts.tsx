import { useEffect } from "react";
import Layout from "../../layout/Layout";
import Banner from "../../components/Banner";
import Post from "../../components/Post";

const Posts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Layout home={false}>
      <Banner image="banner3.jpg" />
      <Post />
      <Banner image="banner4.jpg" />
    </Layout>
  );
};

export default Posts;
