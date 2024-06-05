import {jwtVerify} from "jose"

export const verifyAuth = async(token:string)=>{

    try {
        const verfied = await jwtVerify(token, new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET))
        return verfied.payload as {id:string}
    } catch (error) {
        throw new Error("your token has expired")
    }

}