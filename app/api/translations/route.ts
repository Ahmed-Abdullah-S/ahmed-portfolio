import { NextRequest, NextResponse } from 'next/server';
import { getTranslations } from '@/lib/payload';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const lang = (searchParams.get('lang') || 'en') as 'en' | 'ar';
    
    const translations = await getTranslations(lang);
    
    return NextResponse.json(translations);
  } catch (error) {
    console.error('Error in translations API:', error);
    return NextResponse.json({}, { status: 500 });
  }
}

