import Layout from "../../layout/Layout";
import Banner from "../../components/Banner";
import Posts from "../../components/Posts";
import Virales from "../../components/Virales";
import Contact from "../../components/Contact";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Posts />
      <Banner />
      <Virales />
      <Contact />
    </Layout>
  );
};

export default Home;
