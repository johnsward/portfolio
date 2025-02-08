"use client";
import React, {useState} from "react";

export const NavigationMenu = () => {
    const [isActive, setIsActive] = useState<Boolean>(false);

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