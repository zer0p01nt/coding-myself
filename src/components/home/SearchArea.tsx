import { search } from "../../assets/images/images";

export default function SearchArea() {
  return (
    <section className='search-area mb-16'>
      <article className='search-area__search font-search text-center'>
        <h2 className='search-area__title text-[2rem] font-bold mb-2 lg:text-4xl'>
          The Sucoding Blog
        </h2>
        <p className='search-area__description text-[1.15rem] text-primary mb-4 min-[320px]:text-lg lg:text-[1.35rem]'>
          A Blog About Food, Experience, and Recipes.
        </p>
        <form method='get' className='search-area__form relative'>
          <input
            type='text'
            name='q'
            placeholder='Search'
            className='search-area__input w-full py-2 px-4 border border-primary rounded-sm h-11.25'
            autoComplete='off'
          />
          <button
            type='submit'
            className='search-area__submit border-0 bg-transparent outline-0 absolute right-4 top-1/2 transform -translate-y-1/2'
          >
            <img src={search} alt='search-icon' className='search-area__icon' />
          </button>
        </form>
      </article>
    </section>
  );
}
