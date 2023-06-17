import Article from "./Article";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";

interface Article {
  id: number;
  category: string;
  title: string;
  date: string;
  image: string;
}

type Props = {
  data: Article[];
  loading: boolean;
};

const Posts = () => {
  const { data, loading } = useFetch(`/noticias`) as Props;

  return loading ? (
    <div className="bg-white h-32 w-full">
      <Loader />
    </div>
  ) : (
    <section className="bg-black p-2 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-2" id="actualidad">
      {data && data.slice(0, 6).map((item) => <Article key={item.id} id={item.id} section={item.category} title={item.title} date={item.date} image={item.image} />)}
    </section>
  );
};

export default Posts;
