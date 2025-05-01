import { useState } from "react"
import { FullWidthCenteredContainer } from "../Common/FullWidthCenteredContainer"
import { HandwrittenNote } from "../Common/HandwrittenNote"
import { Input } from "../Common/Input"
import { MoveForwardButton } from "../Common/MoveForwardButton"
import { Button } from "../Common/Button"

interface PuzzleSevenProps {
    onClickForward: (completedPuzzle: number) => void
}
export const PuzzleSeven = ({onClickForward}: PuzzleSevenProps) => {
    const [atLocation, setAtLocation] = useState<boolean>()
    const [answer, setAnswer] = useState<string>()

    const handleCheckAnswer = () => {
        console.log(answer)
        if (answer?.trim().toLowerCase() === 'dccc') {
            onClickForward(7)
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
                            text={'M ______ LXV'}
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
                            text={"The path to paradise begins in hell, but the path to me starts in the east"}
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