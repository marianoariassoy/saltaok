import ImageComponent from "./ImageComponent";
import { Link } from "react-router-dom";
import type { ArticleProps } from "../types/types";

const ArticleVirales = ({ id, title, image }: ArticleProps) => {
  return (
    <article className="article-virales">
      <div className="relative">
        <Link to={`/post/${id}`} className="absolute top-0 w-full h-full hover:backdrop-blur-sm"></Link>
        <ImageComponent src={image} alt={title} />
      </div>
      <div className="p-4">
        <h1 className="text-sm">{title}</h1>
      </div>
    </article>
  );
};

export default ArticleVirales;
