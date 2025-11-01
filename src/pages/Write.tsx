import { useState } from "react";
import { useNavigate } from "react-router";
import { axiosInstance } from "../api/axiosInstance";
import axios from "axios";

export default function Write() {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const encodeFileToBase64 = (image: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (event) => {
        const target = event.target as FileReader | null;
        if (target && target.result) {
          resolve(target.result);
        } else {
          reject(new Error("File reading failed"));
        }
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = (event.target.files && event.target.files[0]) || null;
    if (!file) return;
    const convertedFile = await encodeFileToBase64(file);
    setThumbnail(convertedFile as string);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!title || !category || !thumbnail || !desc || !username) {
        alert("입력 값이 누락되었습니다.");
        return;
      }
      const { status } = await axiosInstance.post("/posts", {
        title,
        category,
        thumbnail,
        desc,
        username,
      });
      if (status === 201) {
        alert("글이 등록되었습니다.");
        navigate("/");
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

  return (
    <main className='page__main flex flex-col items-center justify-center my-12 mx-0 min-h-[calc(100vh-131px-128px-96px)] min-[320px]:min-h-[calc(100vh-114px-110px-96px)] sm:min-h-[calc(100vh-131px-128px-96px)]'>
      <div className='page__write py-8 px-4 max-w-2xl w-full'>
        <h2 className='page__write-text mb-4 text-xl/7 text-primary-black'>
          새로운 글 작성
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='page__write-form grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <div className='page__write-group sm:col-span-2'>
              <label
                htmlFor='title'
                className='page__write-label block mb-2 text-sm/5 font-medium text-primary-black'
              >
                제목
              </label>
              <input
                type='text'
                name='title'
                id='title'
                className='page__write-input block p-2.5 rounded-lg border border-gray-300 w-full text-sm/5 text-primary-black bg-primary-white'
                placeholder='Type product name'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor='category'
                className='page__write-label block mb-2 text-sm/5 font-medium text-primary-black'
              >
                카테고리
              </label>
              <select
                id='category'
                className='page__write-select block p-2.5 rounded-lg border border-gray-300 w-full text-sm/5 text-primary-black bg-primary-white'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value=''>Select category</option>
                <option value='Travel'>Travel</option>
                <option value='Food'>Food</option>
                <option value='Life'>Life</option>
              </select>
            </div>
            <div>
              <label
                htmlFor='writer'
                className='page__write-label block mb-2 text-sm/5 font-medium text-primary-black'
              >
                작성자
              </label>
              <input
                type='text'
                name='writer'
                id='writer'
                className='page__write-input block p-2.5 rounded-lg border border-gray-300 w-full text-sm/5 text-primary-black bg-primary-white'
                placeholder='Type product name'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className='page__write-group'>
              <div>
                <label
                  htmlFor='item-weight'
                  className='page__write-label block mb-2 text-sm/5 font-medium text-primary-black'
                >
                  썸네일
                </label>
                <label
                  className='page__write-file--hidden hidden mb-2 font-medium text-sm/5 text-primary-black'
                  htmlFor='user_avatar'
                >
                  Upload file
                </label>
                <input
                  className='page__write-file block p-[7px] rounded-lg border border-gray-300 w-full text-sm/5 text-primary-black cursor-pointer h-[42px] bg-primary-white'
                  aria-describedby='user_avatar_help'
                  id='user_avatar'
                  type='file'
                  accept='image/*'
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>
            <div className='page__write-group'>
              <label
                htmlFor='description'
                className='page__write-label block mb-2 text-sm/5 font-medium text-primary-black'
              >
                내용
              </label>
              <textarea
                id='description'
                className='page__write-textarea block p-2.5 rounded-lg border border-gray-300 w-full h-60 text-sm/5 text-primary-black bg-primary-white'
                placeholder='Your description here'
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
              ></textarea>
            </div>
          </div>
          <button
            type='submit'
            className='page--btn inline-flex py-2.5 px-5 mt-4 items-center rounded-lg border text-sm/5 font-medium text-center'
          >
            글등록
          </button>
        </form>
      </div>
    </main>
  );
}
