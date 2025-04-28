import React from 'react'

import { Box, Heading, Flex, Stack, Grid, GridItem, Image, Text, Center } from '@chakra-ui/react'

const teamMembers = [
    {
        name: 'John Doe',
        role: 'Developer',
        image: 'https://i1.sndcdn.com/artworks-gLOzhkPopE3fKUXJ-w3Ldmg-t500x500.jpg', // Replace with actual image
    },
    {
        name: 'Jane Smith',
        role: 'Designer',
        image: 'https://i1.sndcdn.com/artworks-gLOzhkPopE3fKUXJ-w3Ldmg-t500x500.jpg', // Replace with actual image
    },
    {
        name: 'Alice Johnson',
        role: 'Project Manager',
        image: 'https://i1.sndcdn.com/artworks-gLOzhkPopE3fKUXJ-w3Ldmg-t500x500.jpg', // Replace with actual image
    },
    {
        name: 'Alice Johnson',
        role: 'Project Manager',
        image: 'https://i1.sndcdn.com/artworks-gLOzhkPopE3fKUXJ-w3Ldmg-t500x500.jpg', // Replace with actual image
    },
    {
        name: 'Alice Johnson',
        role: 'Project Manager',
        image: 'https://i1.sndcdn.com/artworks-gLOzhkPopE3fKUXJ-w3Ldmg-t500x500.jpg', // Replace with actual image
    },

    // Add more team members
]

const Team = () => {
    return (
        // <Center height='80vh'>
        //     <Box textAlign='center'>
        //         <Heading mb='8'>Our Team</Heading>
        //         <Grid templateColumns='repeat(auto-fit, minmax(200px, 1fr))' gap={6}>
        //             {teamMembers.map((member, index) => (
        //                 <GridItem key={index}>
        //                     <Image
        //                         src={member.image}
        //                         alt={member.name}
        //                         borderRadius='full'
        //                         boxSize='150px'
        //                         objectFit='cover'
        //                         mx='auto'
        //                     />
        //                     <Heading size='md' mt='4'>
        //                         {member.name}
        //                     </Heading>
        //                     <Text>{member.role}</Text>
        //                 </GridItem>
        //             ))}
        //         </Grid>
        //     </Box>
        // </Center>

        <Center height='80vh'>
      <Box textAlign='center'>
        <Heading mb='8' color='white'>
          Our Team
        </Heading>
        <Flex overflowX='auto' whiteSpace='nowrap' gap={6} justify='center'>
          {teamMembers.map((member, index) => (
            <Box key={index} textAlign='center' minW='200px'>
              <Image
                src={member.image}
                alt={member.name}
                borderRadius='full'
                boxSize='150px'
                objectFit='cover'
                mb='4'
                mx='auto'
              />
              <Heading size='md' color='white'>
                {member.name}
              </Heading>
              <Text color='gray.300'>{member.role}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Center>
    )
}

export default Team