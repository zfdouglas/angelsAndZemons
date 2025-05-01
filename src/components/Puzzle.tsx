import { ReactElement } from "react"

const PuzzleStyling =  {
    marginTop: '15px',
    width: '80%',
    height: '70%',
    margin: 'auto',
    display: 'flex',
    background: 'rgb(255, 250, 240, .8)',
    flexDirection: 'column'
}
interface PuzzleProps {
    content: ReactElement
}
export const Puzzle = ({content}: PuzzleProps) => {
    return(
        <div style={PuzzleStyling as React.CSSProperties}>
            {content}
        </div>
    )
}