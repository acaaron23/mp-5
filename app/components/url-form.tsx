"use client";

import { useState } from "react";
import { Button, FormHelperText, TextField } from "@mui/material";
import createAlias from "@/app/lib/createAlias";

export default function UrlForm() {
    const [alias, setAlias] = useState("");
    const [URL, setURL] = useState("");
    const [error, setError] = useState("");
    const [shortenedURL, setShortenedURL] = useState("");

    return (
        <p> Testing ! </p>
    );
}
