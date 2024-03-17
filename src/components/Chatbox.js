import { USER_IMG } from "../utils/helper";

const Chatbox = ({ name, message }) => {
  return (
    <div className="flex w-full py-2">
      <img alt="user" src={USER_IMG} className="h-9 pl-1" />
      <span className="pt-2 pl-2">{name}</span>
      <span className="pt-2 px-2">{message}</span>
    </div>
  );
};

export default Chatbox;
