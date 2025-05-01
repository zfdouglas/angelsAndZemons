import { FullWidthCenteredContainer } from "../Common/FullWidthCenteredContainer"
import { HandwrittenNote } from "../Common/HandwrittenNote"
import { Button } from "../Common/Button"

interface PuzzleEightProps {
    onClickForward: (completedPuzzle: number) => void
}
export const PuzzleEight = ({onClickForward}: PuzzleEightProps) => {

    const setDone = () => {
        onClickForward(8)
    }
    return(
        <FullWidthCenteredContainer style={{height: '100%'}}>
            <div style={{width: '100%', height: '90%', display: 'flex', flexWrap: 'wrap', placeContent: 'space-between center'}}>
                <HandwrittenNote
                    color={'#383838'}
                    text={"A ladder above, the universe at his feet, his final resting place is where you will meet."}
                    type={'quick'}
                    size="20px"
                />
                <Button onClick={()=>setDone()} border={'2px solid #383838'} width={'100px'} color={'#383838'} fontWeight={600} style={{backgroundColor: 'transparent'}}>
                    HERE
                </Button>
            </div>
        </FullWidthCenteredContainer>
    )
}