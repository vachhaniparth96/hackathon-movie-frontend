import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to ="/">Home</Link>
            &nbsp; | &nbsp;
            <Link to ="/movies">Movies</Link>
        </nav>
    );
    }

export default Nav;