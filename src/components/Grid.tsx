import Row from "./Row"

type GridProps = {
    entries: Array<string>
    revealedRows: number
    onLetterColorChange: (letter: string, color: string) => void
    word: string
    wiggle: number
    setWiggle: (val: number) => void
}

export default function Grid({
    entries,
    revealedRows,
    onLetterColorChange,
    word,
    wiggle,
    setWiggle
}: GridProps) {
    return (
        <div className="Board-module_board__jeoPS flex flex-col grow items-center gap-1 justify-center">
            {
                entries.map((entry, index) => (
                    <Row
                    key={index}
                    letters={entry}
                    revealed={index < revealedRows}
                    wiggle={index === revealedRows ? wiggle : undefined}
                    setWiggle={index === revealedRows ? setWiggle : undefined}
                    onLetterColorChange={onLetterColorChange}
                    word={word}
                    />
                ))
            }
        </div>
    )
}