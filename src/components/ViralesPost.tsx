import ArticleVirales from "./ArticleVirales";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";

const ViralesPost = () => {
  const { data, loading } = useFetch(`/virales`) as Props;

  return (
    <section className="bg-black p-8 text-white shadow-xl">
      <h1 className="mb-8 font-bold">virales</h1>
      <div className="grid gap-4">{loading ? <Loader /> : data && data.slice(0, 6).map((item) => <ArticleVirales key={item.id} id={item.id} title={item.title} image={item.image} />)}</div>
    </section>
  );
};

export default ViralesPost;
