import ImageComponent from "./ImageComponent";
import { Link } from "react-router-dom";
import type { ArticleProps } from "../types/types";

const Article = ({ id, title, section, date, image }: ArticleProps) => {
  return (
    <article className="article-main relative">
      <Link to={`/post/${id}`} className="absolute h-full w-full text-white cursor-pointer p-8 flex items-end transition-all hover:pb-10 hover:backdrop-blur-sm hover:text-white">
        <div>
          <span className="bg-primary py-1 px-4 font-bold rounded-md text-sm">{section}</span>
          <h1 className="mt-2 font-bold mb-2">{title}</h1>
          <h2 className="text-sm opacity-60">{date}</h2>
        </div>
      </Link>
      <ImageComponent src={image} alt={title} />
    </article>
  );
};

export default Article;
