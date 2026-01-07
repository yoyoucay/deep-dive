import { NextResponse } from "next/server";

export function middleware(request){
    console.log({requestName:'middleware', request});
    return NextResponse.next();
}

export const config = {
    matcher: '/news'
}
