import { useParams } from "react-router";
import RecommendationItem from "./RecommendationItem";
import { useAxios } from "../../hooks/useAxios";

export default function RecommendationArea() {
  const params = useParams();
  const { data, isLoading, error } = useAxios<Post[]>(
    `/posts/${params.id}/related`,
    []
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error : {error}</div>;
  if (data.length === 0) return null;

  return (
    <article className='page__recommend w-full max-w-200 my-4 mx-0'>
      <h3 className='page__recommend-title font-bold text-[1.8rem] mb-5 min-[420px]:text-2xl'>
        Recommend Reading
      </h3>
      <ul className='page__recommend-lists page__recommend-lists'>
        {data &&
          data.map((post) => <RecommendationItem key={post.id} {...post} />)}
      </ul>
    </article>
  );
}
