import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps } from 'next';
import { NewsArticle, NewsArticlesResponse } from '@/models/NewsArticles';
import NewsArticlesGrid from '@/components/NewsArticlesGrid';
import { Alert } from 'react-bootstrap';

interface BreakingNewsPageProps {
  newsArticles: NewsArticle[],
}

// This function is run on the server -- not in the browser
export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () => {
  const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.NEWS_API_KEY);
  const newsResponse: NewsArticlesResponse = await response.json();
  return {
    props: { newsArticles: newsResponse.articles }
  }
  // let error go to 500 page
}

export default function BreakingNewsPage({ newsArticles }: BreakingNewsPageProps) {
  return (
    <>
      <Head>
        <title key="title">Breaking News -- NextJS tutorial</title>
      </Head>
      <main>
        <h1>Breaking News</h1>
        <Alert>
          This page uses <strong>getServerSideProps</strong> to fetch data server-side on every request.
          This allows search engines to crawl the page content and <strong>improves SEO</strong>.
        </Alert>
        <NewsArticlesGrid articles={newsArticles} />
      </main>
    </>
  )
}
