import Search from "./Search";
import Logo from "./Logo";
import NumResult from "./NumResult";
const Navbar = (props) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search onSearch={props.onSearch} />
      <NumResult movies={props.movies} />
    </nav>
  );
};

export default Navbar;
