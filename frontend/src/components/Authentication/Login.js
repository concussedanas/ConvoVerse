import React, {useState} from 'react'
import { Input, InputGroup, InputRightElement, Button, FormControl, FormLabel, VStack, TagLabel, Box } from '@chakra-ui/react'

const Login = () => {
  const [show, setShow] = useState(false);  
  
  const [email, setEmail] = useState();
  
  const [password, setPassword] = useState();
  

  const handleClick = () => setShow(!show);

  

  const submitHandler = () => {};

  return <VStack>
   
   
    <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
            placeholder='Enter Your Email'
            onChange={(e) => {setEmail(e.target.value)}}
        />
    </FormControl>

    <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
            <Input
                type={show? "text" : "password"}
                placeholder='Set Your Password'
                onChange={(e) => {setPassword(e.target.value)}}
            />
            <InputRightElement width="50px">
                <Button size = "0px 0px" h = "7px" w = "7px" position = "absolute" onClick={handleClick}>
                    <label>
                        <input value="ON" name="dummy" type="checkbox" class="bubble">
                        </input>
                </label>
            </Button>
            </InputRightElement>
        </InputGroup>
    </FormControl>

    <Button class="button">
        Login
    </Button>
    <Button 
    variant ="solid" 
    colorScheme="red" 
    width = "100%" 
    onClick={() => {
        setEmail("guest@example.com");
        setPassword("123456");
    }}
    >
        Get Guest User Credentials
    </Button>

  </VStack>
}

export default Login
