
// import RegisterUser from '../RegisterUser/RegisterUser';
import RegisteredUsers from '../RegisteredUsers/RegisteredUsers';
import './Home.css'

const Home = ()=>{
    return(
        <div className="homeContainer">
            <h1 className="titleHomeLog">Pagina de inicio</h1>
            <RegisteredUsers/>
        </div>
    )
}

export default Home;