import axios from 'axios';
import { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory, useParams } from 'react-router-dom';
import { TextField } from '../components/TextField';

interface MatchParams {
  id: string;
}

export function DMPage({ match }: RouteComponentProps<MatchParams>) {
  const { push } = useHistory();
  const [messages, setMessages] = useState([]);
  const { id } = match.params;
  const [roomTitle, setRoomTitle] = useState('');
  const [content, setContent] = useState('');
  const sendMsg = () => {
    axios
      .post('http://localhost:1337/api/messages', {
        data: {
          content: content,
          room: +id,
          username: localStorage.getItem('username'),
        },
      })
      .then((response) => {
        // Handle success.

        window.location.reload();
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  };

  useEffect(() => {
    const roomsData = axios
      .get(`http://localhost:1337/api/rooms/${id}?populate=*`)
      .then((res) => {
        setMessages(res.data.data.attributes.messages.data);
        const title = res.data.data.attributes.title;
        setRoomTitle(title);
      });
  }, []);

  return (
    <div>
      <div className="m-5 text-teal-900 h-10 w-10">
        <a href="javascript:history.back();">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=""
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
        <div className="text-4xl text-teal-900 font-semibold ml-5 mt-10 text-center">
          {roomTitle}
        </div>
      </div>

      <div>
        <div>
          {messages.map((msg: any) => {
            console.log(msg);
            if (msg.attributes.username === localStorage.getItem('username')) {
              return (
                <div key={msg.id}>
                  <div className="text-xl text-teal-900 m-5 bg-teal-100 rounded-md p-3 w-3/4 float-right">
                    <h1>
                      {msg.username} {msg.attributes.content}
                    </h1>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={msg.id}>
                  <div className="text-xl text-teal-900 m-5 bg-teal-300 rounded-md p-3 w-3/4">
                    <h1>
                      {msg.username} {msg.attributes.content}
                    </h1>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className="relative">
          <TextField
            placeholder="입력하세요."
            className="fixed bottom-0  w-10/12"
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
          <button
            className="w-2/12 px-4 py-4 fixed bottom-0 right-0 bg-teal-500 font-bold text-white transition duration-300 ease-in-out hover:bg-teal-600 rounded-md"
            onClick={() => {
              sendMsg();
            }}
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
}
