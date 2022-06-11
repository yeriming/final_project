import React from 'react';
import { useHistory } from 'react-router-dom';

export const HomePage = () => {
  const { push } = useHistory();
  return (
    <div>
      <div className="w-full">
        <div className="text-teal-900 font-bold text-4xl text-center mt-5">
          인기
        </div>

        <img
          src="https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/11b0/image/7Pn_LEVTCBWUeVyU-n97y9vIAdE.jpg"
          alt=""
          className="w-140 h-80 m-4 mx-auto cursor-pointer"
          onClick={() => push('/best')}
        />
      </div>

      <div className="flex mt-5">
        <div className="text-teal-900 font-bold text-4xl text-center flex-auto">
          의류
          <img
            src="https://post-phinf.pstatic.net/MjAyMDA5MTBfMjkw/MDAxNTk5NzE3MDU0OTk1.0D_9Tju8JCaSF0GN_YZitkxrHMKE9fPkHPDxgVeys_gg.2oA-ajbN_0sdgj8KFA1Gmrq3b29yEpl-38CxHcghP48g.PNG/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2020-07-10_%EC%98%A4%ED%9B%84_5.30.22.png?type=w1200"
            alt=""
            className="h-80 w-70 m-4 mx-auto"
          />
        </div>
        <div className="text-teal-900 font-bold text-4xl text-center flex-auto">
          물건
          <img
            src="https://post-phinf.pstatic.net/MjAyMDA5MTBfOTkg/MDAxNTk5NzE3MDU2MjUx.UuWcfIQiTmHgjBrrDsR9J9wYGxKWe-BIogLQPoVWnKQg.5naOvLmdS30s0EBSbDDAy5GoWDufi2XDEmzK4DfToCkg.PNG/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2020-07-10_%EC%98%A4%ED%9B%84_5.35.47.png?type=w1200"
            alt=""
            className="h-80 w-70 m-4 mx-auto"
          />
        </div>
      </div>

      <div className="flex mt-5">
        <div className="text-teal-900 font-bold text-4xl text-center flex-auto">
          신발
          <img
            src="https://footwearnews.com/wp-content/uploads/2020/04/soludos-floral-ibiza-sneaker.png"
            alt=""
            className="h-80 w-70 m-4 mx-auto"
          />
        </div>
        <div className="text-teal-900 font-bold text-4xl text-center flex-auto">
          악세사리
          <img
            src="https://lzd-img-global.slatic.net/g/p/553572ff31c3db370555c506f662e940.jpg_720x720q80.jpg_.webp"
            alt=""
            className="h-80 w-70 m-4 mx-auto"
          />
        </div>
      </div>

      <div className="relative">
        <div className="fixed bottom-0 left-0 right-0 flex">
          <div className="bg-teal-600 text-white text-center py-4 flex-auto rounded-tl-lg">
            <button type="button" onClick={() => push('/')}>
              홈
            </button>
          </div>
          <div className="text-center py-4 text-teal-600 border border-teal-600 bg-white flex-auto">
            <button type="button" onClick={() => push('/chat')}>
              디엠
            </button>
          </div>
          <div className="text-center py-4 text-teal-600 border border-teal-600 bg-white flex-auto rounded-tr-lg">
            <button type="button" onClick={() => push('/more')}>
              더보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
