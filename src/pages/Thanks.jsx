import React from 'react'

import { Box, Heading, Text, Image, Center, Stack } from '@chakra-ui/react'

const Thanks = () => {
    return (
        <Center height='80vh'>
            <Stack spacing={8} align='center'>
                <Heading size='2xl'>Thank You!</Heading>
                <Text fontSize='lg'>
                    We're incredibly grateful for the free course and the amazing
                    agency that made it possible.
                </Text>
                <Stack direction='row' spacing={6}>
                    <Image
                        src='course-logo.png' // Replace with course logo
                        alt='Course Logo'
                        boxSize='100px'
                        objectFit='contain'
                    />
                    <Image
                        src='agency-logo.png' // Replace with agency logo
                        alt='Agency Logo'
                        boxSize='100px'
                        objectFit='contain'
                    />
                </Stack>
                <Text fontSize='md'>
                    Your support has been invaluable in our learning journey.
                </Text>
            </Stack>
        </Center>
    )
}

export default Thanks