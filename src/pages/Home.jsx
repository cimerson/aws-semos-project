import React from 'react'

import { Box, Heading, Text, Button, Center, Image, Stack } from '@chakra-ui/react'

const Home = () => {
    return (
        <Center height='80vh'>
            <Stack spacing={8} align='center'>
                <Image
                    // src='project-image.jpg' // Replace with your project image
                    src='https://opstrainerz.com/uploads/course-images/1599024293-AWS%20certification-01.svg' // Replace with your project image
                    alt='Project Logo'
                    boxSize='200px'
                    // borderRadius='full'
                    // objectFit='cover'
                />
                <Box textAlign='center'>
                    <Heading size='2xl'>Our Awesome Project</Heading>
                    <Text mt='4' fontSize='lg'>
                        We're building something amazing! This project aims to solve a
                        real-world problem and make a positive impact.
                    </Text>
                    <Button mt='8' colorScheme='blue' size='lg'>
                        Learn More
                    </Button>
                </Box>
            </Stack>
        </Center>
    )
}

export default Home