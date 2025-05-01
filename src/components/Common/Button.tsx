
interface ButtonProps {
    onClick: () => void
    className?: string
    color?: string
    border?: string
    style?: React.CSSProperties
    width?: string
    fontWeight?: number
}
export const Button = ({children, onClick, color, style, className, border, width, fontWeight}: React.PropsWithChildren<ButtonProps>) => {
    return(
    <button 
    className={className}
    onClick={onClick} 
    style={{...style, border: border, width: width, color: color, fontWeight: fontWeight }}>
        {children}
    </button>
    )
}