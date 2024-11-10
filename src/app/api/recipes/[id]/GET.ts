import { NextResponse } from 'next/server';
import { getDocumentById, getDatabaseClient }  from "@/services/mongo"


export async function GET(request: Request, { params }: { params: { id: string } }) {
    const client = await getDatabaseClient();
    const idParam = params.id;

    if (!idParam) return NextResponse.json({ message: 'Recipe ID not provided' }, { status: 400 });

  const id = parseInt(idParam, 10);
  if (isNaN(id)) {
    return NextResponse.json({ message: 'Recipe ID must be a valid number' }, { status: 400 });
  }

    const document = await getDocumentById(client, 'recipes', id);

    if (!document) {
        return NextResponse.json({ message: 'Document not found' }, { status: 404 });
    }

    return NextResponse.json({ data: document });
}
