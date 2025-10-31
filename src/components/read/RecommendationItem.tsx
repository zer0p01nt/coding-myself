import { NavLink } from "react-router";
import { dummyImage1 } from "../../assets/images/images";

export default function RecommendationItem() {
  return (
    <li className='my-5 mx-0'>
      <NavLink to=''>
        <div className='page__recommend-list flex flex-col gap-4 sm:flex-row'>
          <img
            src={dummyImage1}
            alt=''
            className='page__recommend-img max-w-full rounded-md sm:max-w-[250px]'
          />
          <div>
            <h4 className='page__recommend-subtitle mb-2 text-[1.325rem]/7 font-bold min-[420px]:text-[1.175rem]'>
              Why you don’t need more than 3 pieces of clothing
            </h4>
            <p className='page__recommend-desc text-base/6 text-[#4b4b4b] overflow-hidden line-clamp-4 min-[420px]:text-base'>
              Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut
              amet nisl tortor arcu non id nulla mauris neque nisl magna.Et
              vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet
              nisl tortor arcu non id nulla mauris neque nisl magna.Et vitae,
              mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl
              tortor arcu non id nulla mauris neque nisl magna.Et vitae, mollis
              euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor
              arcu non id nulla mauris neque nisl magna.
            </p>
          </div>
        </div>
      </NavLink>
    </li>
  );
}
