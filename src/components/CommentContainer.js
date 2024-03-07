import { CommentList } from "./Comment";
import { STATIC_COMMENTS } from "../utils/constants";

const CommentContainer = () => {
  return (
    <>
      <CommentList comments={STATIC_COMMENTS} />
    </>
  );
};

export default CommentContainer;
