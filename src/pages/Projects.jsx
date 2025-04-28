import React from 'react'

import { Container, Box, VStack, Heading, Text, Center, Image, Link as ChakraLink } from '@chakra-ui/react'

import { ExternalLinkIcon } from '@chakra-ui/icons'

import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'

const projects = [
    {
        name: 'Project 1: Hosting a Static Website on S3',
        image: project1,
        description: `This project involved hosting a simple static website on AWS. First, an S3 bucket was created to store the website files, such as HTML, CSS, and images. Static website hosting was enabled on the bucket, and permissions were adjusted to make the website publicly accessible.
            To enhance performance and security, CloudFront was integrated with the S3 bucket. This content delivery network (CDN) ensured faster delivery of the website's content to users around the world, while also protecting the S3 bucket from direct public access.
            The outcome was a fast, globally accessible static website hosted entirely on AWS, utilizing both S3 for storage and CloudFront for distribution.`,
        link: 'https://github.com/cimerson/aws-semos-project',
    },
    {
        name: 'Project 2: Hosting a WordPress Site on EC2',
        image: project2,
        description: `For this project, the goal was to set up a WordPress website on an AWS EC2 instance. The process began with launching an EC2 instance to act as the web server for WordPress. After configuring the server, essential software like Apache and PHP was installed to support WordPress.
                    To manage the website's data, an RDS database instance was created, and the EC2 instance was configured to securely communicate with the database. Once the server and database were set up, WordPress was installed on the EC2 instance, with its configuration file updated to connect to the RDS database.
                    After completing the WordPress installation, three sample pages were created to demonstrate the website's structure. The final result is a scalable WordPress site hosted on AWS, ready for future updates and content.`,
        link: 'http://54.194.240.22/index.php/the-projects/',
    },
]


const Projects = () => {

    return (
        <Container maxW='container.xl' pt={10} pb={10}>
            <Center>
                <Box textAlign='center'>
                    <Heading mb='8' color='white'>
                        Our Projects
                    </Heading>
                    <VStack spacing={6} align='stretch'>
                        {projects.map((project, index) => (
                            <Box
                                key={index}
                                p='6'
                                borderRadius='md'
                                bg='gray.700'
                                boxShadow='md'
                            >
                                <Heading size='lg' mb='2' color='white'>
                                    {project.name}
                                </Heading>
                                <Center m='4'>
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        borderRadius='md'
                                        mb='4'
                                        maxH='200px'
                                        objectFit='cover'
                                    />
                                </Center>
                                <Text color='gray.300' mb='4' align='justify'>
                                    {project.description}
                                </Text>
                                <ChakraLink href={project.link} isExternal color='blue.400'>
                                    View Project <ExternalLinkIcon mx='2px' />
                                </ChakraLink>
                            </Box>
                        ))}
                    </VStack>
                </Box>
            </Center>
        </Container>
    )
}

export default Projects