import { FullWidthCenteredContainer } from "../Common/FullWidthCenteredContainer"
import { HandwrittenNote } from "../Common/HandwrittenNote"
import { MoveForwardButton } from "../Common/MoveForwardButton"
import "../Common/Common.css"

interface TheEndProps {
    onClickForward: (completedPuzzle: number) => void
}
export const TheEndPage = ({onClickForward}: TheEndProps) => {


    return(
        <FullWidthCenteredContainer style={{height: '100%', flexWrap: 'wrap'}}>
            <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', placeContent: 'space-between center'}}>
                <HandwrittenNote
                    color={'#383838'}
                    text={"You have reached the end of your quest! Happy birthday My Love! You mean the world to me and I am the luckiest person in the world to share this with you."}
                    type={'neat'}
                    size="30px"
                    width={'100%'}
                />
            </div>
            <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', flexDirection: 'row-reverse', placeContent: 'space-between'}}>
                <HandwrittenNote
                    color={'#992B15'}
                    text={"-Zack"}
                    type={'quick'}
                    size="30px"
                />
            </div>
            <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', placeContent: 'space-between center'}}>
                <MoveForwardButton onClickForward={() => onClickForward(10)}/>
            </div>
        </FullWidthCenteredContainer>
    )
}