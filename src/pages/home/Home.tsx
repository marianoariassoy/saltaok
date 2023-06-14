import Layout from "../../layout/Layout";
import Banner from "../../components/Banner";
import Posts from "../../components/Posts";
import Virales from "../../components/Virales";

const Home = () => {
  return (
    <Layout home={true}>
      <Posts />
      <Banner />
      <Virales />
    </Layout>
  );
};

export default Home;
