"use client";
import React from "react";

export const NavigationMenu = () => {

    return (
        <div className="">
            <ul className="flex flex-col gap-4">
                <li className="cursor-pointer hover:text-slate-500">About</li>
                <li className="cursor-pointer hover:text-slate-500">Experience</li>
                <li className="cursor-pointer hover:text-slate-500">Resumé</li>
            </ul>
        </div>
    )
}