type KeyProps = {
    val: string
    width?: string
    onClick: (val: string) => void
    letterColor?: string
}

export default function Key({
    val,
    width = '2.5rem',
    onClick,
    letterColor = "Default"
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
        className="md:w-10 md:h-14 h-12 bg-slate-400 rounded select-none outline-none">
            <p className="text-white font-semibold text-sm">{val}</p>
        </button>
    )
}