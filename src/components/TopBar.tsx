import Link from "next/link";
import { FaGithub } from 'react-icons/fa'

export default function TopBar() {
    return (
        <header className="flex mb-[2%] items-center justify-center border-b border-borders">
            <div className="flex w-full max-w-5xl justify-between mx-2 my-3 items-center">
                <div>{/* placeholder */}</div>
                <p className="font-bold text-5xl font-title text-white cursor-default">Wordle</p>
                <Link className="hover:bg-cyan-400 rounded-full select-none" target="_blank" href={"https://github.com/Sheeper23"}>
                    <FaGithub color="white" size="30" />
                </Link>
            </div>
        </header>
    )
}