import React from "react";
import CommentInput from "../../../comment/commentInput";
import CommentLike from "../../../comment/commentLike";

function OverheadPress() {
  return (
    <div>
      <h1>Over Head Press</h1>

      <div>
        <ul>
          <li>바벨을 오버핸드 그립으로 잡고 손은 어깨보다 살짝 넓게 잡는다.</li>
          <li>
            상체를 뒤로 눕히지 말고 코어를 잡은 상태로 턱을 지나 정수리에 오게끔
            팔을 뻗는다.
          </li>
          <li>팔꿈치를 완전히 펴지 않고 자극을 계속 가져간다.</li>
          <li>천천히 바벨을 시작 자세 상태로 돌아온다.</li>
        </ul>
      </div>
      <div>
        <CommentInput />
        <CommentLike />
      </div>
    </div>
  );
}
export default overheadPress;
