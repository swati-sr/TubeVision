import { USER_IMG } from "../utils/helper";

export const CommentList = ({ comments }) => {
  return comments.map((comment) => {
    return (
      <div key={comment.id}>
        <Comment data={comment} />
        <div className="pl-5 border-l-2">
          <CommentList comments={comment.replies} />
        </div>
      </div>
    );
  });
};

const Comment = ({ data }) => {
  const { author, content, replies } = data;
  return (
    <div className="w-12/12 rounded-sm flex my-1 px-1">
      <img
        className="h-8 my-2 py-1 px-1 mt-5 rounded-full"
        alt="user"
        src={USER_IMG}
      />
      <div className="my-2 py-1 px-1 flex-row">
        <p>{author}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Comment;
