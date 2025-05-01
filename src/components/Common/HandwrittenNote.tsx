import { ReactElement } from "react"

interface HandwrittenNoteProps {
    text: string | ReactElement
    type: "neat" | "quick"
    size?: string
    color?: string
    weight?: "regular" | "semi-bold"
    fadeIn?: boolean
    width?: string
}
export const HandwrittenNote = ({text, size, color, type, weight, fadeIn, width}: HandwrittenNoteProps) => {
    const neatFontCss = '"Jim Nightshade", cursive'
    const quickFontCss = '"Homemade Apple", cursive'
    return (
    <div style={
        {
            fontSize: size ?? '16px', 
            margin: '15px', // some of the fonts have tails that go out of bounds
            color: color, 
            fontFamily: type === "neat" ? neatFontCss : quickFontCss, 
            fontWeight: weight === 'semi-bold' ? 500 : 400, 
            fontStyle: 'normal',
            padding: '10px',
            wordBreak: 'break-word',
            animation: fadeIn ? 'fadeIn 5s' : undefined,
            width: width
        }
    }>
        {text}
    </div>
    )
}