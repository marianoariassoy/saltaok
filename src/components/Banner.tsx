import ImageComponent from "./ImageComponent";

const Banner = ({ image }) => {
  return (
    <section className="container max-w-7xl m-auto py-8 px-8">
      <ImageComponent src={image} alt="Banner" />
    </section>
  );
};

export default Banner;
