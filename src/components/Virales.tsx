import ArticleVirales from "./ArticleVirales";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";

interface Article {
  id: number;
  title: string;
  image: string;
}

type Props = {
  data: Article[];
  loading: boolean;
};

const Virales = () => {
  const { data, loading } = useFetch(`/virales`) as Props;

  return (
    <section className="bg-black" id="virales">
      <div className="container max-w-7xl m-auto px-8 pt-20">
        <h1 className="text-2xl mb-14 font-bold">virales</h1>
        <div className="md:flex gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:w-3/4 mb-8">{loading ? <Loader /> : data && data.map((item) => <ArticleVirales key={item.id} id={item.id} title={item.title} image={item.image} />)}</div>
          <div className="md:w-1/4 md:pl-2">
            <div className="bg-gray-400 flex items-center justify-center w-full aspect-square text-gray-500 ">banner</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Virales;
