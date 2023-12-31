"use client"

import Keyboard from '../components/Keyboard'
import TopBar from '../components/TopBar'
import Grid from '../components/Grid'
import useTextData from '@/utils/useTextData'
import { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'

export default function Home() {
  const [grid, setGrid] = useState(["     ", "     ", "     ", "     ", "     ", "     "])
  const [row, setRow] = useState(0)
  const [letterColors, setLetterColors] = useState<{[letter: string]: string}>("QWERTYUIOPASDFGHJKLZXCVBNM".split('').reduce((o, key) => ({ ...o, [key]: "Default"}), {}))
  const [inputLockout, setInputLockout] = useState(false)
  const [word, validGuesses] = useTextData()
  const [wiggle, setWiggle] = useState(0)

  const onLetterColorChange = (letter: string, color: string) => {
    if (letterColors[letter] === "Green" || (letterColors[letter] === "Yellow" && color !== "Green")) return
    
    setLetterColors(prevState => ({
      ...prevState,
      [letter]: color
    }));

  }

  const onEnter = () => {
    if (inputLockout || grid[row].trim().length != 5) return
    if (!validGuesses.current.includes(grid[row])) {
      setWiggle(1)
      toast.error(`Invalid word:\n${grid[row]}`, {style: {backgroundColor: "red", color: "white"}, duration: 2000})
      return
    }

    setRow(row + 1)
    setInputLockout(true)
    if (!(grid[row] === (word.current as string)) && row+1 < 6) {
      setTimeout(() => {setInputLockout(false)}, 1700)
    }
    else {
      if (grid[row] === word.current as string) {
        setTimeout(() => {toast.success(`You win!`, {style: {backgroundColor: "rgb(68 130 72)", color: "white"}, duration: Infinity})}, 1700)
      }
      else if (row+1 >= 6) {
        setTimeout(() => {toast(`The word was:\n${word.current}`, {duration: Infinity})}, 1700)
      }
    }
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
        wiggle={wiggle}
        setWiggle={setWiggle}
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