import React from 'react';
import { useHistory } from 'react-router-dom';

export const StartPage = () => {
  const { push } = useHistory();
  return (
    <div className="h-screen bg-gradient-to-tl from-cyan-200 to-green-400 w-full py-16 px-4">
      <div>
        <div className="flex justify-center">
          <div
            className="
       text-8xl
       font-bold mb-4 text-center text-teal-900"
          >
            N
          </div>
          <div
            className="
       text-4xl
       font-bold mb-4 text-center text-teal-900"
          >
            th
          </div>
          <div
            className="
       text-8xl
       font-bold mb-4 text-center text-teal-900"
          >
            B
          </div>
          <div
            className="
       text-4xl
       font-bold mb-4 text-center text-teal-900"
          >
            irth
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center text-xl text-tal-900">
        <div>One and Only Unique Upcycling Fashion<br></br>
         
        Rebirth, NthBirth</div>
      </div>
      <div>
        <div className="mt-10">
          <div className="bg-teal-600 text-white text-center py-4 rounded-md mt-4">
            <button type="button" onClick={() => push('/login')}>
              로그인
            </button>
          </div>
          <div className="text-center py-4 text-teal-600 border border-teal-600 mt-4 rounded-md">
            <button type="button" onClick={() => push('/signup')}>
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
