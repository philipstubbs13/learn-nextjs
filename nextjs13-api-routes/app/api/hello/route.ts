import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: Request) {

    redirect('http://localhost:3000')

    return new Response('hi')
}

export async function POST(req: NextRequest) {
    // const body = await req.json();
    // console.log(req.cookies.get('cookie'))
    // req.headers.get('Authorization')

    return new Response(JSON.stringify({ hello: 'world' }));
}