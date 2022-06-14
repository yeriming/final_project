import React from 'react';
import { useHistory } from 'react-router-dom';

export const HomePage = () => {
  const { push } = useHistory();
  return (
    <div>
      
      <div className ="m-5 text-teal-900">
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
      <div className="w-full">
        <div className="text-teal-900 font-bold text-4xl text-center mt-5">
          Best
        </div>

        <img
          src="https://media.glamour.com/photos/621ea79bead470cd972ec7c5/16:9/w_1280,c_limit/spring%20outfits%20for%20women%202022.jpg"
          alt=""
          className="w-140 h-80 m-4 mx-auto cursor-pointer"
          onClick={() => push('/best')}
        />
      </div>

      <div className="flex mt-5">
        <div className="text-teal-900 font-bold text-4xl text-center flex-auto">
          Clothes
          <img
            src="https://post-phinf.pstatic.net/MjAyMDA5MTBfMjkw/MDAxNTk5NzE3MDU0OTk1.0D_9Tju8JCaSF0GN_YZitkxrHMKE9fPkHPDxgVeys_gg.2oA-ajbN_0sdgj8KFA1Gmrq3b29yEpl-38CxHcghP48g.PNG/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2020-07-10_%EC%98%A4%ED%9B%84_5.30.22.png?type=w1200"
            alt=""
            className="h-80 w-70 m-4 mx-auto"
          />
        </div>
        <div className="text-teal-900 font-bold text-4xl text-center flex-auto">
          Items
          <img
            src="https://post-phinf.pstatic.net/MjAyMDA5MTBfOTkg/MDAxNTk5NzE3MDU2MjUx.UuWcfIQiTmHgjBrrDsR9J9wYGxKWe-BIogLQPoVWnKQg.5naOvLmdS30s0EBSbDDAy5GoWDufi2XDEmzK4DfToCkg.PNG/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2020-07-10_%EC%98%A4%ED%9B%84_5.35.47.png?type=w1200"
            alt=""
            className="h-80 w-70 m-4 mx-auto"
          />
        </div>
      </div>

      <div className="flex mt-5">
        <div className="text-teal-900 font-bold text-4xl text-center flex-auto">
          Shoes
          <img
            src="https://ae01.alicdn.com/kf/HTB1Nql1mnTI8KJjSsphq6AFppXaD/-.jpg_Q90.jpg_.webp"
            alt=""
            className="h-80 w-70 m-4 mx-auto"
          />
        </div>
        <div className="text-teal-900 font-bold text-4xl text-center flex-auto">
          Acc
          <img
            src="https://fastcdn.impakter.com/wp-content/uploads/2018/03/screen-shot-2018-03-06-at-13.25.11.png?strip=all&lossy=0&quality=92&sharp=1&resize=599%2C599&ssl=1"
            alt=""
            className="h-80 w-70 m-4 mx-auto"
          />
        </div>
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
