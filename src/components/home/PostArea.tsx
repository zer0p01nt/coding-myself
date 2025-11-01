import { useAxios } from "../../hooks/useAxios";
import PostItem from "./PostItem";

export default function PostArea() {
  const { data, error, isLoading } = useAxios<Post[]>("/posts", []);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error : {error}</div>;
  return (
    <section className='posts-area grid grid-cols-2 gap-8 min-[320px]:grid-cols-1 md:grid-cols-2 md:gap-4'>
      {data && data.map((post) => <PostItem key={post.id} {...post} />)}
    </section>
  );
}
