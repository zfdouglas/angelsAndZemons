import { useState } from "react"
import { FullWidthCenteredContainer } from "../Common/FullWidthCenteredContainer"
import { HandwrittenNote } from "../Common/HandwrittenNote"
import { MoveForwardButton } from "../Common/MoveForwardButton"
import { Button } from "../Common/Button"

interface PuzzleFiveProps {
    onClickForward: (completedPuzzle: number) => void
}
export const PuzzleFive = ({onClickForward}: PuzzleFiveProps) => {
    const [atLocation, setAtLocation] = useState<boolean>()


    return(
        <FullWidthCenteredContainer style={{height: '100%'}}>
            <div style={{width: '100%', height: '90%', display: 'flex', flexWrap: 'wrap', placeContent: 'space-between center'}}>
                {
                atLocation ? 
                    <>
                        <HandwrittenNote
                            color={'#383838'}
                            text={'We eschew the hunt for deer with dog. Rather, we are the hounds that watch for hog.'}
                            type={'quick'}
                            size="20px"
                            width={'100%'}
                        />
                        <MoveForwardButton onClickForward={() => onClickForward(5)}/>
                    </> 
                    :
                    <>
                        <HandwrittenNote
                            color={'#383838'}
                            text={"From Old Bridge, seek the new market"}
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