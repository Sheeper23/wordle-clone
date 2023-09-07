type KeyProps = {
    val: string
    width?: string
    onClick: (val: string) => void
    letterColor?: string
    textSmall?: boolean
}

export default function Key({
    val,
    width = '2.5rem',
    onClick,
    letterColor = "Default",
    textSmall
}: KeyProps) {
    const click = () => {
        onClick(val)
    }
    
    const styling: React.CSSProperties = {
        width: `${width}`,
        animationName: `${letterColor !== "Default" ? `keyReveal${letterColor}` : ""}`,
        animationDuration: "0s",
        animationDelay: "1.7s",
        animationFillMode: "forwards"
    }

    return (
        <button
        style={styling}
        onClick={click}
        className="md:w-10 md:h-14 h-12 bg-keys rounded select-none outline-none">
            <p style={textSmall ? {fontSize: "0.75rem", lineHeight: "1rem"} : {}} className="text-white font-semibold text-xl">{val}</p>
        </button>
    )
}