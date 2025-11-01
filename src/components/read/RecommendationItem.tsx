import { NavLink } from "react-router";

export default function RecommendationItem({
  id,
  title,
  desc,
  thumbnail,
}: Post) {
  return (
    <li className='my-5 mx-0'>
      <NavLink to={`/read/${id}`}>
        <div className='page__recommend-list flex flex-col gap-4 sm:flex-row'>
          <img
            src={thumbnail}
            alt={title}
            className='page__recommend-img max-w-full rounded-md sm:max-w-[250px]'
          />
          <div>
            <h4 className='page__recommend-subtitle mb-2 text-[1.325rem]/7 font-bold min-[420px]:text-[1.175rem]'>
              {title}
            </h4>
            <p className='page__recommend-desc text-base/6 text-[#4b4b4b] overflow-hidden line-clamp-4 min-[420px]:text-base'>
              {desc}
            </p>
          </div>
        </div>
      </NavLink>
    </li>
  );
}
