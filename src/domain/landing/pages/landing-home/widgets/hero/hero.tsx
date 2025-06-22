import { Header } from "@/domain/core/components/header"
import { Typewriter } from "./typewriter"
import { Icon } from "@/domain/core/components/icon"

export const Hero = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-between">
            <Header />
            <div className="flex flex-col gap-6 items-center">
                <Typewriter />
                <h4 className="sm:text-xl lg:text-2xl text-center px-8 py-4 bg-contrast rounded-md">
                    <span className="text-purple">{`const [`}</span>
                    <span className="text-red">{`ideas`}</span>
                    <span>{`, `}</span>
                    <span className="text-red">{`setIdeas`}</span>
                    <span className="text-purple">{`] = `}</span>
                    <span className="text-accent">{`useState`}</span>
                    <span className="text-purple">{`(`}</span>
                    <span className="text-green">{`"code"`}</span>
                    <span className="text-purple">{`)`}</span>
                </h4>
            </div>
            <div className="w-full flex gap-3 pb-6 justify-center">
                <p>Scroll</p>
                <Icon.Mouse />
                <p>Down</p>
            </div>
        </div>
    )
}