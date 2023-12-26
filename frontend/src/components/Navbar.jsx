import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const {logout} = useLogout();
  const {user} = useSelector(state=>state.auth);
const handleClick = ()=>{
logout();
}
  return ( 
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Tracker</h1>
        </Link>
        <nav>
          {
            user && (
              <div>
                <span>{user.email}</span>
              <button className='logbtn' onClick = {handleClick}>Log Out</button>
            </div>
            )
          }

          {
            !user && (
              <div className='somediv'>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
            )
          }
        </nav>
      </div>
    </header>
  )
}

export default Navbar