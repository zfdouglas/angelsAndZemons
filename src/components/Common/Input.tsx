interface InputProps {
    text: string
    setText: (text: string) => void
}
export const Input = ({text, setText}: InputProps) => {
    return(
        <input 
            style={{width: '80%', backgroundColor: 'transparent', borderRadius: '10px', fontWeight: 600, color: 'maroon'}} 
            type={'text'}
            value={text}
            onChange={(e)=> setText(e.currentTarget.value)}
        />
    )
}