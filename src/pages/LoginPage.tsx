//javascript
import React, { useEffect, useState } from 'react';
import { TextField } from '../components/TextField';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useHistory();

  const checkUser = () => {
    if (email === '' || password === '') {
      alert('아이디와 비밀번호를 입력해주세요');
      return;
    }
    axios
      .post('http://localhost:1337/api/auth/local', {
        identifier: email,
        password: password,
      })
      .then((response) => {
        // Handle susccess.s
        console.log('Well done!');
        console.log('User token', response.data);
        localStorage.setItem('token', response.data.jwt);
        localStorage.setItem('id', response.data.user.id);
        push('/');
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  };

  // Request API.

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     push('/');
  //   }
  // }, []);

  //html

  return (
    <div className="h-screen bg-gradient-to-tl from-cyan-200 to-green-400 w-full py-16 px-4">
      <div className="m-4">
        <div className="text-3xl font-bold mb-10 text-center text-teal-900">
          로그인
        </div>
        <div>
          <TextField
            label="이메일"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <div className="mt-10">
          <div
            className="bg-teal-600 text-white text-center py-4 m-4 rounded-md"
            onClick={() => {
              checkUser();
            }}
          >
            로그인
          </div>
        </div>
      </div>
    </div>
  );
};
