import "./BlogCard.scss";
import { Reactions } from "../../../../components";
import { BlogProps } from "../../../../types";

const Button = (props: { text: string; onClick?: () => void }) => (
    <button className="btn" onClick={props.onClick}>
        {props.text}
    </button>
);

const BlogMini = (props: BlogProps) => (
    <div className="card">
        <img src={props.imageUrl} alt="Картинка статьи" className="card__img" />
        <h2 className="card__header">{props.title}</h2>
        <div className="card__container">
            <Reactions />
            <Button text="Читать далее" />
        </div>
    </div>
);

const BlogFullScreen = (props: BlogProps) => (
    <div className={"card fullScreen"}>
        <img src={props.imageUrl} alt="Картинка статьи" className="card__img" />
        <div className="card__container">
            <h2 className="card__header">{props.title}</h2>
            <Reactions />
        </div>
        <p className="card__content">{props.body}</p>
    </div>
);

export const BlogCard = (props: BlogProps) =>
    props.fullScreen ? <BlogFullScreen {...props} /> : <BlogMini {...props} />;
