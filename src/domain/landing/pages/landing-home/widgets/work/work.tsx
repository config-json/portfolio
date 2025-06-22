"use client"

import { WorkEntry } from "./work-entry";
import { WORKS } from "./constants";
import { useHash } from "@/domain/core/hooks/useHash";
import { useEffect, useRef } from "react";

export const Work = () => {
    const hash = useHash();
    const workRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (hash === "#work") {
            workRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [hash]);

    return (
        <div className="flex flex-col gap-12 items-center px-8 md:px-16">
            <h2 ref={workRef} className="text-purple text-6xl font-semibold">
                Work
            </h2>
            {WORKS.map((work, index) => (
                <WorkEntry key={index} reverse={index % 2 !== 0} work={work} />
            ))}
        </div>
    )
}