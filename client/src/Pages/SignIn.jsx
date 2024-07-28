import React,{useState} from "react";
import NavBar from "../Components/NavBar";
import '../css/Design.css';
import { ChakraProvider } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputRightElement,
  InputGroup,
  Button
} from '@chakra-ui/react'

const SignIn = () => {
  const [input, setInput] = useState('')
  const handleInputChange = (e) =>setInput(e.target.value);
  const isError = input === ''
  const [show, setShow] = React.useState(false)
  const [password, setPassword] = useState('');
  const handleClick = () => setShow(!show)
  const handleChange = (e) => setPassword(e.target.value);
  const isFilled = password.length > 0;
  const go='images/googleimagebg.png';
  const fa='images/blackfbbg.png';
  return (
    <>
      <NavBar />
      <div className="container-fluid d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/images/book2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
        }}>
      <ChakraProvider>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3"></div>
          <div className="col-12 col-md-6">
            <div className="form pl-3 pr-3">
            <h5 style={{textAlign:'center',fontSize:'20px',fontFamily:'Playfair Display',color:'#D10363', paddingTop:3, paddingRight:9}}><b>Welcome to E-Library</b></h5>
            <h6 style={{textAlign:'center',fontSize:'20px',fontFamily:'Playfair Display',color:'#D10363', paddingTop:3, paddingRight:9}}><b>Your One-stop destination for books</b></h6><hr></hr>
            <form>
               <FormControl isInvalid={isError}>
              <FormLabel fontSize={'17px'} marginTop={'1'}>Email<sup style={{color:'red'}}>*</sup></FormLabel>
              <Input type='email' value={input} onChange={handleInputChange} placeholder="Enter your email" />
              {!isError ? (
                <FormHelperText>
                  <span style={{color:'green'}}>Success</span>
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
               )}
              
            </FormControl>
            <FormLabel fontSize={'17px'} marginTop={'3'}>Password<sup style={{color:'red'}}>*</sup></FormLabel>
            <InputGroup size='md'>
            
        <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        value={password}
        onChange={handleChange}
        borderColor={isFilled ? 'white' :'red.500'}
        focusBorderColor={isFilled ? 'white' : 'blue.500'}
        borderWidth={'2px'}
        borderStyle={'solid'}
       />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    <div className="row">
      <div className="col-12">
        <div className="d-block float-right">
        <Button colorScheme='purple' style={{boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',marginTop:'6px',borderRadius:'10px'}}>Sign In</Button><br></br>
        <span style={{color:'black',fontSize:'14px'}}>Forgot Password?</span>
        </div>
      </div>
    </div>
    <hr style={{border:'none',borderTop:'2px solid grey'}}></hr>
    <div class="row">
      <div className="col-12">
        <div className="d-block float-right">
        <Button colorScheme='purple' marginLeft={'150px'} width='200px'  style={{boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',marginTop:'6px',borderRadius:'10px',fontSize:'14px'}}><img src={go} alt={go} style={{width:'24px',height:'24px'}}></img>&nbsp;&nbsp;Sign in with Google</Button><br></br>
        <Button colorScheme='purple' marginLeft={'150px'} width='200px' style={{boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',marginTop:'6px',borderRadius:'10px',fontSize:'14px'}}><img src={fa} alt={fa} style={{width:'24px', height:'24px',marginLeft:'5px'}}></img>&nbsp;&nbsp;Sign in with Facebook</Button><br></br>
        </div>
      </div>
      </div>
    
       </form>
       </div>
       </div>
       </div>
          
            </div>
        
      </ChakraProvider>
      </div>
      
    </>
  );
};
export default SignIn;
