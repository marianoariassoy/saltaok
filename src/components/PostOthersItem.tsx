import ImageComponent from "./ImageComponent";
import { Link } from "react-router-dom";
import type { ArticleProps } from "../types/types";

const PostOthersItem = ({ id, title, section, date, image }: ArticleProps) => {
  return (
    <article>
      <div className="bg-primary py-1 px-4 font-bold rounded-md text-sm mb-4">{section}</div>

      <div className="relative">
        <Link to={`/post/${id}`} className="absolute top-0 w-full h-full flex items-center justify-center hover:backdrop-blur-sm [&>div]:hover:flex">
          <div className="font-bold text-2xl bg-white text-black w-10 h-10 rounded-full items-center justify-center hidden">+</div>
        </Link>
        <div className="aspect-video object-cover overflow-hidden">
          <ImageComponent src={image} alt={title} />
        </div>
      </div>
      <div>
        <h1 className="mt-2 font-bold">{title}</h1>
        <h2 className="text-sm opacity-60">{date}</h2>
      </div>
    </article>
  );
};

export default PostOthersItem;
