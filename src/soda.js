const { NavLink } = require("react-router-dom");

function Soda(){
    return <div>
        <h1>Soda</h1>
        <div style={{justifyContent: "center", margin:"25%"}}>
            <h2>You chose Soda!</h2>
            <NavLink exact to="/">Go Back to the Machine</NavLink>
        </div>
    </div>
}
export default Soda;