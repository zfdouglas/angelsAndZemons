import { FullWidthCenteredContainer } from "../Common/FullWidthCenteredContainer"
import { HandwrittenNote } from "../Common/HandwrittenNote"
import Logo from "../../assets/zarchred.png"
import "./Welcome.css"
import { useState } from "react"
import { MoveForwardButton } from "../Common/MoveForwardButton"

const WelcomeContainerStyling = {
    display: 'flex', 
    rowGap: '15px', 
    padding: '10px', 
    flexWrap: 'wrap', 
    height: '100%', 
    alignContent: 'center', 
    justifyContent: 'center'
}
interface WelcomeProps {
    onClickForward: (chapter: number) => void
}

export const Welcome = ({onClickForward}: WelcomeProps) => {
    const [pastWelcome, setPastWelcome] = useState<boolean>()

    return(
        <div className="PuzzleContent" style={WelcomeContainerStyling as React.CSSProperties}>
            {
                !pastWelcome ? 
                <img className={'ArchImage'} style={{width: '50%'}} src={Logo} onClick={()=> setPastWelcome(true)}/>
                :
                <>
                    <HandwrittenNote 
                        text={"The path of light is laid, the sacred test. Let this puzzle guide you on your lofty quest."}
                        color="maroon" 
                        type="neat"
                        weight="semi-bold"
                        size={'1.8rem'}                
                        fadeIn
                    />
                    <FullWidthCenteredContainer className={'FadeInAfterTime'}>
                    <MoveForwardButton onClickForward={onClickForward}/>
                </FullWidthCenteredContainer>
            </>
            }
        </div>
    )
}