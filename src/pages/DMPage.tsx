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
          author: 1,
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
      <div>
        <div className="text-2xl text-teal-900 font-semibold ml-5 mt-10 text-center">
          {roomTitle}
        </div>
      </div>

      <div>
        <div>
          {messages.map((msg: any) => {
            return (
              <div key={msg.id}>
                <div className="text-xl text-teal-900 m-5 bg-teal-100 rounded-md p-3">
                  <h1>{msg.attributes.content}</h1>
                </div>
              </div>
            );
          })}

        
        </div>

        <div className="relative">
          <TextField
            placeholder="입력하세요."
            className="fixed bottom-0 left-0 right-0"
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
          <button
            className="fixed bottom-0 right-0 bg-teal-500 font-bold text-white px-4 py-4 transition duration-300 ease-in-out hover:bg-teal-600 mr-6 rounded-md"
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
