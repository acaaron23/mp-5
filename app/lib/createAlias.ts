"use server";

import getCollection, { ALIAS_COLLECTION } from "@/db";
import { AliasProps } from "@/types";
import getAlias from "./getAlias";

export default async function createAlias(
    url: string,
    alias: string,
): Promise<AliasProps> {
    const p = {
        url: url,
        alias: alias,
    };

    if (!url || !alias){
        throw new Error ("No Url or Alias provided");
    }

    const checkAlias = await getAlias(alias);
    if (checkAlias){
        throw new Error ("Alias already exists");
    }

    const aliasCollection = await getCollection(ALIAS_COLLECTION);
    const res = await aliasCollection.insertOne({ ...p });

    if (!res.acknowledged) {
        throw new Error("DB insert failed");
    }

    return {...p} ;
}