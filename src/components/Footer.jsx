import React from 'react'

import { Flex, Text } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Flex as='footer' p='4' bg='gray.700' justify='center' borderTop='1px solid gray.100'>
            <Text>&copy; {new Date().getFullYear()} My React App</Text>
        </Flex>
    )
}

export default Footer