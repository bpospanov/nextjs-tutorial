import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';

export async function DELETE(_, { params }) {
  const id = params.id;

  const supabase = createRouteHandlerClient({ cookies });

  // invalid input syntax for type bigint: "7)"
  const { error } = await supabase.from('Tickets').delete().eq('id', id);

  return NextResponse.json({ error });
}
