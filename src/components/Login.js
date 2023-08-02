import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import TextField from '@mui/material/TextField';
import axios from 'axios'


import { useForm } from 'react-hook-form';

import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const history = useNavigate();
const { register, handleSubmit } = useForm();
const postDataToAPI = async(data)=>{
  const apiUrl = 'http://localhost:5000/api/login';
  try{
    const response = await axios.post(apiUrl, data);
    console.log({data});
    console.log('Response:', response.data);
  }catch(error){
    console.error("Error",error);
  }
};

const onSubmit = (data)=>{
      postDataToAPI(data).then(()=>history('/user'));
};
// console.log(errors);



const card = (
  <React.Fragment>
   <form onSubmit={handleSubmit(onSubmit)}>  
    <CardContent sx={{p:3}}>
      <Box 
      display="flex"
      flexDirection="row"
      justifyContent={{xs:"left"}}
      >
        <Typography sx={{ }} variant="h5" component="div" >
          Welcome back!
        </Typography>
      </Box>
      <Box
      display="flex"
      flexDirection="row"
      justifyContent={{xs:"left"}}
      >
        <Typography sx={{
          fontSize:10,
          mt:0.5,
          mb:2
        }} 
          color="text.secondary">
            <b>Please enter your details to login</b>
        </Typography>
      </Box>

        <Box
        display='flex'
        flexDirection={{xs:"column"}}
        justifyContent="center"
        > 
          <TextField

            sx={{
              mt:{xs:2},
              ml:{xs:0}
            }}
            id="standard-required"
            label="Email"
            type="email"
            autoComplete='off'
            variant="standard"
            size="small"
            // onChange={(e)=>handleChange(e)}
            placeholder="email" {...register("email", {required: true})}
            
          />
          <TextField
            sx={{
              mt:{xs:2},
              ml:{xs:0}
            }}
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            size="small"
            placeholder="password" {...register("password", {required: true})}
          />
        </Box>
      </CardContent>
      {/* <CardActions> */}
          {/* <div className="button-adjuster"> */}
          <Box sx={{ mr:{xs:3,md:2.5} ,ml:{xs:3,md:2.5},mt:{xs:2,md:1},mb:{xs:2,md:2} }}> 
              <Button 
              sx={{
                width:{xs:222,md:200},
                mb:0,
              }}
              size="medium" 
              variant="contained"
              type="submit"
              >
                <span>Login</span>
              </Button>
          </Box>
          <Typography sx={{
          fontSize:10,
          mb:3,
          ml:{xs:12,md:8.8},
        }} 
          color="text.secondary">
            <b>New user? <Link to="/signup">Sign up</Link></b>
        </Typography> 
          {/* </div> */}
      {/* </CardActions> */}
    </form>
  </React.Fragment>
);

  
  return (
      <Box 
      sx={{ minWidth: 275,alignItems: 'center',mt:{xs:6,md:6},mb:5}}
      display='flex'
      flexDirection="row"
      justifyContent="center"
      >
        <Card variant="outlined">{card}</Card>
      </Box>
  );
}




