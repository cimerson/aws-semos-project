import React from 'react'
import { Link } from 'react-router'

import { motion } from 'framer-motion'

import { Box, Heading, Text, Button, Center, Stack, Container } from '@chakra-ui/react'


const Home = () => {

    const animationProps = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: 'easeInOut' },
    }

    const MotionHeading = motion(Heading)
    const MotionText = motion(Text)

    return (
        <Container maxW='container.xl'>
            <Center minHeight='calc(100vh - 128px)'>
                <Stack spacing={8} align='center'>
                    <Box textAlign='center'>
                        <MotionHeading
                            {...animationProps}
                            size='2xl'
                            color='white'
                            mb='4'
                        >
                            Hello, we are Group 5!
                        </MotionHeading>
                        <MotionText
                            {...animationProps}
                            mt='4'
                            fontSize='lg'
                            color='gray.300'
                            transition={{ ...animationProps.transition, delay: 0.2 }}
                        >
                            Amazon Web Services (AWS) is a cloud platform that provides everything needed to build, deploy, and manage applications at any scale. Instead of buying physical servers or setting up complex infrastructure manually, AWS allows companies and developers to access computing power, storage, databases, and many other services through the internet, paying only for what they use. It has a wide range of services, including compute power through EC2, scalable storage with S3, managed databases like RDS and DynamoDB, networking tools such as VPC and Route 53 all designed to help businesses scale, innovate, and save costs with flexibility, security, and reliability.
                        </MotionText>
                        <Button as={Link} to='/projects' mt='8' colorScheme='blue' size='lg'>
                            Go to Projects
                        </Button>
                    </Box>
                </Stack>
            </Center>
        </Container>
    )
}

export default Home