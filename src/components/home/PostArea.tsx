import PostItem from "./PostItem";

export default function PostArea() {
  return (
    <section className='posts-area grid grid-cols-2 gap-8 min-[320px]:grid-cols-1 md:grid-cols-2 md:gap-4'>
      <PostItem />
    </section>
  );
}
