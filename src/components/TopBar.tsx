import Link from "next/link";
import { FaGithub } from 'react-icons/fa'

export default function TopBar() {
    return (
        <header className="flex mb-[2%] justify-center border-b border-t border-b-borders border-t-white">
            <div className="flex w-full max-w-5xl justify-between mx-2 my-3 items-center">
                <div>{/* placeholder */}</div>
                <p className="font-bold text-4xl font-title text-white cursor-default">Wordle</p>
                <Link className="hover:scale-110 hover:rotate-[360deg] rounded-full select-none transition-transform duration-300 ease-in-out" target="_blank" href={"https://github.com/Sheeper23"}>
                    <FaGithub color="white" size="30" />
                </Link>
            </div>
        </header>
    )
}