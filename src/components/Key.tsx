type KeyProps = {
    val: string
    width?: string
    onClick: (val: string) => void
}

export default function Key({
    val,
    width = '2.5rem',
    onClick
}: KeyProps) {
    const click = () => {
        onClick(val)
    }
    
    return (
        <button
        aria-label={val}
        style={{width: `${width}`}}
        onClick={click}
        className="md:w-10 md:h-14 h-12 bg-slate-400 rounded select-none outline-none">
            <p className="text-white font-semibold text-sm">{val}</p>
        </button>
    )
}