import { useHistory } from 'react-router-dom';

export const EDPage = () => {
  const { push } = useHistory();
  return (
    <div>
      <div className="text-4xl font-bold text-center text-teal-900 m-5">
        E's Design
      </div>
      <div className="flex mt-10">
        <img
          src="https://post-phinf.pstatic.net/MjAyMDA5MTBfMTc5/MDAxNTk5NzE3MDU0ODc1._Qc4XvEXKbsZaR4hXR95d4KP1Jlqb4MjV8nBJ-3ga5og.-qIu1Qfn2J-NrzDI8jHY8NoaKrU5xuSn0eMO9HynHsQg.PNG/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2020-07-10_%EC%98%A4%ED%9B%84_5.30.45.png?type=w1200"
          alt=""
          className=""
        />
        <div className="ml-5">리폼 의류를 만듭니다</div>
      </div>
      <div className="bg-teal-600 text-white text-center py-4 rounded-md mt-4">
        <button type="button" onClick={() => push('/EDdm')}>
          문의하기
        </button>
      </div>

      <div className="relative">
        <div className="fixed bottom-0 left-0 right-0 flex">
          <div className="bg-teal-600 text-white text-center py-4 flex-auto rounded-tl-lg">
            <button type="button" onClick={() => push('/')}>
              홈
            </button>
          </div>
          <div className="text-center py-4 text-teal-600 border border-teal-600 bg-white flex-auto ">
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
