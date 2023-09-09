"use client"

import Keyboard from '../components/Keyboard'
import TopBar from '../components/TopBar'
import Grid from '../components/Grid'
import useTextData from '@/utils/useTextData'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [grid, setGrid] = useState(["     ", "     ", "     ", "     ", "     ", "     "])
  const [row, setRow] = useState(0)
  const [letterColors, setLetterColors] = useState<{[letter: string]: string}>("QWERTYUIOPASDFGHJKLZXCVBNM".split('').reduce((o, key) => ({ ...o, [key]: "Default"}), {}))
  const [inputLockout, setInputLockout] = useState(false)
  const [word, validGuesses] = useTextData()

  useEffect(() => {
    console.log(word.current)
  }, [])

  const onLetterColorChange = (letter: string, color: string) => {
    if (letterColors[letter] === "Green" || (letterColors[letter] === "Yellow" && color !== "Green")) return
    
    setLetterColors(prevState => ({
      ...prevState,
      [letter]: color
    }));

  }

  const onEnter = () => {
    if (inputLockout || grid[row].trim().length != 5 || !validGuesses.current.includes(grid[row])) return

    setRow(row + 1)
    setInputLockout(true)
    setTimeout(() => {setInputLockout(false)}, 1700)
  }

  const onDelete = () => {
    if (inputLockout || grid[row].trim().length <= 0) return

    setGrid(grid.map((_, index) => {return (index == row ? grid[row].trim().slice(0, grid[row].trim().length-1) + Array.from(Array((5-grid[row].trim().length) + 1).keys()).map(() => {return " "}).join("") : grid[index])}))
  }

  const onChar = (val: string) => {
    if (inputLockout || grid[row].trim().length >= 5) return

    setGrid(grid.map((_, index) => {return (index == row ? grid[row].trim() + val + Array.from(Array((5-grid[row].trim().length) - 1).keys()).map(() => {return " "}).join("") : grid[index])}))
  }

  return (
    <>
      <TopBar />
      <main className="flex flex-col grow">
        <Grid
        entries={grid}
        revealedRows={row}
        onLetterColorChange={onLetterColorChange}
        word={word.current as string}
        />
        <Keyboard
        onEnter={onEnter}
        onDelete={onDelete}
        onChar={onChar}
        letterColors={letterColors}
        />
      </main>
      
    </>
  )
}
