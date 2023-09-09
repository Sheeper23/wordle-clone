import { useRef } from 'react'
import words from '../../public/wordle-answers-alphabetical.json'
import possibleGuesses from '../../public/wordle-master-alphabetical.json'

export default function useTextData() {
    const word = useRef(words["words"][Math.floor(Math.random() * words["words"].length)].toUpperCase())
    const validGuesses = useRef(possibleGuesses["guesses"].map((x) => {return x.toUpperCase()}))
    
    return [word, validGuesses]
}