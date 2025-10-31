export default function Write() {
  return (
    <main className='flex flex-col items-center justify-center my-12 mx-0 min-h-[calc(100vh-131px-128px-96px)]'>
      <div className='py-8 px-4 max-w-168 w-full'>
        <h2 className='mb-4 text-xl/7 text-primary-black'>새로운 글 작성</h2>
        <form action='#'>
          <div className='grid gap-4'>
            <div className='page__write-group'>
              <label
                htmlFor='title'
                className='block mb-2 text-sm/5 font-medium text-primary-black'
              >
                제목
              </label>
              <input
                type='text'
                name='title'
                id='title'
                className='block p-2.5 rounded-lg border border-gray-300 w-full text-sm/5 text-primary-black bg-primary-white'
                placeholder='Type product name'
                required
              />
            </div>
            <div>
              <label
                htmlFor='category'
                className='block mb-2 text-sm/5 font-medium text-primary-black'
              >
                카테고리
              </label>
              <select
                id='category'
                className='block p-2.5 rounded-lg border border-gray-300 w-full text-sm/5 text-primary-black bg-primary-white'
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
                className='block mb-2 text-sm/5 font-medium text-primary-black'
              >
                작성자
              </label>
              <input
                type='text'
                name='writer'
                id='writer'
                className='block p-2.5 rounded-lg border border-gray-300 w-full text-sm/5 text-primary-black bg-primary-white'
                placeholder='Type product name'
                required
              />
            </div>
            <div className='page__write-group'>
              <div>
                <label
                  htmlFor='item-weight'
                  className='block mb-2 text-sm/5 font-medium text-primary-black'
                >
                  썸네일
                </label>
                <label
                  className='hidden mb-2 font-medium text-sm/5 text-primary-black'
                  htmlFor='user_avatar'
                >
                  Upload file
                </label>
                <input
                  className='block p-[7px] rounded-lg border border-gray-300 w-full text-sm/5 text-primary-black cursor-pointer h-[42px] bg-primary-white'
                  aria-describedby='user_avatar_help'
                  id='user_avatar'
                  type='file'
                  accept='image/*'
                  required
                />
              </div>
            </div>
            <div className='page__write-group'>
              <label
                htmlFor='description'
                className='block mb-2 text-sm/5 font-medium text-primary-black'
              >
                내용
              </label>
              <textarea
                id='description'
                className='block p-2.5 rounded-lg border border-gray-300 w-full h-60 text-sm/5 text-primary-black bg-primary-white'
                placeholder='Your description here'
                required
              ></textarea>
            </div>
          </div>
          <button
            type='submit'
            className='inline-flex py-2.5 px-5 mt-4 items-center rounded-lg border text-sm/5 font-medium text-center'
          >
            글등록
          </button>
        </form>
      </div>
    </main>
  );
}
