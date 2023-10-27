import { NavLink } from "react-router-dom";

const ACTIVE_STYLES = {
    fontWeight: "bold",
    color: "blue",
    fontSize: "100px"
  };
  
  function NavBar() {
    return (
      <nav className="MyNavBarClass">
        <NavLink end to="/" activeStyle={ ACTIVE_STYLES }>VendingMachine</NavLink>
        <br/>
        <NavLink exact to="/poptart" activeStyle={ ACTIVE_STYLES }>Poptart</NavLink>
        <br/>
        <NavLink exact to="/soda" activeStyle={ ACTIVE_STYLES }>Soda</NavLink>
        <br/>
        <NavLink exact to="/ramen" activeStyle={ ACTIVE_STYLES }>Ramen</NavLink>
      </nav>
    );
  }
export default NavBar;