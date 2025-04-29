import React from 'react'
import { Link } from 'react-router'

import { motion } from 'framer-motion'

import { Box, Heading, Text, Button, Center, Stack, Container } from '@chakra-ui/react'

const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionButton = motion(Button)


const Home = () => {

    const headingAnimation = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6, ease: 'easeOut' },
    }

    const textAnimation = {
        initial: { opacity: 0, x: -30 }, // Slide in from the left
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.7, ease: 'easeOut', delay: 0.8 }, // Delay longer than heading duration
    }

    const buttonAnimation = {
        initial: { opacity: 0, y: 20 }, // Start slightly below
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: 'easeOut', delay: 1.5 }, // Significant delay
    }

    return (
        <Container maxW='container.xl'>
            <Center minHeight='calc(100vh - 128px)'>
                <Stack spacing={8} align='center'>
                    <Box textAlign='center'>
                        <MotionHeading
                            {...headingAnimation}
                            size='2xl'
                            color='white'
                            p='16'
                            mb='8'
                        >
                            Hello, we are Group 5!
                        </MotionHeading>
                        <MotionText
                            {...textAnimation}
                            fontSize='lg'
                            color='gray.300'
                            align='justify'
                            p='4'
                        >
                            Amazon Web Services (AWS) is a cloud platform that provides everything needed to build, deploy, and manage applications at any scale. Instead of buying physical servers or setting up complex infrastructure manually, AWS allows companies and developers to access computing power, storage, databases, and many other services through the internet, paying only for what they use. It has a wide range of services, including compute power through EC2, scalable storage with S3, managed databases like RDS and DynamoDB, networking tools such as VPC and Route 53 all designed to help businesses scale, innovate, and save costs with flexibility, security, and reliability.
                        </MotionText>
                        <MotionButton {...buttonAnimation} as={Link} to='/projects' mt='8' colorScheme='blue' size='lg'>
                            Go to Projects
                        </MotionButton>
                    </Box>
                </Stack>
            </Center>
        </Container>
    )
}

export default Home