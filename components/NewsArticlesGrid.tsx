import { NewsArticle } from "@/models/NewsArticles";
import { Col, Row } from "react-bootstrap";
import NewsArticleEntry from "./NewsArticleEntry";

interface NewsArticlesGridProps {
    articles: NewsArticle[],
}

const NewsArticlesGrid = ({articles}: NewsArticlesGridProps) => {
    return (
        // className "g-4" is a bootstrap utility class that adds a gap between the rows in the grid
        // https://getbootstrap.com/docs/5.0/layout/gutters/#horizontal--vertical-gutters
        <Row xs={1} sm={2} xl={3} className="g-4">
            {articles.map((article, index) => (
                <Col key={index}>
                    <NewsArticleEntry article={article} />
                </Col>
            ))}
        </Row>
     );
}

export default NewsArticlesGrid;