import { NextRequest, NextResponse } from 'next/server';
import { getPersonalInfo } from '@/lib/payload';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const lang = (searchParams.get('lang') || 'en') as 'en' | 'ar';
    
    const personalInfo = await getPersonalInfo(lang);
    
    return NextResponse.json(personalInfo);
  } catch (error) {
    console.error('Error in personal-info API:', error);
    return NextResponse.json({ error: 'Failed to fetch personal info' }, { status: 500 });
  }
}

