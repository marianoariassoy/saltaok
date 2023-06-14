import ImageComponent from "./ImageComponent";
import { Link } from "react-router-dom";
import type { ArticleProps } from "../types/types";

const ArticleVirales = ({ id, title, image }: ArticleProps) => {
  return (
    <article className="article-virales">
      <div className="relative">
        <Link to={`/post/${id}`} className="absolute top-0 w-full h-full flex items-center justify-center hover:backdrop-blur-sm [&>div]:hover:flex ">
          <div className="font-bold text-2xl bg-white text-black w-10 h-10 rounded-full items-center justify-center hidden">+</div>
        </Link>
        <ImageComponent src={image} alt={title} />
      </div>
      <div className="py-4">
        <h1 className="text-sm">{title}</h1>
      </div>
    </article>
  );
};

export default ArticleVirales;
