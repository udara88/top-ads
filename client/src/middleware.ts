"use cl"
import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "../src/lib/auth";


export async function middleware(req:NextRequest) {
    
    const token =  req.cookies.get('jwt')?.value;
   const verifiedToken  = token && await verifyAuth(token).catch((error)=>{
        console.log(error);
   });

if(!verifiedToken){
    return NextResponse.redirect(new URL('/',req.url))
}

 }

export const config = {
    matcher: ['/profile'],
}