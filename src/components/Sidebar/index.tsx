import React from "react"
import {
    helpLinks,
    mainLinks,
    secondaryLinks,
    subscriptionLinks,
    textLinks,
} from "./links.tsx"

export const Sidebar: React.FC = () => {
    return (
        <div className="w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 sidebar">
            <ul className="flex flex-col border-b-2 border-gray-700">
                {mainLinks.map(({ icon, name }, index) => (
                    <li
                        key={name + index}
                        className={`pl-6 py-3 hover:bg-zinc-600 ${
                            name === "Главная" ? "bg-slate-600" : ""
                        }`}
                    >
                        <a href="#" className="flex items-center gap-5">
                            {icon}
                            <span className="text-sm tracking-wider">
                                {name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-700">
                {secondaryLinks.map(({ icon, name }, index) => (
                    <li
                        key={name + index}
                        className="pl-6 py-3 hover:bg-zinc-600"
                    >
                        <a href="#" className="flex items-center gap-5">
                            {icon}
                            <span className="text-sm tracking-wider">
                                {name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-700">
                {subscriptionLinks.map(({ icon, name }, index) => (
                    <li
                        key={name + index}
                        className="pl-6 py-3 hover:bg-zinc-600"
                    >
                        <a href="#" className="flex items-center gap-5">
                            {icon}
                            <span className="text-sm tracking-wider">
                                {name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-700">
                {helpLinks.map(({ icon, name }, index) => (
                    <li
                        key={name + index}
                        className="pl-6 py-3 hover:bg-zinc-600"
                    >
                        <a href="#" className="flex items-center gap-5">
                            {icon}
                            <span className="text-sm tracking-wider">
                                {name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
            <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
                {textLinks[0].map((link, index) => (
                    <li key={link + index}>{link}</li>
                ))}
            </ul>
            <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
                {textLinks[1].map((link, index) => (
                    <li key={link + index}>{link}</li>
                ))}
            </ul>
            <span className="px-4 text-sm text-zinc-400">
                &copy; 2023 Google
            </span>
            <br />
            <p className="px-4 pt-3 text-sm text-zinc-400">
                Это клон приложения, созданный в образовательных целях
            </p>
        </div>
    )
}
