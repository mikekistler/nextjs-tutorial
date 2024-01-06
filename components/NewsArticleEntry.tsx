import { NewsArticle } from '@/models/NewsArticles';
import { Card } from 'react-bootstrap';

interface NewsArticleEntryProps {
    article: NewsArticle,
}

const NewsArticleEntry = ({ article : {title, description, url, urlToImage } }: NewsArticleEntryProps) => {
    const validUrlToImage = (urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://"))
         ? urlToImage : undefined;
    return (
        <a href={url}>
            <Card className="h-100"> {/* "h-100" is a Bootstrap class that makes the Card take up the full height of its parent 
                                          https://getbootstrap.com/docs/4.0/utilities/sizing/ */}
               <Card.Img variant="top" src={validUrlToImage} />
                <Card.Body>
                     <Card.Title>{title}</Card.Title>
                     <Card.Text>{description}</Card.Text>
                </Card.Body> 
            </Card>
        </a>
    )
}

export default NewsArticleEntry;