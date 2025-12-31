import { NextRequest, NextResponse } from 'next/server';
import { insertMessageSchema } from '@shared/schema';
import { db } from '@/lib/db';
import { messages } from '@shared/schema';
import { z } from 'zod';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const input = insertMessageSchema.parse(body);
    
    const [message] = await db.insert(messages).values(input).returning();
    
    return NextResponse.json(message, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        },
        { status: 400 }
      );
    }
    throw err;
  }
}

