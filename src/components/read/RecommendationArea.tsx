import RecommendationItem from "./RecommendationItem";

export default function RecommendationArea() {
  return (
    <article className='page__recommend'>
      <h3 className='page__recommend-title'>Recommend Reading</h3>
      <ul className='page__recommend-lists'>
        {/* RecommendationItem */}
        <RecommendationItem />
        <RecommendationItem />
      </ul>
    </article>
  );
}
