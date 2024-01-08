import { NewsArticle } from '@/models/NewsArticles';
import Image from 'next/image';
import { Card } from 'react-bootstrap';
import placeholderImage from "@/assets/images/newsarticle_placeholder.jpg";
import styles from '@/styles/NewsArticleEntry.module.css';

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
                <Image
                    src={validUrlToImage || placeholderImage}
                    width={500}
                    height={200}
                    alt="News Article Image"
                    className={`card-img-top ${styles.image}`}
                />
                <Card.Body>
                     <Card.Title>{title}</Card.Title>
                     <Card.Text>{description}</Card.Text>
                </Card.Body> 
            </Card>
        </a>
    )
}

export default NewsArticleEntry;