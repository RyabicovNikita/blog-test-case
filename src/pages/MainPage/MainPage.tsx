import "./MainPage.scss";
import { useEffect, useState } from "react";
import { getBlogs } from "../../api";
import { BlogApiResponse } from "../../types";
import { BlogCard } from "./components";

export const MainPage = () => {
    const [blogs, setBlogs] = useState<BlogApiResponse[]>([]);
    useEffect(() => {
        getBlogs().then((data) => setBlogs(data));
    }, []);
    return (
        <div className="main">
            <h1>Блог</h1>
            <p>
                Здесь мы делимся интересными кейсами из наших проектов, пишем
                про IT, а также переводим зарубежные статьи
            </p>
            <input
                type="text"
                placeholder="Поиск по названию статьи"
                className="main__search-input"
            />
            <div className="main__cards-list">
                {blogs.map(({ id, body, title }, index) => (
                    <BlogCard
                        body={body}
                        title={title}
                        key={id}
                        fullScreen={index === 0}
                    />
                ))}
            </div>
        </div>
    );
};
