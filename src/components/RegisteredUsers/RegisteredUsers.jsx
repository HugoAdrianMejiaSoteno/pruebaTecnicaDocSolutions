import { useContext, useEffect, useState } from 'react';
import './RegisteredUsers.css'
import { Contexto } from '../Services/Memoria';

const RegisteredUsers = ()=>{

    const [authorized, setAuthorized, token, setToken, newUserWindow, setNewUserWindow] = useContext(Contexto)
    const [users, setUsers] = useState([])

    useEffect(()=>{
        const fetchUsers = async () => {
            const url = 'https://techhub.docsolutions.com/OnBoardingPre/WebApi/api/user/GetUsers';
            const tokenAccess = token;
            const searchText = 'jorge';
            // console.log(tokenAccess)
        
            const data = {
                Body: {
                    SearchText: searchText
                }
            };
        
            
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${tokenAccess}`
                },
                body: JSON.stringify(data)
            };
        
            try {
                const response = await fetch(url, requestOptions);
                const responseData = await response.json();
                console.log(responseData);
                // setUsers()
            } catch (error) {
                console.error('Error al realizar la solicitud:', error);
            }
        };
        
        fetchUsers();        
    },[token])
   
    
    return(
        <div className="tableUsersContainer">
            <form>
                <input type="text" placeholder='Buscar'/>
                <button type="submit">OK</button>
            </form>
            <button onClick={()=>setNewUserWindow(true)}>Nuevo</button>
            <h2>Usuarios registrados</h2>

            <div>Usuarios:
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Name</th>
                            <th>FatherLastName</th>
                            <th>CreationDate</th>
                            <th>Email</th>
                            <th>PhoneNumber</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hugo</td>
                            <td>JDBJKDBD</td>
                            <td>GFFGFFG</td>
                            <td>FGGGF</td>
                            <td>FGFGGFGF</td>
                            <td>GFFGG</td>
                        </tr>
                        {users.map((user)=><tr key={user.Id}>
                            <td>{user.Username ? user.Username : 'No contiene'}</td>
                            <td>{user.Name ? user.Name : 'No contiene'}</td>
                            <td>{user.FatherLastName ? user.FatherLastName : 'No contiene'}</td>
                            <td>{user.CreationDate ? user.CreationDate : 'No contiene'}</td>
                            <td>{user.Email ? user.Email : 'No contiene'}</td>
                            <td>{user.PhoneNumber ? user.PhoneNumber : 'No contiene'}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RegisteredUsers;