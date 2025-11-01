import { useNavigate, useParams } from "react-router";
import { useAuthStore } from "../../stores/useAuthStore";
import { useAxios } from "../../hooks/useAxios";
import { axiosInstance } from "../../api/axiosInstance";
import axios from "axios";
import { format } from "date-fns";

export default function ReadArea() {
  const params = useParams();
  const navigate = useNavigate();
  const user = useAuthStore((store) => store.user);
  const {
    data: { category, title, username, thumbnail, desc, author, regdate },
    isLoading,
    error,
  } = useAxios<Post>(`/posts/${params.id}`, {} as Post);

  const handleDelete = async () => {
    try {
      const { status } = await axiosInstance.delete(`/posts/${params.id}`);
      if (status === 204) {
        alert("삭제되었습니다.");
        navigate("/");
      } else {
        throw new Error("삭제에 실패했습니다.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const msg = error.response?.data?.message ?? error.message;
        alert(msg);
      } else if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("알 수 없는 이유로 실패했습니다.");
      }
    }
  };
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error : {error}</div>;
  return (
    <article className='page__read w-full max-w-200'>
      <section>
        <strong className='page__read-tag flex justify-center items-center text-white w-18 h-6.5 text-xs bg-primary-navy my-[0.325rem] mx-0'>
          {category}
        </strong>
        <h2 className='page__read-title font-bold min-[320px]:text-[1.625rem] md:text-[1.825rem]'>
          {title}
        </h2>
        <div className='page__read-meta-group flex justify-between text-sm text-secondary'>
          <p className='page__read-profile text-sm text-secondary my-1 mx-0'>
            {username} • {format(regdate, "MMM dd, yyyy")}
          </p>
          {user?.email === author && (
            <button
              className='page__read-btn bg-transparent border-0 text-primary underline cursor-pointer'
              onClick={handleDelete}
            >
              삭제
            </button>
          )}
        </div>
        <img
          src={thumbnail}
          alt={title}
          className='page__read-image w-full h-70 object-cover'
        />
      </section>
      <section className='page__read-desc mt-5 text-lg/7 max-w-200 text-tertiary min-[420px]:text-base lg:text-base'>
        <p className='mb-4 min-[420px]:mb-2'>{desc}</p>
      </section>
    </article>
  );
}
