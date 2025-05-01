import { FullWidthCenteredContainer } from "../Common/FullWidthCenteredContainer"
import { HandwrittenNote } from "../Common/HandwrittenNote"
import { MoveForwardButton } from "../Common/MoveForwardButton"
import Zeurgo from "../../assets/zeurgo.png"
import "../Common/Common.css"

interface CouponPageProps {
    onClickForward: (completedPuzzle: number) => void
}

export const CouponPage = ({onClickForward}: CouponPageProps) => {
    return(
        <FullWidthCenteredContainer style={{height: '100%', flexWrap: 'wrap'}}>
            <img className={'ArchImage'} style={{width: '40%'}} src={Zeurgo}/>

            <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', placeContent: 'space-between center'}}>
                <HandwrittenNote
                    color={'#383838'}
                    text={"You have won a z(euro)go! Redeemable for two tickets to Newport Jazz Festival!"}
                    type={'neat'}
                    size="25px"
                    width={'100%'}
                />
            </div>
            <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', placeContent: 'space-between center'}}>
                <MoveForwardButton onClickForward={() => onClickForward(0)}/>
            </div>
        </FullWidthCenteredContainer>
    )
}