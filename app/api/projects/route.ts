import { NextRequest, NextResponse } from 'next/server';
import { getProjects } from '@/lib/payload';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const lang = (searchParams.get('lang') || 'en') as 'en' | 'ar';
    
    const projects = await getProjects(lang);
    
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error in projects API:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

