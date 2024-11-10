import { NextResponse } from "next/server";
import { getAllDocuments,connectDatabase,insertDocument,deleteDocument } from "@/services/mongo";


export async function GET(request: Request)
{
    const client=await connectDatabase();
    const recipes=await getAllDocuments(client,'recipes')
    client.close();
    return NextResponse.json({data:recipes});
}

export async function POST(request: Request) {
    const client = await connectDatabase();
    try {
      const newRecipe = await request.json();
      const insertedRecipeId = await insertDocument(client, 'recipes', newRecipe);
      client.close();
      return NextResponse.json({ data: { ...newRecipe, _id: insertedRecipeId } });
    } catch (error) {
      client.close();
      return NextResponse.json({ error: 'Failed to add document' }, { status: 500 });
    }
  }

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ message: 'Recipe ID not provided' }, { status: 400 });
    const client = await connectDatabase();
    const result = await deleteDocument(client, 'recipes', id);
    client.close();
  
    return NextResponse.json({ message: 'Recipe deleted successfully', result });
  }