"use client"

import { useEffect, useState } from "react"
import Cell from "./Cell"

type RowProps = {
    letters: string
    revealed: boolean
    onLetterColorChange: (letter: string, color: string) => void
    word: string
    wiggle: number | undefined
    setWiggle: ((val: number) => void) | undefined
}

export default function Row({
    letters,
    revealed,
    onLetterColorChange,
    word,
    wiggle,
    setWiggle
}: RowProps) {
    const [colors, setColors] = useState(["Default", "Default", "Default", "Default", "Default"])

    useEffect(() => {
        // Game Logic

        if (!revealed) return

        let tempWord = word
        let tempLetters = letters
        let tempColors = ["", "", "", "", ""]

        let stagedColorChanges: {[letter: string]: string} = {}

        for (let i = 0; i < tempLetters.length; i++) {
            if (tempLetters.charAt(i) === tempWord.charAt(i)) {
                tempColors[i] = "Green"
                // onLetterColorChange(letters[i], "Green")
                stagedColorChanges[letters[i]] = "Green"
                tempWord = tempWord.slice(0, i) + tempWord.charAt(i).toLowerCase() + tempWord.slice(i+1)
                tempLetters = tempLetters.slice(0, i) + tempLetters.charAt(i).toLowerCase() + tempLetters.slice(i+1)
            }
        }
        
        for (let i = 0; i < tempLetters.length; i++) {
            if (tempColors[i] !== "Green") {
                if (tempWord.includes(tempLetters.charAt(i))) {
                    tempColors[i] = "Yellow"
                    letters[i] in stagedColorChanges ? null : stagedColorChanges[letters[i]] = "Yellow"
                    tempWord = tempWord.slice(0, tempWord.indexOf(tempLetters[i])) + tempWord.charAt(tempWord.indexOf(tempLetters[i])).toLowerCase() + tempWord.slice(tempWord.indexOf(tempLetters[i])+1)
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
        <div data-wiggle={wiggle !== undefined ? wiggle : undefined} onAnimationEnd={() => {setWiggle !== undefined ? setWiggle(0) : undefined}} className="flex justify-center gap-1">
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