import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {


  return (<>
    <nav class="ml-275 absolute">
      <ul class="text-4xl">
        <li><button><Link to="/">General</Link></button></li>
        <li><button><Link to="/htmlcss">HTML & CSS</Link></button></li>
        <li><button><Link to="/python">Python</Link></button></li>
        <li><button><Link to="/php">PHP</Link></button></li>
      </ul>
    </nav>
  </>);
}

export default Navbar;