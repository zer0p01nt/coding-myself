import { NavLink } from "react-router";
import { dummyImage1 } from "../../assets/images/images";

export default function PostItem() {
  return (
    <article className='posts-area__post'>
      <NavLink to='/read/1' className='block'>
        <img
          src={dummyImage1}
          alt='dummy-image-1'
          className='w-full max-w-full h-[16.625rem] object-cover'
        />
        <em className='flex justify-center items-center w-18 h-[1.625rem] text-xs text-white bg-primary-navy my-[0.325rem] mx-0'>
          Travel
        </em>
        <h2 className='text-[1.3rem] font-bold'>
          My Travel Stories from the Past Year
        </h2>
        <p className='text-sm text-secondary my-1 mx-0'>
          George Costanazv • Aug 16, 2025
        </p>
        <p className='text-sm text-tertiary mb-4 overflow-hidden line-clamp-3'>
          Over the past year, I had the opportunity to explore new places and
          immerse myself in different cultures. From the vibrant streets of
          Europe to the serene beaches of Asia, each journey taught me something
          unique. The experience of stepping out of my comfort zone helped me
          grow as a person, providing new perspectives on life. Traveling also
          allowed me to reconnect with myself, as I embraced moments of solitude
          while navigating unfamiliar environments.
        </p>
      </NavLink>
    </article>
  );
}
