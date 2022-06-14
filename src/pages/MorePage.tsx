import { useHistory } from 'react-router-dom';

export const MorePage = () => {
  const { push } = useHistory();
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
        More
      </div>

      <div>
        <div>
          <div className="text-3xl font-semibold text-teal900 m-5 ml-10 mt-10">Profile</div>
          <div className="bg-teal-100 m-5 rounded-md p-5 text-teal-900">Edit Profile <br></br>
              Request History<br></br>
              Payment History</div>
        </div>
        <div>
          <div className="text-3xl font-semibold text-teal900 m-5 ml-10 mt-5">Help</div>
          <div className="bg-teal-100 m-5 rounded-md p-5 text-teal-900">Q&A <br></br>
              Contact Center</div>
        </div>
        <div>
          <div className="text-3xl font-semibold text-teal900 m-5 ml-10 mt-5">Settings</div>
          <div className="bg-teal-100 m-5 rounded-md p-5 text-teal-900">Notice Settings <br></br>
              DM Settings</div>
        </div>
      </div>

      <div className="relative">
        <div className="fixed bottom-0 left-0 right-0 flex">
          <div className="bg-white text-white text-center border border-teal-600 py-4 flex-auto rounded-tl-lg">
            <button type="button" onClick={() => push('/')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-teal-600"
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
          <div className="text-center py-4 text-teal-600 border border-teal-600 bg-white flex-auto">
            <button type="button" onClick={() => push('/chat')}>
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
          </div>
          <div className="text-center py-4 text-teal-600 bg-teal-600 flex-auto rounded-tr-lg">
            <button type="button" onClick={() => push('/more')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
