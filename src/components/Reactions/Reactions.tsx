import "./Reactions.scss";
import { ReactComponent as DislikeIcon } from "../../icons/dislike.svg";
import { ReactComponent as LikeIcon } from "../../icons/like.svg";
import { useState } from "react";
import { getRandomNumber } from "../../utils";

interface ReactionsProps {
    likeFill?: string;
    dislikeFill?: string;
}

export const Reactions = ({
    likeFill = "gray",
    dislikeFill = "gray",
}: ReactionsProps) => {
    const [likeCount, setLikeCount] = useState(getRandomNumber(0, 50));
    const [dislikeCount, setDislikeCount] = useState(getRandomNumber(0, 50));
    return (
        <div className="reactions">
            <div className="reactions__like">
                {<LikeIcon fill={likeFill} />} <span>{likeCount}</span>
            </div>
            <div className="reactions__dislike">
                {<DislikeIcon fill={dislikeFill} />} <span>{dislikeCount}</span>
            </div>
        </div>
    );
};
