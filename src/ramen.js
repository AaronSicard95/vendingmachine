const { NavLink } = require("react-router-dom");

function Ramen(){
    return <div>
        <h1>Ramen</h1>
        <div style={{justifyContent: "center", margin:"25%"}}>
            <h2>You chose Ramen!</h2>
            <NavLink exact to="/">Go Back to the Machine</NavLink>
        </div>
    </div>
}
export default Ramen;