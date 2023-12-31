type CellProps = {
    letter: string
    revealed: boolean
    delay: number
    color: string
}

export default function Cell({
    letter,
    revealed,
    delay,
    color
}: CellProps) {
    const styling: React.CSSProperties = {
        borderColor: `${letter === " " ? "rgb(51 51 52)" : "rgb(76 77 78)"}`,
        animationName: `${letter === " " ? "" : "letterPlaced"}${revealed ? `, letterFlip${color}` : ""}`,
        animationDuration: `${letter === " " ? "" : "0.1s"}${revealed ? ", 0.3s" : ""}`,
        animationTimingFunction: `${letter === " " ? "" : "linear"}${revealed ? ", linear" : ""}`,
        animationDelay: `${letter === " " ? "" : "0s"}${revealed ? `, ${delay}s` : ""}`,
        animationFillMode: "forwards"
    }

    return (
        <div style={styling} className="flex w-14 aspect-square items-center justify-center border-2 select-none">
            <p
            data-state={
                `${color === "Green"
            ? "correct"
            : (color === "Yellow"
            ? "present"
            : (color === "None"
            ? "absent"
            : "empty"))}`
            }
            className="Tile-module_tile__UWEHN text-white text-3xl font-bold">
                {letter}
            </p>
        </div>
    )
}