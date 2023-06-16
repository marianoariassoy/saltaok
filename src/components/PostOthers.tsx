import PostOthersItem from "./PostOthersItem";
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

const PostOthers = () => {
  const { data, loading } = useFetch(`/noticias`) as Props;

  return (
    <section className="grid md:grid-cols-2 gap-8 border-t border-b py-12">
      {loading ? <Loader /> : data && data.slice(0, 4).map((item) => <PostOthersItem key={item.id} id={item.id} section={item.category} title={item.title} date={item.date} image={item.image} />)}
    </section>
  );
};

export default PostOthers;
