"use server";

export default async function checkURL(url: string): Promise<boolean>{
    try{
        const res = await fetch(url);
        return res.status >= 200 && res.status < 400;
    }
    catch(err){
        console.error(err);
        return false;
    }
}

