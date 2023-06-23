import { useState } from "react";
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
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return loading ? (
    <div className="bg-white h-32 w-full">
      <Loader />
    </div>
  ) : (
    <>
      <section className="bg-black p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2" id="actualidad">
        {data && data.slice(0, visible).map((item) => <Article key={item.id} id={item.id} section={item.category} title={item.title} date={item.date} image={item.image} />)}
      </section>
      <section className="flex justify-center pt-8 pb-8 w-full">
        {visible < data.length && (
          <button className="rounded-md bg-primary h-11 font-bold text-sm px-12 inline-block hover:bg-black text-white hover:shadow-xl transition-all" onClick={showMoreItems}>
            ver más
          </button>
        )}
      </section>
    </>
  );
};

export default Posts;
