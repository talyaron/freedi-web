"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function App() {
    useEffect(() => {
        console.log("test");
        redirect("/home");
    }, []);

    return (
        <div>
            <h1>App Page</h1>
        </div>
    );
}
