import { useState } from "react"
import { FullWidthCenteredContainer } from "../Common/FullWidthCenteredContainer"
import { HandwrittenNote } from "../Common/HandwrittenNote"
import { MoveForwardButton } from "../Common/MoveForwardButton"
import { Button } from "../Common/Button"

interface PuzzleThreeProps {
    onClickForward: (completedPuzzle: number) => void
}
export const PuzzleThree = ({onClickForward}: PuzzleThreeProps) => {
    const [atLocation, setAtLocation] = useState<boolean>()


    return(
        <FullWidthCenteredContainer style={{height: '100%'}}>
            <div style={{width: '100%', height: '90%', display: 'flex', flexWrap: 'wrap', placeContent: 'space-between center'}}>
                {
                atLocation ? 
                    <>
                        <HandwrittenNote

                            color={'#383838'}
                            text={'Fun fact! The bridge over time has played a central role in the city road system, starting from when it connected the Roman Florentia with Via Cassia Nova commissioned by the emperor Hadrian in 123 AD.'}
                            type={'quick'}
                            size="20px"
                            width={'100%'}
                        />
                        <MoveForwardButton onClickForward={() => onClickForward(3)}/>
                    </>
                    :
                    <>
                        <HandwrittenNote
                            color={'#383838'}
                            text={"Laid first by Roman hands, across the Arno three arcs connect the span"}
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