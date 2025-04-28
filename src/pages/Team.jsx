import React from 'react'

import { Box, Heading, GridItem, Image, Container } from '@chakra-ui/react'

import avatar from '../assets/avatar.jpg'

const teamMembers = [
    {
        name: 'Ѓорѓи Богатинов',
        image: avatar,
    },
    {
        name: 'Берк Дишо',
        image: avatar,
    },
    {
        name: 'Бојана Калков',
        image: avatar,
    },
    {
        name: 'Иван Ивановски',
        image: avatar,
    },
    {
        name: 'Стефан Петровски',
        image: avatar,
    },
    {
        name: 'Дејан Серафимовски',
        image: avatar,
    },
    {
        name: 'Александар Николов',
        image: avatar
    },
]


const Team = () => {

    const numMembers = teamMembers.length

    return (
        <Container maxW='container.xl' pt={10} pb={10}>
            <Box textAlign='center'>
                <Heading mb='16' color='white'>
                    Our Team
                </Heading>
                <Box display='grid' gridTemplateColumns='repeat(auto-fit, minmax(300px, 1fr))' gridGap={6} mt={4} al>
                    {teamMembers.map((member, index) => (
                        <GridItem
                            key={index}
                            colSpan={numMembers % 3 === 1 && index === numMembers - 1 ? { base: 1, md: 3 } : 1}
                            justifySelf={numMembers % 3 === 1 && index === numMembers - 1 ? 'center' : 'auto'}
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                borderRadius='full'
                                boxSize='125px'
                                objectFit='cover'
                                mb='4'
                                mx='auto'
                            />
                            <Heading size='md' color='white'>
                                {member.name}
                            </Heading>
                        </GridItem>
                    ))}
                </Box>
            </Box>
        </Container>
    )
}

export default Team