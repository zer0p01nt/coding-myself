import ReadArea from "../components/read/ReadArea";
import RecommendationArea from "../components/read/RecommendationArea";

export default function Read() {
  return (
    <main className='page__main flex flex-col items-center justify-center my-12 mx-0 min-h-[calc(100vh-131px-128px-96px)] min-[320px]:min-h-[calc(100vh-114px-110px-96px)] sm:min-h-[calc(100vh-131px-128px-96px)]'>
      {/* ReadArea */}
      <ReadArea />
      {/* RecommendationArea */}
      <RecommendationArea />
    </main>
  );
}
