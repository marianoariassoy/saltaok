import ImageComponent from "./ImageComponent";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";

const Banner = ({ number }) => {
  const { data, loading } = useFetch(`/banners`);

  return (
    <section className="container max-w-7xl m-auto py-8 px-8">
      {loading ? (
        <Loader />
      ) : (
        <a href={data[number].link} target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
          <ImageComponent src={data[number].image} alt={data[number].title} />
        </a>
      )}
    </section>
  );
};

export default Banner;
