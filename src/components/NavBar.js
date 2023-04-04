import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/currency">Country-Currency Quiz</Link>
        </li>
        <li>
          <Link to="/capital">Country-Capital Quiz</Link>
        </li>
        <li>
          <Link to="/region">Country-Region Quiz</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;