const { NavLink } = require("react-router-dom");

function VendingMachine(){
    return <div>
        <h1>Select what you want out of the vending machine</h1>
        <div style={{justifyContent: "center", margin:"25%"}}>
            <NavLink exact to="/soda">Soda</NavLink>
            <br/>
            <NavLink exact to="/poptart">Poptart</NavLink>
            <br/>
            <NavLink exact to="/ramen">Ramen</NavLink>
        </div>
    </div>
}
export default VendingMachine;