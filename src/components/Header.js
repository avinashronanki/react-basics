import Button from "./Button"


const Header = ({tittle}) => {
    const onClick = () =>{
        console.log("click")
    }
    return (
        <header className = 'header'>
            <h1>{tittle}</h1>
            <Button onClick={onClick} />
            
        </header>
    )
}
Header.defaultProps ={
    tittle : 'Task Manager'
}
export default Header
