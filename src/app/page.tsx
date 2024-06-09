"use client";

import "./appStyle.scss";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import LoaderGlass from "@/components/loaders/loader-glass/LoaderGlass";

export default function App() {
    useEffect(() => {
        redirect("/he/home");
    }, []);

    return (
        <div className="app">
            <h1>{"Freedi: Make Decisions Together"}</h1>
            <LoaderGlass />
            <h2>{("Please wait while the page loads")}</h2>
        </div>
    );
}
