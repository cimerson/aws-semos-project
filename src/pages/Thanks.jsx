import React from 'react'

import { Heading, Text, Image, Center, Stack } from '@chakra-ui/react'

import semosEducation from '../assets/semos-education.png'
import agencyLogo from '../assets/logo-agencija-severna.png'


const Thanks = () => {
    return (
        <Center height='80vh'>
            <Stack spacing={8} align='center'>
                <Heading size='2xl'>Thank You!</Heading>
                <Text fontSize='lg'>
                    We're incredibly grateful for the free courses and the amazing
                    agency that made it possible.
                </Text>
                <Stack direction='row' spacing={6}>
                    <Image
                        src={semosEducation}
                        alt='semos-education'
                        boxSize='350px'
                        objectFit='contain'
                    />
                    <Image
                        src={agencyLogo}
                        alt='agency-logo'
                        boxSize='350px'
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