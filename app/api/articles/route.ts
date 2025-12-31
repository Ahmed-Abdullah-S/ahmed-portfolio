import { NextRequest, NextResponse } from 'next/server';
import { getArticles } from '@/lib/payload';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const lang = (searchParams.get('lang') || 'en') as 'en' | 'ar';
    
    const articles = await getArticles(lang);
    
    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error in articles API:', error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}

