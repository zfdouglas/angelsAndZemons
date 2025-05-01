import Logo from "../assets/zarch.png"
const LogoBarStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: '5px',
    marginBottom: '5px',
    height: '5%',
    maxHeight: '5%',
    width: '100%'
}

export const LogoBar = () => {
    return(
        <div style={LogoBarStyle as React.CSSProperties}>
            <img src={Logo} />
        </div>
    )
}