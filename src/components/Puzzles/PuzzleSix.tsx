import { useState } from "react"
import { FullWidthCenteredContainer } from "../Common/FullWidthCenteredContainer"
import { HandwrittenNote } from "../Common/HandwrittenNote"
import { MoveForwardButton } from "../Common/MoveForwardButton"
import { Button } from "../Common/Button"

interface PuzzleSixProps {
    onClickForward: (completedPuzzle: number) => void
}
export const PuzzleSix = ({onClickForward}: PuzzleSixProps) => {
    const [atLocation, setAtLocation] = useState<boolean>()

    
    return(
        <FullWidthCenteredContainer style={{height: '100%'}}>
            <div style={{width: '100%', height: '90%', display: 'flex', flexWrap: 'wrap', placeContent: 'space-between center'}}>
                {
                atLocation ? 
                    <>
                        <HandwrittenNote

                            color={'#383838'}
                            text={"*Monty Python voice* It's only a model"}
                            type={'quick'}
                            size="30px"
                            width={'100%'}
                        />
                        <MoveForwardButton onClickForward={() => onClickForward(6)}/>
                    </>
                    :
                    <>
                        <HandwrittenNote
                            color={'#383838'}
                            text={"Seek the doors to paradise"}
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