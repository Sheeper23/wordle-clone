import Row from "./Row"

type GridProps = {
    entries: Array<string>
    revealedRows: number
    onLetterColorChange: (letter: string, color: string) => void
}

export default function Grid({
    entries,
    revealedRows,
    onLetterColorChange
}: GridProps) {
    return (
        <div className="flex flex-col grow items-center gap-1 justify-center">
            {
                entries.map((entry, index) => (
                    <Row
                    key={index}
                    letters={entry}
                    revealed={index < revealedRows}
                    onLetterColorChange={onLetterColorChange}
                    />
                ))
            }
        </div>
    )
}