import { useState } from "react"
import { FullWidthCenteredContainer } from "../Common/FullWidthCenteredContainer"
import { HandwrittenNote } from "../Common/HandwrittenNote"
import { Input } from "../Common/Input"
import { MoveForwardButton } from "../Common/MoveForwardButton"
import { Button } from "../Common/Button"

interface PuzzleFourProps {
    onClickForward: (completedPuzzle: number) => void
}
export const PuzzleFour = ({onClickForward}: PuzzleFourProps) => {
    const [atLocation, setAtLocation] = useState<boolean>()
    const [answer, setAnswer] = useState<string>()
    const [funFactViewable, setFunFactViewable] = useState<boolean>()

    const handleCheckAnswer = () => {
        console.log(answer)
        if (answer?.trim().toLowerCase() === 'etruriae dux') {
            setFunFactViewable(true)
        }
    }
    return(
        <FullWidthCenteredContainer style={{height: '100%'}}>
            <div style={{width: '100%', height: '90%', display: 'flex', flexWrap: 'wrap', placeContent: 'space-between center'}}>
                {
                atLocation ? 
                    <>{
                        funFactViewable ? 
                        <>
                            <HandwrittenNote
                                color={'#383838'}
                                text={'Fun Fact! The column was originally installed in the Baths of Caracalla in Rome and was given by Pope Pius to Cosimo I de Medici.'}
                                type={'quick'}
                                size="20px"
                                width={'100%'}
                            />
                            <MoveForwardButton onClickForward={() => onClickForward(4)}/>
                        </> 
                        :
                        <>
                            <HandwrittenNote

                                color={'#383838'}
                                text={'Cosmus Med: Magn: _________'}
                                type={'quick'}
                                size="40px"
                                width={'100%'}
                            />
                            <Input text={answer ?? ''} setText={setAnswer}/>
                            <MoveForwardButton onClickForward={handleCheckAnswer}/>
                        </>
                        }
                    </>
                    :
                    <>
                        <HandwrittenNote
                            color={'#383838'}
                            text={"Find where justice is weighed aloft"}
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