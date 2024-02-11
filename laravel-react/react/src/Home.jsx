import React, { useEffect } from 'react'
import axios from 'axios';

function Home() {

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await axios.get('http://127.0.0.1:8000/api/user', {
                        withCredentials: true
                    });
                    console.log(response.data.message);
                } catch (error) {
                    console.error(error);
                }
            }
        )();
    }, []); // Empty dependency array to run the effect only once
    
    

  return (
    <div className='container vw-100 vh-100 d-flex text-center flex-column align-items-center justify-content-center'>
        <p>Welcome the Home Page</p>
        <p>You are Authenticated!</p>
    </div>
  )
}

export default Home