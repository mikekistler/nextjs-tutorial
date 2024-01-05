import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps } from 'next';
import { NewsArticle, NewsArticlesResponse } from '@/models/NewsArticles';

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
}

export default function BreakingNewsPage({ newsArticles }: BreakingNewsPageProps) {
  return (
    <>
      <Head>
        <title key="title">Breaking News -- NextJS tutorial</title>
      </Head>
      <main>
        <h1>Breaking News</h1>
        {JSON.stringify(newsArticles)}
      </main>
    </>
  )
}
