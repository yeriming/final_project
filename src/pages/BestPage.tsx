import React from 'react';
import { useHistory } from 'react-router-dom';

export const BestPage = () => {
  const { push } = useHistory();
  return (
    <div>
      <div>
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
              src="https://cafe24img.poxo.com/shoplagirl/web/product/big/202112/a500183fe92556ba58faed4b9b9b1cd1.jpg"
              alt=""
              className="w-20 h-20 rounded-full m-5"
            />
            <div className="text-2xl text-teal-900 font-semibold ml-5 mt-10">
              E's Design
            </div>
          </div>

          <div className="flex m-10 bg-teal-100 rounded-xl">
            <img
              src="https://image.made-in-china.com/44f3j00hmVHAvIcAtkY/Fashion-Design-Unique-Kids-Formal-Dress-Frock-Evening-Wedding-Party-Child-Clothes-Girl-Dress.jpg"
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
