import NewsArticlesGrid from "@/components/NewsArticlesGrid"
import { NewsArticle, NewsArticlesResponse } from "@/models/NewsArticles"
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Alert } from "react-bootstrap";

interface CategoryNewsPageProps {
    newsArticles: NewsArticle[],
}

export const getStaticPaths: GetStaticPaths = async () => {
    const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

    // We need to return an array of paths with the params object for each path.
    const paths = categories.map((category) => ({
        params: { category }
    }));

    // We need to return an object with the paths array, and fallback: false.
    // The paths array tells Next.js which pages to render at build time.
    // The fallback: false tells Next.js to show a 404 page if the page is not pre-rendered.
    return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<CategoryNewsPageProps> = async ({ params }) => {
    const category = params?.category?.toString();
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=" + category + "&apiKey=" + process.env.NEWS_API_KEY);
    const newsResponse: NewsArticlesResponse = await response.json();
    return {
        props: { newsArticles: newsResponse.articles },
        // Refetch the data every 5 minutes
        revalidate: 5 * 60 // 5 minutes
    }
}

const CategoryNewsPage = ({ newsArticles }: CategoryNewsPageProps) => {
    const router = useRouter();
    const category = router.query.category?.toString();
    const title = "Category: " + category?.charAt(0).toUpperCase() + category?.slice(1);

    return (
        <>
            <Head>
                <title key="title">{`{title} -- NextJS tutorial`}</title>
            </Head>
            <main>
                <h1>{title}</h1>
                <Alert>
                    This page uses <strong>getStaticProps</strong> for very high page loading speed
                    and <strong>incremental static regeneration</strong> to show data not older than <strong>5 minutes</strong>.
                </Alert>
                <NewsArticlesGrid articles={newsArticles} />
            </main>
        </>

    );
}

export default CategoryNewsPage;