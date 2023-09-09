"use client"

import { useEffect } from "react";
import Key from "./Key";

type KeyboardProps = {
    onEnter: () => void
    onDelete: () => void
    onChar: (val: string) => void
    letterColors: {[letter: string]: string}
}

export default function Keyboard({
    onEnter,
    onDelete,
    onChar,
    letterColors
}: KeyboardProps) {
    const onClick = (val: string) => {
        if ("qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM".includes(val)) {
            onChar(val.toUpperCase())
        }
        else if (val == "ENTER") {
            onEnter()
        }
        else if (val == "DELETE") {
            onDelete()
        }
    }

    useEffect(() => {
        const listener = (e: KeyboardEvent) => {
            console.log(e)
            if ("qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM".includes(e.key)) {
                onChar(e.key.toUpperCase())
            }
            else if (e.key == "Enter") {
                onEnter()
            }
            else if (e.key == "Backspace") {
                onDelete()
            }
        }
        window.addEventListener('keydown', listener)
        return () => {
            window.removeEventListener('keydown', listener)
        }
    }, [onChar, onEnter, onDelete])
    
    return (
        <div className="flex flex-col items-center gap-1 mt-[2%] mb-0 md:mb-8">
            <div className="flex justify-center gap-1">
                {"QWERTYUIOP".split('').map((letter) => (
                    <Key key={letter} val={letter} onClick={onClick} letterColor={letterColors[letter]} />
                ))}
            </div>
            <div className="flex justify-center gap-1">
                {"ASDFGHJKL".split('').map((letter) => (
                    <Key key={letter} val={letter} onClick={onClick} letterColor={letterColors[letter]} />
                ))}
            </div>
            <div className="flex justify-center gap-1">
                <Key width="4rem" val="ENTER" onClick={onClick} textSmall={true} />
                {"ZXCVBNM".split('').map((letter) => (
                    <Key key={letter} val={letter} onClick={onClick} letterColor={letterColors[letter]} />
                ))}
                <Key width="4rem" val="DELETE" onClick={onClick} textSmall={true} />
            </div>
        </div>
    )
}