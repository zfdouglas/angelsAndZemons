import { useState } from "react"
import { FullWidthCenteredContainer } from "./FullWidthCenteredContainer"
import { HandwrittenNote } from "./HandwrittenNote"
import { Input } from "./Input"
import { MoveForwardButton } from "./MoveForwardButton"
import { Button } from "./Button"

interface PuzzleWithAnswerProps {
    onClickForward: (completedPuzzle: number) => void
    correctAnswers: string[]
    puzzleText: string
    questionText: string
    puzzleNumber: number
    puzzleTextSize?: string
    questionTextSize?: string
}

export const PuzzleWithAnswer = ({onClickForward, correctAnswers, questionTextSize, questionText, puzzleNumber, puzzleText, puzzleTextSize}: PuzzleWithAnswerProps) => {
    const [atLocation, setAtLocation] = useState<boolean>()
    const [answer, setAnswer] = useState<string>()

    const handleCheckAnswer = () => {
        if (answer && correctAnswers.includes(answer?.trim())) {
            onClickForward(puzzleNumber)
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
                                    text={questionText}
                                    type={'quick'}
                                    size={questionTextSize ? questionTextSize : '40px'}
                                    width={'100%'}
                                />
                                <Input text={answer ?? ''} setText={setAnswer}/>
                                <MoveForwardButton onClickForward={handleCheckAnswer}/>
                            </>
                            :
                            <>
                                <HandwrittenNote
                                    color={'#383838'}
                                    text={puzzleText}
                                    type={'quick'}
                                    size={puzzleTextSize ?? '20px'}
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