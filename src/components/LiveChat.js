import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import Chatbox from "./Chatbox";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const time = setInterval(() => {
      // API Polling
      console.log("Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 500);

    return () => clearInterval(time);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            // Disclaimer: Don't use indexes as keys
            chatMessages.map((c, i) => {
              return <Chatbox key={i} name={c.name} message={c.message} />;
            })
          }
        </div>
      </div>
    </>
  );
};
export default LiveChat;
