import PostArea from "../components/home/PostArea";
import SearchArea from "../components/home/SearchArea";

export default function Home() {
  return (
    <main className='page__main flex flex-col items-center justify-center my-12 mx-0 min-h-[calc(100vh-131px-128px-96px)]'>
      {/* Search */}
      <SearchArea />
      {/* PostArea */}
      <PostArea />
    </main>
  );
}
