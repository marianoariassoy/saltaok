import { useState } from "react";
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

const Virales = () => {
  const { data, loading } = useFetch(`/virales`) as Props;
  const [visible, setVisible] = useState(9);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <>
      <section className="bg-black" id="virales">
        <div className="container max-w-7xl m-auto px-8 pt-20">
          <h1 className="text-2xl mb-14 font-bold">virales</h1>
          <div className="md:flex gap-4 items-start">
            <div className="md:w-3/4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">{loading ? <Loader /> : data && data.slice(0, visible).map((item) => <ArticleVirales key={item.id} id={item.id} title={item.title} image={item.image} />)}</div>
              {data && visible < data.length && (
                <div className="flex justify-center pt-8 pb-8 w-full">
                  <button className="rounded-md bg-primary h-11 font-bold text-sm px-12 inline-block hover:bg-gray-800 text-white hover:shadow-xl transition-all" onClick={showMoreItems}>
                    ver más
                  </button>
                </div>
              )}
            </div>

            <div className="md:w-1/4 md:pl-4">
              <BannerVertical number={4} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Virales;
