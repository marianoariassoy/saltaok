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
      <Post />
      <Banner />
    </Layout>
  );
};

export default Posts;
