const { NavLink } = require("react-router-dom");

function Poptart(){
    return <div>
        <h1>Poptart</h1>
        <div style={{justifyContent: "center", margin:"25%"}}>
            <h2>You chose Poptart!</h2>
            <NavLink exact to="/">Go Back to the Machine</NavLink>
        </div>
    </div>
}
export default Poptart;