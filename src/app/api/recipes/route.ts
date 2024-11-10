import { NextResponse } from "next/server";
import { getAllDocuments, connectDatabase, insertDocument, deleteDocument, getDatabaseClient } from "@/services/mongo";


export async function GET(request: Request) {
  const client = await getDatabaseClient();
  const recipes = await getAllDocuments(client, 'recipes')
  return NextResponse.json({ data: recipes });
}

export async function POST(request: Request) {
  const client = await getDatabaseClient();

  try {
    const newRecipe = await request.json();
    const insertedRecipeId = await insertDocument(client, 'recipes', newRecipe);

    client.close();
    return NextResponse.json({ data: { ...newRecipe, _id: insertedRecipeId } });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add document' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const idParam = searchParams.get('id');
  if (!idParam) return NextResponse.json({ message: 'Recipe ID not provided' }, { status: 400 });

  const id = parseInt(idParam, 10);
  if (isNaN(id)) {
    return NextResponse.json({ message: 'Recipe ID must be a valid number' }, { status: 400 });
  }
  const client = await getDatabaseClient();
  const result = await deleteDocument(client, 'recipes', id);

  return NextResponse.json({ message: 'Recipe deleted successfully', result });
}