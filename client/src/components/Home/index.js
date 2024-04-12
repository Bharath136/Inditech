import {Link} from 'react-router-dom'
import './index.css'
const Home = () => {
    return(
        <div>
            <h1 className="heading">Home</h1>
            <Link to="/soldier" className="button">Go to Soldier Page</Link>
        </div>
    )
}

export default Home