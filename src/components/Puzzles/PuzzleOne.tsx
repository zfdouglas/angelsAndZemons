import { useState } from "react"
import { Button } from "../Common/Button"
import { FullWidthCenteredContainer } from "../Common/FullWidthCenteredContainer"
import { HandwrittenNote } from "../Common/HandwrittenNote"
import { MoveForwardButton } from "../Common/MoveForwardButton"
import { Input } from "../Common/Input"

interface PuzzleOneProps {
    onClickForward: (completedPuzzle: number) => void
}
export const PuzzleOne = ({onClickForward}:PuzzleOneProps) => {
    const [atLocation, setAtLocation] = useState<boolean>()
    const [answer, setAnswer] = useState<string>()

    const handleCheckAnswer = () => {
        if (answer?.trim() === '1889') {
            onClickForward(1)
        }
    }
    return(
        <FullWidthCenteredContainer style={{height: '100%'}}>
            <div style={{width: '100%', height: '90%', display: 'flex', flexWrap: 'wrap', placeContent: 'space-between center'}}>
                {
                atLocation ? 
                    <>
                        <HandwrittenNote

                            color={'#383838'}
                            text={'depuis _________'}
                            type={'quick'}
                            size="40px"
                            width={'100%'}
                        />
                        <Input text={answer ?? ''} setText={setAnswer}/>
                        <MoveForwardButton onClickForward={handleCheckAnswer}/>
                    </>
                    :
                    <>
                        <HandwrittenNote
                            color={'#383838'}
                            text={'A pope, an apostle, a three-eyed ape, a gospel, and your first stop in your quest. Find it in the end.'}
                            type={'quick'}
                            size="20px"
                        />
                        <Button onClick={()=>setAtLocation(true)} border={'2px solid #383838'} width={'100px'} color={'#383838'} fontWeight={600} style={{backgroundColor: 'transparent'}}>
                            HERE
                        </Button>
                    </>
                }

            </div>
        </FullWidthCenteredContainer>
    )
}