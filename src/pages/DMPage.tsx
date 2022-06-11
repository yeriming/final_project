import axios from 'axios';
import { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory, useParams } from 'react-router-dom';

interface MatchParams {
  id: string;
}

export function DMPage({ match }: RouteComponentProps<MatchParams>) {
  const { push } = useHistory();
  const [messages, setMessages] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    const roomsData = axios
      .get(`http://localhost:1337/api/rooms/${id}?populate=*`)
      .then((res) => {
        setMessages(res.data.data.attributes.messages.data);
        // console.log(res.data.data.attributes.messages.data);
      });
  }, []);

  return (
    <div>
      {messages.map((msg: any) => {
        return <h1>{msg.attributes.content}</h1>;
      })}
    </div>
  );
}
