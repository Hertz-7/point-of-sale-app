
import './login.css';
import { useState ,useEffect} from 'react';
// import axios from 'axios';
import { useNavigate} from 'react-router-dom';
function Login(props) {
   const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginerr, setLoginerr] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')!==null) 
          navigate('/home');
    
      },);
      // const handleLogin = async () => {
      //   try {
      //     // make a post request to the login route with the username and password as data
      //     const response = await axios.post('http://localhost:9002/loginapi', { username, password });
      
      //     // get the token from the response
      //     const token = response.data;
      //     localStorage.setItem('token', token);
      //     navigate('/home');
      
      //   } catch (error) {
      //     //if response status is 401 turn loginerr to true
      //     if (error.response.status === 401){
      //       setLoginerr(true);
      //     }
      //   }
      // };
      const handleLogin =  () => {
        if (username === 'admin' && password === 'admin') {
          const token = 'admin123';
          localStorage.setItem('token', token);
          navigate('/home');
        }else{
          setLoginerr(true);
        }
      };
      
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
  return (
    <div className='loginpage'>
        <div className='login-container'>
            <h2 className="mb-3"> Login</h2>
            {loginerr?<p className='error'>Incorrect username or password</p>:null}
            <div className="inputfield mb-3 ">
                <input type="text" className="loginform form-control w-75" id="exampleFormControlInput1"
                onChange={handleUsernameChange} value={username} placeholder="Username"/>
            </div> 
            <div className="inputfield mb-3">
                <input type="password" className="loginform form-control w-75" id="exampleFormControlInput2" 
                onChange={handlePasswordChange} value={password} placeholder="Password"/>
            </div>
            <button type="button" className="loginbtn btn mb-3 w-25" onClick={handleLogin} >Login</button>
              
        </div>
        
    </div>
  );
}

export default Login;
