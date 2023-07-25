import { Container, Box, Text, Image } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from "react";
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'

const Homepage = () => {
  return <Container maxW='xl' centerContent>
    <Box 
      bg ='white'
      w = "100%"
      d ='flex'
      p={1}
      justifyContent="center"
      m="40px 0 15px 0"
      borderRadius='lg'
      borderWidth='5px'
      borderColor="lightblue"
    >

      <Text fontSize='4xl' fontFamily='Work Sans' middle align='center'>
        ConvoVerse
      </Text>
    
    </Box>
    
    <Box
      bg="white"
      w="100%"
      p = {4}
      borderRadius='lg'
      borderWidth='5px'
      borderColor={"lightblue"}
      color = 'black'
    >
      <Tabs variant='soft-rounded' colorScheme='blue'>
        <TabList mg="1em">
          <Tab w="50%">Login</Tab>
          <Tab w="50%">Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Login/>
          </TabPanel>
          <TabPanel>
            <Signup/>
          </TabPanel>
        </TabPanels>
      </Tabs>
      
    </Box>
    
  </Container>;
};

export default Homepage;
