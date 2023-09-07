"use client"

import { useEffect, useState } from "react"
import Cell from "./Cell"

type RowProps = {
    letters: string
    revealed: boolean
    onLetterColorChange: (letter: string, color: string) => void
}

export default function Row({
    letters,
    revealed,
    onLetterColorChange
}: RowProps) {
    const [colors, setColors] = useState(["Default", "Default", "Default", "Default", "Default"])

    useEffect(() => {
        if (!revealed) return

        let word = "WORLD"
        let tempLetters = letters
        let tempColors = ["", "", "", "", ""]

        for (let i = 0; i < tempLetters.length; i++) {
            if (tempLetters.charAt(i) === word.charAt(i)) {
                tempColors[i] = "Green"
                onLetterColorChange(letters[i], "Green")
                word = word.slice(0, i) + word.charAt(i).toLowerCase() + word.slice(i+1)
                tempLetters = tempLetters.slice(0, i) + tempLetters.charAt(i).toLowerCase() + tempLetters.slice(i+1)
            }
        }
        
        for (let i = 0; i < tempLetters.length; i++) {
            if (tempColors[i] !== "Green") {
                if (word.includes(tempLetters.charAt(i))) {
                    tempColors[i] = "Yellow"
                    onLetterColorChange(letters[i], "Yellow")
                }
                else {
                    tempColors[i] = "None"
                    onLetterColorChange(letters[i], "None")
                }
            }
        }

        setColors(tempColors)
    }, [letters, revealed])

    return (
        <div className="flex justify-center gap-1">
            {
                letters.split('').map((val, index) => (
                    <Cell
                    key={index}
                    revealed={revealed}
                    delay={index * 0.35}
                    color={colors[index]}
                    letter={val}
                    />
                ))
            }
        </div>
    )
}