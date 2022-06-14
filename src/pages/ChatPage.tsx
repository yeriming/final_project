import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const ChatPage = () => {
  const { push } = useHistory();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const roomsData = axios
      .get('http://localhost:1337/api/rooms')
      .then((res) => {
        console.log(res);
        setRooms(res.data.data);
        console.log(res.data.data);
      });
  }, []);

  return (
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
        Direct Message
      </div>

      <div>
        {rooms.map((room: any) => {
          return (
            <div
              className="flex m-10 bg-teal-100 rounded-xl cursor-pointer"
              onClick={() => push(`/rooms/${room.id}`)}
            >
              <img
                src={room.attributes.image}
                alt=""
                className="w-20 h-20 rounded-full m-5"
              />
              <div className="text-2xl text-teal-900 font-semibold ml-5 mt-10">
                {room.attributes.title}
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative">
        <div className="fixed bottom-0 left-0 right-0 flex">
          <div className="bg-white text-teal-600 text-center border border-teal-600 py-4 flex-auto rounded-tl-lg">
            <button type="button" onClick={() => push('/')}>
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </button>
          </div>
          <div className="text-center py-4 text-teal-600 border border-teal-600 bg-teal-600 flex-auto">
            <button type="button" onClick={() => push('/chat')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clip-rule="evenodd"
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
