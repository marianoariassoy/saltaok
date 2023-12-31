import Layout from "../../layout/Layout";
import Banner from "../../components/Banner";
import Posts from "../../components/Posts";
import Virales from "../../components/Virales";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Layout home={true}>
      <Banner number={0} />
      <Posts />
      <Banner number={1} />
      <Virales />
      <Helmet>
        <title>SaltaOK Comunidad. Contamos historias</title>
        <meta name="description" content="Somos una comunidad que crea y comunica contenidos de interés general a través de medios tradicionales y digitales de gran alcance." />
      </Helmet>
    </Layout>
  );
};

export default Home;
