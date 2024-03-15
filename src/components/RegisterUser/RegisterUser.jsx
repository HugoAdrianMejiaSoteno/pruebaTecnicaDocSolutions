import { useContext, useState } from 'react';
import './RegisterUser.css'
import { Contexto } from '../Services/Memoria';

const RegisterUser = ()=>{

    const [authorized, setAuthorized, token, setToken,newUserWindow, setNewUserWindow] = useContext(Contexto)

    const tokenAccess = token;

    const [formData, setFormData] = useState({
        "Tenant": null,
        "UserName": '',
        "Password": '',
        "Name": '',
        "FatherLastName": '',
        "MotherLastName": '',
        "Email": '',
        "PhoneNumber": '',
        "Metadata": null,
        "Roles": [
                {
                "Name": "Usuario Tradicional"
                }
            ]
        }        
    )

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prevData)=>({...prevData, [name]: value}))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if ((formData.Name) && (formData.Email) && (formData.FatherLastName)&& (formData.MotherLastName) && (formData.PhoneNumber)&& (formData.UserName) && (formData.Password)){
            console.log('sent 2!!')
            newUser();
            

            setNewUserWindow(false)
        } else{
            alert('Verifica los datos antes de concatenar la respuestas')
        }
    }

    const newUser = async () => {
        const url = 'https://techhub.docsolutions.com/OnBoardingPre/WebApi/api/user/RegisterUserRole';
    
        const data = {
            Body: {
                "Tenant": null,
                "UserName": "nuevousuario2",
                "Password": "1*pruebas",
                "Name": "JORGE",
                "FatherLastName": "BAUTISTA",
                "MotherLastName": "PEREZ",
                "Email": "jorge.bautista@docsolutions.com",
                "PhoneNumber": "1234567890",
                "Metadata": null,
                "Roles": [
                {
                "Id": 2,
                "Name": "Usuario Tradicional"
                }
                ]
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
            // console.log(responseData);
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    };


    return(
        <div className="registerUserContainer">
            <h2>Registro de nuevo usuario</h2>
            <form className="registerUserForm" onSubmit={handleSubmit}>
                <label htmlFor="Name">Nombre:
                    <input type="text" name="Name" id="Name" onChange={handleChange} value={formData.Name}/>
                </label>
                <label htmlFor="FatherLastName">Apellido P:
                    <input type="text" name="FatherLastName" id="FatherLastName" onChange={handleChange} value={formData.FatherLastName}/>
                </label>
                <label htmlFor="MotherLastName">Apellido M:
                    <input type="text" name="MotherLastName" id="MotherLastName" onChange={handleChange} value={formData.MotherLastName}/>
                </label>
                <label htmlFor="Email">Email:
                    <input type="text" name="Email" id="Email" onChange={handleChange} value={formData.Email}/>
                </label>
                <label htmlFor="Phone">Telefono:
                    <input type="text" name="PhoneNumber" id="Phone" onChange={handleChange} value={formData.PhoneNumber}/>
                </label>
                <label htmlFor="Usuario">Usuario:
                    <input type="text" name="UserName" id="Usuario" onChange={handleChange} value={formData.UserName}/>
                </label>
                <label htmlFor="Password">Password
                    <input type="text" name="Password" id="Password" onChange={handleChange} value={formData.Password}/>
                </label>
                <label htmlFor="ConfirmPassword">Confirmar Password
                    <input type="text" name="ConfirmPassword" id="ConfirmPassword" onChange={handleChange}/>
                </label>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}

export default RegisterUser;