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
        borderColor: `${letter === " " ? "rgb(100 116 139)" : "rgb(255 255 255)"}`,
        animationName: `${letter === " " ? "" : "letterPlaced"}${revealed ? `, letterFlip${color}` : ""}`,
        animationDuration: `${letter === " " ? "" : "0.3s"}${revealed ? ", 0.3s" : ""}`,
        animationTimingFunction: `${letter === " " ? "" : "linear"}${revealed ? ", linear" : ""}`,
        animationDelay: `${letter === " " ? "" : "0s"}${revealed ? `, ${delay}s` : ""}`,
        animationFillMode: "forwards"
    }

    return (
        <div style={styling} className="flex w-14 aspect-square items-center justify-center rounded border-2 select-none bg-slate-400">
            <p className="text-white text-4xl font-extrabold">{letter}</p>
        </div>
    )
}