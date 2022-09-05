import axios from "axios";
import { response } from "express";
import React, { useState } from "react";
import { commentLikeApiUrl } from "../../../apiUrl";

const CommentLike = () => {
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);

  onLikeButtonClick = () => {
    axios
      .post(commentLikeApiUrl, {
        CommentId: inputName, // ??이게 맞나
      })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
        alert("오류 발생. 다시 눌러주시기 바랍니다.");
      });

    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  };
  return (
    <>
      <button onClick={onLikeButtonClick}>좋아요</button>
    </>
  );
};

export default CommentLike;
