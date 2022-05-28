import React, { useEffect, useState } from 'react';
import { TextField } from '../components/TextField';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { replace } = useHistory();

  const checkUser = () => {
    if (email === "" || password === "") {
      alert("아이디와 비밀번호를 입력해주세요");
      return;
    }
  }
// Request API.
axios
.post('http://localhost:1337/api/auth/local', {
  identifier: email,
  password: password,
})
.then((response) => {
  // Handle success.
  console.log('Well done!');
  console.log('User token', response.data.jwt);
  localStorage.setItem("token", response.data.jwt);
  replace("/");
})
.catch((error) => {
  // Handle error.
  console.log('An error occurred:', error.response);
});

useEffect(() => {
  if (localStorage.getITem("token")){
    replace("/");
  }
}, [])

  return (
    <div className="m-4"> 
    <div className="text-3xl font-bold mb-10">로그인</div>
      <div></div>
      <div>
        <TextField label="이메일" placeholder="이메일을 입력해주세요." value={email} onChange={(event) => {setEmail(event.target.value)}}/>
        <TextField
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          type="password"
          value={password}
          onChange={(event) => {setPassword(event.target.value)}}
          />
      </div>

      <div className="mt-10"> 
        <div className="bg-gray-800 text-white text-center py-4 rounded-md" onClick={()=>{checkUser();}}>로그인</div>
        <div className="text-center py-4 text-gray-800 border border-gray-800">
          회원가입
          </div>
        </div>
      </div>
  );
};