import RecommendationItem from "./RecommendationItem";

export default function RecommendationArea() {
  return (
    <article className='page__recommend w-full max-w-200 my-4 mx-0'>
      <h3 className='page__recommend-title font-bold text-[1.8rem] mb-5'>
        Recommend Reading
      </h3>
      <ul className='page__recommend-lists page__recommend-lists'>
        {/* RecommendationItem */}
        <RecommendationItem />
        <RecommendationItem />
      </ul>
    </article>
  );
}
