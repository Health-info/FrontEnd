import axios, { Axios } from "axios";
import React, { useContext, useState } from "react";

const CommentInput = () => {
  const [input, setInput] = useState();
  const { userData } = useContext();
  const [comments, setComments] = useState([]);

  const onChange = (e) => {
    setInput(e.target.value);
  };
  const addComment = () => {
    setComments(
      comments.concat({
        id: comments.length + 1,
        content: input,
        userName: userData[0].id,
      })
    );
    setInput("");
  };
  const removeComment = (id) => {
    return setComments(comments.filter((comment) => comment.id !== id));
  };
  return (
    <div>
      <input value={input} onChange={onChange}></input>
      <button
        onClick={() => {
          addComment(input);
          setInput("");
        }}
      >
        댓글 달기
      </button>
      {comments.map((comment, index) => (
        <>
          <>
            <p>{comment.userName}</p>
            <button onClick={() => removeComment(comment.id)}>삭제</button>
          </>
          내용:{comment.content}
        </>
      ))}
    </div>
  );
};

export default CommentInput;
