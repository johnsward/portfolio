"use client";
import React, {useState} from "react";
import { useRouter } from "next/navigation";

export const Header = () => {
    const router = useRouter();
    return (
        <div className="flex flex-row align-middle justify-between p-4">
            <h1>John Swärd</h1>
            <ul className="flex flex-row gap-4">
                <li className="cursor-pointer" onClick={() => router.push("/about")}>About</li>
                <li className="cursor-pointer" onClick={() => router.push("/projects")}>Projects</li>
                <li className="cursor-pointer" onClick={() => router.push("/contact")}>Contact</li>
            </ul>
        </div>
    );
    };