import { useHistory } from 'react-router-dom';

export const MorePage = () => {
  const { push } = useHistory();
  return (
    <div>
      <div className="text-4xl font-bold text-teal-900 mt-5 text-center">
        More
      </div>

      <div className="relative">
        <div className="fixed bottom-0 left-0 right-0 flex">
          <div className="text-center py-4 text-teal-600 border border-teal-600 bg-white flex-auto rounded-tl-lg">
            <button type="button" onClick={() => push('/')}>
              홈
            </button>
          </div>
          <div className="text-center py-4 text-teal-600 border border-teal-600 bg-white flex-auto">
            <button type="button" onClick={() => push('/chat')}>
              디엠
            </button>
          </div>
          <div className="bg-teal-600 text-white text-center py-4 flex-auto rounded-tr-lg">
            <button type="button" onClick={() => push('/more')}>
              더보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
