"use client";

import { Button, FormHelperText, TextField } from "@mui/material";
import { useState } from "react";
import createAlias from "@/app/lib/createAlias";

export default function URLForm() {
    const [alias, setAlias] = useState("");
    const [URL, setURL] = useState("");
    const [error, setError] = useState("");
    const [shortenedURL, setShortenedURL] = useState("");

    return (
        <p> Testing ! </p>
    );
}
