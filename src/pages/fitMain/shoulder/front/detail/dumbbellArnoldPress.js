import React from "react";
import CommentInput from "../../../comment/commentInput";
import CommentLike from "../../../comment/commentLike";
function DumbbellArnoldPress() {
  return (
    <div>
      <div>
        <h1>Dumbbell Arnold Press</h1>
      </div>
      <div>
        <img src="/img/shoulder/front/arnold-press.jpg" />
      </div>
      <div>
        <ul>
          <li>발을 어깨 넓이로 벌린 후, 덤벨을 어꺠 위로 올린다.</li>
          <li>
            손바닥이 얼굴을 향하게 하고, 팔꿈치를 옆구리 쪽으로 하여 어깨
            넓이보다 약간 넓게 덤벨을 잡는다.
          </li>
          <li>
            등과 허리를 고정시키고 그립을 안쪽으로 회전시키며 머리 위로
            들어올린다.
          </li>
          <li>팔꿈치를 완전히 펴지 말고, 약간 구부린 상태까지 들어올린다.</li>

          <li>
            숨을 들이쉬며 그립을 바깥쪽으로 회전시키며 천천히 시작 자게솔
            돌아온다.
          </li>
        </ul>
      </div>
      <div>
        <CommentInput />
        <CommentLike />
      </div>
    </div>
  );
}
export default DumbbellArnoldPress;
