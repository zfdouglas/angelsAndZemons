import { ReactElement } from "react"
interface ContainerProps {
    style?: React.CSSProperties
    className?: string
}
export const FullWidthCenteredContainer = ({children, style, className} : React.PropsWithChildren<ContainerProps>) => {
    return(
        <div className={className} style={
            {display: 'flex', 
            width: '100%', 
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center',...style
            }}>
            {children as ReactElement}
        </div>
    )
}