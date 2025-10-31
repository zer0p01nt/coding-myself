import { search } from "../../assets/images/images";

export default function SearchArea() {
  return (
    <section className='mb-16'>
      <article className='font-search text-center'>
        <h2 className='text-[2rem] font-bold mb-2'>The Sucoding Blog</h2>
        <p className='text-[1.15rem] text-primary mb-4'>
          A Blog About Food, Experience, and Recipes.
        </p>
        <form method='get' className='relative'>
          <input
            type='text'
            name='q'
            placeholder='Search'
            className='w-full py-2 px-4 border border-primary rounded-sm h-[2.8125rem]'
            autoComplete='off'
          />
          <button
            type='submit'
            className='border-0 bg-transparent outline-0 absolute right-4 top-1/2 transform -translate-y-1/2'
          >
            <img src={search} alt='search-icon' className='search-area__icon' />
          </button>
        </form>
      </article>
    </section>
  );
}
