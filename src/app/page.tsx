"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function App() {
    useEffect(() => {
        redirect("/home");
    }, []);

    return (
        <div>
            <h1>App Page</h1>
        </div>
    );
}
