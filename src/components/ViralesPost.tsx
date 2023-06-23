import ArticleVirales from "./ArticleVirales";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";
import BannerVertical from "./BannerVertical";

interface Article {
  id: number;
  title: string;
  image: string;
}

type Props = {
  data: Article[];
  loading: boolean;
};

const ViralesPost = () => {
  const { data, loading } = useFetch(`/virales`) as Props;

  return (
    <section className="bg-black py-8 px-4 text-white shadow-xl">
      <h1 className="mb-8 font-bold">virales</h1>
      <div className="mb-8">
        <BannerVertical number={4} />
      </div>
      <div className="grid gap-4">{loading ? <Loader /> : data && data.slice(0, 7).map((item) => <ArticleVirales key={item.id} id={item.id} title={item.title} image={item.image} />)}</div>
    </section>
  );
};

export default ViralesPost;
