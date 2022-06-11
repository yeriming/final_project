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
        {/* 
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
        </div> */}
      </div>

      <div className="relative">
        <div className="fixed bottom-0 left-0 right-0 flex">
          <div className="text-center py-4 text-teal-600 border border-teal-600 bg-white flex-auto rounded-tl-lg">
            <button type="button" onClick={() => push('/')}>
              홈
            </button>
          </div>
          <div className="bg-teal-600 text-white text-center py-4 flex-auto">
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
