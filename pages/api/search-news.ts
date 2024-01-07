// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NewsArticlesResponse } from '@/models/NewsArticles';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const searchQuery = req.query.q?.toString();

  if (!searchQuery) {
    res.status(400).json({ error: 'Missing search query' });
    return;
  }

  const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.NEWS_API_KEY}`);
  const newsResponse: NewsArticlesResponse =  await response.json();

  res.status(200).json(newsResponse.articles)
}
