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
        // Game Logic

        if (!revealed) return

        let word = "WORLD"
        let tempLetters = letters
        let tempColors = ["", "", "", "", ""]

        let stagedColorChanges: {[letter: string]: string} = {}

        for (let i = 0; i < tempLetters.length; i++) {
            if (tempLetters.charAt(i) === word.charAt(i)) {
                tempColors[i] = "Green"
                // onLetterColorChange(letters[i], "Green")
                stagedColorChanges[letters[i]] = "Green"
                word = word.slice(0, i) + word.charAt(i).toLowerCase() + word.slice(i+1)
                tempLetters = tempLetters.slice(0, i) + tempLetters.charAt(i).toLowerCase() + tempLetters.slice(i+1)
            }
        }
        
        for (let i = 0; i < tempLetters.length; i++) {
            if (tempColors[i] !== "Green") {
                if (word.includes(tempLetters.charAt(i))) {
                    tempColors[i] = "Yellow"
                    letters[i] in stagedColorChanges ? null : stagedColorChanges[letters[i]] = "Yellow"
                    word = word.slice(0, word.indexOf(tempLetters[i])) + word.charAt(word.indexOf(tempLetters[i])).toLowerCase() + word.slice(word.indexOf(tempLetters[i])+1)
                    tempLetters = tempLetters.slice(0, i) + tempLetters.charAt(i).toLowerCase() + tempLetters.slice(i+1)
                }
                else {
                    tempColors[i] = "None"
                    letters[i] in stagedColorChanges ? null : stagedColorChanges[letters[i]] = "None"
                }
            }
        }
        
        for (let key in stagedColorChanges) {
            onLetterColorChange(key, stagedColorChanges[key])
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