import { useHistory } from 'react-router-dom';

export const EDPage = () => {
  const { push } = useHistory();
  return (
    <div>
      <div className="m-5 text-teal-900">
        <a href="javascript:history.back();">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div>
        <div className="text-4xl font-bold text-center text-teal-900 m-5">
          E's Design
        </div>
        <div className="flex mt-10">
          <img
            src="https://pbs.twimg.com/media/ExDjUeSVcAMhkVg.jpg"
            alt=""
            className="w-3/5 h-4/5"
          />
          <div className="ml-5">
            리폼 청가방을 만듭니다. <br></br>
            인스타그램 아이디: @reform_bag
            <div className="mt-20 bg-teal-100 text-teal-900 text-center py-4 rounded-md w-30 h-15 py-4">
              고객 후기
            </div>
            <div className="bg-teal-600 text-white text-center py-4 rounded-md mt-10 w-30 h-15">
              <button type="button" onClick={() => push('/rooms/1')}>
                문의하기
              </button>
            </div>
          </div>
        </div>
        <div className="bg-teal-100 rounded-md p-4 text-3xl font-bold text-center text-teal-900 m-5">
          상세설명
        </div>

        <img
          src="https://mblogthumb-phinf.pstatic.net/MjAyMTA0MDVfMjY2/MDAxNjE3NjAwNTU5ODYz.89qcWgLjSdzg08u4Acfq3YoA6LIZESpADGofPl2vUZkg.Cwkcupve8GbE_M9iu-UNO0eKBUxFyBxW8BnAoTzWI0wg.JPEG.designpress2016/6-3.jpg?type=w800"
          alt=""
          className=""
        />
        <img
          src="https://post-phinf.pstatic.net/MjAyMTA2MDJfMTMy/MDAxNjIyNjA4MDA5NDg5.AhYmWAeImIVUYj3QEsX2-KiHaP2OJoxJhWarYEpb0CEg.aK3jDuiLcBZ8OAu6ZVJ-Wj9MZ1hqUIfZPE6WeWwPzfIg.JPEG/8c3fd42e95b051aa5d6e9c72ede952ba1622437860.jpg?type=w1200"
          alt=""
          className=""
        />
      </div>

      <div className="relative">
        <div className="fixed bottom-0 left-0 right-0 flex">
          <div className="bg-teal-600 text-white text-center py-4 flex-auto rounded-tl-lg">
            <button type="button" onClick={() => push('/')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </button>
          </div>
          <div className="text-center py-4 text-teal-600 border border-teal-600 bg-white flex-auto">
            <button type="button" onClick={() => push('/chat')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
          </div>
          <div className="text-center py-4 text-teal-600 border border-teal-600 bg-white flex-auto rounded-tr-lg">
            <button type="button" onClick={() => push('/more')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
