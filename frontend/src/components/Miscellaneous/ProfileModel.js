import React from 'react'
import { useDisclosure } from '@chakra-ui/hooks';
import { IconButton } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from "@chakra-ui/react";


const ProfileModel = ({user, children}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

  
  
    return (
      <>
        {children ? (
          <span onClick={onOpen}>{children}</span>
        ) : (
          <IconButton
            display={{ base: "flex" }}
            icon={<ViewIcon />}
            onClick={onOpen}
          />
        )}

        <Button onClick={onOpen}></Button>

        <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent h="410px">
            <ModalHeader
                fontSize="40px"
                fontFamily="Work sans"
                display="flex"
                justifyContent="center"
            >
                {user.name}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody display="flex" flexDir="column" alignItems="center" justifyContent="space-between">
                <Image 
                    borderRadius="full"
                    boxSize = "150px"
                    src={user.pic}
                    alt={user.name}
                    />
            </ModalBody>
                sdfsdfsa
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
}

export default ProfileModel