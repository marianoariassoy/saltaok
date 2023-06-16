import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ViralesPost from "./ViralesPost";
import ImageItem from "./ImageItem";
import ReactPlayer from "react-player";
import PostOthers from "./PostOthers";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";
import TextHTML from "../hooks/useHTML";
import { Helmet } from "react-helmet";

const Post = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`/post/${id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <section>
      <div className="container max-w-6xl m-auto px-8 pt-12 gap-6 text-black md:flex">
        <div className="md:w-8/12">
          {loading && <Loader />}
          {data && (
            <>
              {data[0].category && <div className="bg-primary py-3 px-4 font-bold rounded-md text-sm mb-4 w-1/2">{data[0].category}</div>}

              <ImageItem src={data[0].image} alt={data[0].title} />

              <h1 className="mt-8 mb-4 font-bold text-3xl text-primary">{data[0].title} </h1>
              <p className="mb-8">
                <TextHTML text={data[0].text} />
              </p>

              {data[0].video && <ReactPlayer url={data[0].video} controls={true} width="100%" height="auto" className="w-screen aspect-video mb-8" />}

              {data[0].text2 && (
                <p className="mb-8">
                  <TextHTML text={data[0].text2} />
                </p>
              )}

              {data[0].link && (
                <a href={data[0].link} target="_blank" rel="noopener noreferrer" className="mb-8 bg-primary py-3 px-4 font-bold rounded-md inline-block  text-sm hover:bg-black hover:text-white">
                  ver link
                </a>
              )}

              <PostOthers />

              <Helmet>
                <title>SaltaOk &bull; {data[0].title}</title>
                <meta name="description" content={data[0].text} />
              </Helmet>
            </>
          )}
        </div>

        <aside className="md:w-1/3">
          <ViralesPost />
        </aside>
      </div>
    </section>
  );
};

export default Post;
