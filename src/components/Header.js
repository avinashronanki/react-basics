import Button from "./Button"
const Header = ({tittle}) => {
    return (
        <header className = 'header'>
            <h1>{tittle}</h1>
            <Button colour='blue' text ='Add'/>
            
        </header>
    )
}
Header.defaultProps ={
    tittle : 'Task Manager'
}
export default Header
