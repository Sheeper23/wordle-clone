import Row from "./Row"

type GridProps = {
    entries: Array<string>
    revealedRows: number
}

export default function Grid({
    entries,
    revealedRows
}: GridProps) {


    return (
        <div className="flex flex-col grow items-center gap-1 justify-center">
            {
                entries.map((entry, index) => (
                    <Row key={index}
                    letters={entry}
                    revealed={index < revealedRows}
                    />
                ))
            }
        </div>
    )
}