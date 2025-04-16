"use server";

import getCollection, { ALIAS_COLLECTION } from "@/db";

export default async function getAlias(
    alias: string,
): Promise< string | null> {

    if (!alias) {
        return null;
    }

    const aliasCollection = await getCollection(ALIAS_COLLECTION);
    const data = await aliasCollection.findOne({ alias });

    if (data === null) {
        return null;
    }

    return data.url;
}