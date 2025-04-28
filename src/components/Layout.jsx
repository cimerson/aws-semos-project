import React from 'react'
import { Outlet } from 'react-router'

import { Flex, Box } from '@chakra-ui/react'

import Header from './Header'
import Footer from './Footer'


const Layout = () => {
    return (
        <Flex direction='column' minHeight='100vh'>
            <Header />
            <Box flex='1' overflow='auto'>
                <Outlet />
            </Box>
            <Footer />
        </Flex>
    )
}

export default Layout