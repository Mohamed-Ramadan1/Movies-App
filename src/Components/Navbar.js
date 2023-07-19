import Search from "./Search";
import Logo from "./Logo";
import NumResult from "./NumResult";
const Navbar = (props) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResult movies={props.movies} />
    </nav>
  );
};

export default Navbar;
