import { NavLink } from "react-router";
import { dummyImage1 } from "../../assets/images/images";

export default function RecommendationItem() {
  return (
    <li className='my-5 mx-0'>
      <NavLink to=''>
        <div className='flex flex-col gap-4'>
          <img src={dummyImage1} alt='' className='max-w-full rounded-md' />
          <div>
            <h4 className='mb-2 text-[1.325rem]/7 font-bold'>
              Why you don’t need more than 3 pieces of clothing
            </h4>
            <p className='text-base/6 text-[#4b4b4b] overflow-hidden line-clamp-4'>
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
