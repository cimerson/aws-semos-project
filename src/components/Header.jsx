import React from 'react'
import { Link } from 'react-router'

import { Flex, Button, Spacer, Image} from '@chakra-ui/react'

import logo from '../assets/logo.png'


const Header = () => {
    return (
        <Flex as='nav' p='4' bg='gray.700' align='center' borderBottom='1px solid gray.100'>
            <Link to='/'>
                <Image src={logo} alt='My React App Logo' height='30px' width='150px' /> {/* Use the logo */}
            </Link>
            <Spacer />
            <Flex gap='2'>
                <Button as={Link} to='/' variant='ghost'>Home</Button>
                <Button as={Link} to='/projects' variant='ghost'>Projects</Button>
                <Button as={Link} to='/team' variant='ghost'>Team</Button>
                <Button as={Link} to='/thanks' variant='ghost'>Thanks</Button>
            </Flex>
        </Flex>
    )
}

export default Header