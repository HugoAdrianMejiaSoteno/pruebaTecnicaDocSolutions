import { useContext, useState } from 'react';
import './Form.css'
// import { postData } from '../Services/pedidos';
import { Context } from 'react';
import { Contexto } from '../Services/Memoria';

const Form = ()=>{

    const [authorized, setAuthorized, token, setToken] = useContext(Contexto)
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    })

    const [newData, setNewData] = useState({
        Username: '',
        Password: ''
    })

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prevData)=>({...prevData, [name]: value}))
    }

    const postData = async () => {
        const url = 'https://techhub.docsolutions.com/OnBoardingPre/WebApi/api/authentication/authentication';
    
        const data = {
            Body: {
                Username: formData.name,
                Password: formData.password
            }
        };
    
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        };
    
        try {
            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            const responseData = await response.json();
            // console.log(responseData);
            if (responseData.IsOK == true && responseData.Body != null){
                console.log('Usuario Permitido')
                setAuthorized(true)
                console.log(responseData)
                setToken(responseData.Body.Token)
            } else{
                alert('Sus datos son incorrectos, verifique su información e intente nuevamente')
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    };

    // console.log(token)



    const handleSubmit = (e)=>{
        e.preventDefault();

        if ((formData.name) && (formData.password)){
            setNewData({
                Username: formData.name,
                Password: formData.password
            })
    
            console.log('sent!!')
            postData();
            


        } else{
            alert('Llena todos los campos')
        }
    }
    // console.log(formData)
    // console.log(newData)
    return(
        <>
            <h2 className='titleFormSign'>Formulario de Registro</h2>
            <form className='formSignContainer' onSubmit={handleSubmit}>
                <div className="userField">
                    <label htmlFor="name">
                        Nombre de usuario:
                        <input type="text" id='name' name='name' onChange={handleChange}/>
                    </label>
                </div>

                <div className="passwordField">                
                    <label htmlFor="password">
                        Password:
                        <input type="password" id='password' name='password' onChange={handleChange}/>
                    </label>
                </div>
                <button type="submit">OK</button>
            </form>
        </>
    )
}

export default Form;