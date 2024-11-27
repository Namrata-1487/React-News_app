import { useEffect, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const NewsItem = (props) => {
    const { category } = props;
    cons[news, setNews] = useState([]);

    useEffect(() => {
        let fetch = async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=us`;
            if (category) {
                url = url + `&category=${category}` + `&apiKey=${process.env.REACT_APP_GNEWS_API_KEY}`;
            }
            url = url + `&apiKey=${process.env.REACT_APP_GNEWS_API_KEY}`;

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setNews(data.articles);
        }
        fetch();
    })
    return (
        <>

        </>
    )
}
export default NewsItem();