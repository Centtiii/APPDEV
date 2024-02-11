import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

// Custom CSS
import './assets/css/custom.css';

// Images
import SocialMediaButton from './Components/SocialMediaButton';
import googleLogo from '../src/assets/img/google-logo.png';
import facebookLogo from '../src/assets/img/facebook-logo.png';
import twtLogo from '../src/assets/img/Logo_of_Twitter.svg.png';
import websiteLogo from '../src/assets/img/LogoMid.png'
import topLogo  from '../src/assets/img/SpotitubeLogo.png';

//Components
import NameLogo from './Components/NameLogo';

function Register() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/register', formData);
            setResponseMessage(response.data.message);

            //Reset the form
            formData.name = ''
            formData.email = ''
            formData.password = ''
            // Clear message after 1 second
            setTimeout(() => {
                setResponseMessage('');
            }, 1500);
        } catch (error) {
            console.error(error);
            setErrorMessage(error.response.data.message);

            // Clear message after 1 second
            setTimeout(() => {
                setErrorMessage('');
            }, 1500);
        }
    };

    return (
              <div className='container-fluid d-flex justify-content-center align-items-center vh-100 vw-100 bg-black'>
                {responseMessage && (
                    <div className="alert alert-success position-fixed top-0 start-50 translate-middle-x">
                        {responseMessage}
                    </div>
                )}
                {errorMessage && (
                    <div className="alert alert-danger position-fixed top-0 start-50 translate-middle-x">
                        {errorMessage}
                    </div>
                )}
                <img src={topLogo} alt="Top Logo" className="top-logo position-absolute top-0 start-0" style={{ width: '150px', height: 'auto' }} />
              <div className='py-4 px-3 rounded bg-black text-white w-35 d-flex flex-column align-items-center'>
                  <img src={websiteLogo} alt="Website Logo" className="logo-image" style={{ width: '200px', height: 'auto' }} />
                  <form className='w-75' onSubmit={handleSubmit}>
            <div className='d-flex flex-column align-items-start justify-content-center gap-1'>
                <label htmlFor="name" className='label-font' style={{ fontSize: '1.1rem' }}>Name:</label>
                <input type="name" name='name' placeholder='Name Here' value={formData.name} onChange={handleChange} className='form-control rounded-custom fs-6 border-0 bg-transparent border-bottom border-white text-white' />
            </div>
            <div className='d-flex flex-column align-items-start justify-content-center gap-1'>
                <label htmlFor="email" className='label-font' style={{ fontSize: '1.1rem' }}>Email:</label>
                <input type="email" name='email' placeholder='Example@gmail.com' value={formData.email} onChange={handleChange} className='form-control rounded-custom fs-6 border-0 bg-transparent border-bottom border-white text-white' />
            </div>
            <div className='d-flex flex-column align-items-start justify-content-center gap-1'>
                <label htmlFor="password" className='label-font' style={{ fontSize: '1.1rem' }}>Password:</label>
                <input type="password" name='password' value={formData.password} onChange={handleChange} placeholder='Enter Password' className='form-control rounded-custom fs-6 border-0 bg-transparent border-bottom border-white text-white' />
            </div>
            <div className="d-flex align-items-center justify-content-center mt-3">
                <button type="submit" className="btn btn-custom w-50 p-2 rounded-3 text-white fw-bold">SIGN UP</button>
            </div>
        </form>

          <div className='d-flex w-100 align-items-center justify-content-center gap-3'>
              <p className='mt-3'> Sign up using:</p>
          </div>
                <div className='w-30 d-flex flex-row gap-1 mt-4'>
                    <SocialMediaButton logo={googleLogo} />
                    <SocialMediaButton logo={facebookLogo} />
                    <SocialMediaButton logo={twtLogo}  />
                    <div className='fs-custom text-center mt-4'>
                       
                    </div>
                   
                   
                </div>
                
                <p className="text-white">Have an account? <u className="link-light"><Link to="/login" className="text-white">Login</Link>.</u></p>
            </div>
        </div>
    );
}

export default Register;
