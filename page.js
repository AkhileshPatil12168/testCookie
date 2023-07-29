import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import Cookies from "universal-cookie";

const MyComponent = () => {
    const cookies = new Cookies();
  const [backendCookie, setBackendCookie] = useState('');
  const cook = cookies.get("backend_cookie");
 
  const fetchBackendCookie = async () => {
    try {
      const response = await axios.get('https://testcookieback.onrender.com/set-cookie', {
        withCredentials: true,
      });

      if (response.status === 200) {
        setBackendCookie(response.data);
      } else {
        console.error('Failed to fetch backend cookie:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error while fetching backend cookie:', error);
    }
  };

  useEffect(()=>{},[backendCookie])

 
  const handleSetCookie = () => {
    fetchBackendCookie();
  };

  return (
    <div>
      <h1>Backend Cookie Value:</h1>
      <p>{backendCookie}</p>
      <p>{cook?cook:"not set"}</p>
      <button onClick={handleSetCookie}>Set Cookie</button>
    </div>
  );
};

export default MyComponent;
