import { format } from "date-fns";
import { NavLink } from "react-router";

export default function PostItem({
  id,
  title,
  category,
  desc,
  thumbnail,
  username,
  regdate,
}: Post) {
  return (
    <article className='posts-area__post'>
      <NavLink to={`/read/${id}`} className='posts-area__post-link block'>
        <img
          src={thumbnail}
          alt={title}
          className='posts-area__post-image w-full max-w-full h-66.5 object-cover'
        />
        <em className='posts-area__post-tag flex justify-center items-center w-18 h-6.5 text-xs text-white bg-primary-navy my-[0.325rem] mx-0'>
          {category}
        </em>
        <h2 className='posts-area__post-title text-[1.3rem] font-bold'>
          {title}
        </h2>
        <p className='posts-area__post-meta text-sm text-secondary my-1 mx-0'>
          {username} • {format(regdate, "MMM dd, yyyy")}
        </p>
        <p className='posts-area__post-excerpt text-sm text-tertiary mb-4 overflow-hidden line-clamp-3'>
          {desc}
        </p>
      </NavLink>
    </article>
  );
}
