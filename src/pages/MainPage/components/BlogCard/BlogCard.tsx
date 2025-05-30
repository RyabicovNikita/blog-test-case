import { Reactions } from "../../../../components";
import { BlogProps } from "../../../../types";

const Button = (props: { text: string; onClick?: () => void }) => (
  <button className="main__card-button" onClick={props.onClick}>
    {props.text}
  </button>
);

const BlogMini = (props: BlogProps) => (
  <div className={"main__card"}>
    <img
      src={props.imageUrl}
      alt="Картинка статьи"
      className="main__card-img"
    />
    <h2 className="main__card-header">{props.title}</h2>
    <div className="main__card-container">
      <Reactions />
      <Button text="Читать далее" />
    </div>
  </div>
);

const BlogFullScreen = (props: BlogProps) => (
  <div className={"main__card fullScreen"}>
    <img
      src={props.imageUrl}
      alt="Картинка статьи"
      className="main__card-img"
    />
    <div className="main__card-container">
      <h2 className="main__card-header">{props.title}</h2>
      <Reactions />
    </div>
    <p className="main__card-content">{props.body}</p>
  </div>
);

export const BlogCard = (props: BlogProps) => props.fullScreen ? <BlogFullScreen {...props} /> : <BlogMini {...props} />;
