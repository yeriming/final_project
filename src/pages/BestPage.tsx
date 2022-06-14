import React from 'react';
import { useHistory } from 'react-router-dom';

export const BestPage = () => {
  const { push } = useHistory();
  return (
    <div>
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
        <div className="text-4xl font-bold text-teal-900 mt-5 text-center">
          {' '}
          Best{' '}
        </div>

        <div>
          <div
            className="flex m-10 bg-teal-100 rounded-xl cursor-pointer"
            onClick={() => push('/ed')}
          >
            <img
              src="https://pbs.twimg.com/media/ExDjUeSVcAMhkVg.jpg"
              alt=""
              className="w-20 h-20 rounded-full m-5"
            />
            <div className="text-2xl text-teal-900 font-semibold ml-5 mt-10">
              E's Design
            </div>
          </div>

          <div className="flex m-10 bg-teal-100 rounded-xl">
            <img
              src="https://m.avenue2z.com/web/product/medium/202204/6a0920ccaf9e0b78ccf570c4ca5d605a.jpg"
              alt=""
              className="w-20 h-20 rounded-full m-5"
            />
            <div className="text-2xl text-teal-900 font-semibold ml-5 mt-10">
              W's Design
            </div>
          </div>

          <div className="flex m-10 bg-teal-100 rounded-xl">
            <img
              src="https://assets.vogue.in/photos/5e170d089929c60008a66195/2:3/w_2560%2Cc_limit/79750875_814222359027955_4976547311530923983_n.jpg"
              alt=""
              className="w-20 h-20 rounded-full m-5"
            />
            <div className="text-2xl text-teal-900 font-semibold ml-5 mt-10">
              H's Design
            </div>
          </div>

          <div className="flex m-10 bg-teal-100 rounded-xl">
            <img
              src="https://ae01.alicdn.com/kf/HTB1JtxDIXXXXXbXXXXXq6xXFXXXt/vintage-dresses-unique-club-wear-1940s-online-boutique-cotton-linen-mod-clothes-retro-hippie-unique-rock.jpg"
              alt=""
              className="w-20 h-20 rounded-full m-5"
            />
            <div className="text-2xl text-teal-900 font-semibold ml-5 mt-10">
              A's Design
            </div>
          </div>
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
