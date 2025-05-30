import { ReactComponent as DislikeIcon } from "../..icons/dislike.svg";
import { ReactComponent as LikeIcon } from "../../icons/like.svg";
import { useState } from "react";
import { getRandomNumber } from "../../utils";
export const Reactions = (props: {likeFill : String, dislikeFill : String}) => {
  const [likeCount, setLikeCount] = useState(getRandomNumber(0, 50));
  const [dislikeCount, setDislikeCount] = useState(getRandomNumber(0, 50));
  return (
    <div className="main__card-reactions">
      <div className="main__card-reactions-like">
        {<LikeIcon />} <span>{likeCount}</span>
      </div>
      <div className="main__card-reactions-dislike">
        {<DislikeIcon />} <span>{dislikeCount}</span>
      </div>
    </div>
  );
};