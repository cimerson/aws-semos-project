import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

import { Box, Heading, GridItem as ChakraGridItem, Image, Container } from '@chakra-ui/react'

import a1 from '../assets/a1.jpg'
import a2 from '../assets/a2.jpg'
import a3 from '../assets/a3.jpg'
import a4 from '../assets/a4.jpg'
import a5 from '../assets/a5.jpg'
import a6 from '../assets/a6.jpg'
import a7 from '../assets/a7.jpg'
import a8 from '../assets/a8.jpg'

const initialAnimalAvatars = [a1, a2, a3, a4, a5, a6, a7, a8]

const teamMembers = [
    { name: 'Ѓорѓи Богатинов' },
    { name: 'Берк Дишо' },
    { name: 'Бојана Калков' },
    { name: 'Иван Ивановски' },
    { name: 'Стефан Петровски' },
    { name: 'Дејан Серафимовски' },
    { name: 'Александар Николов' },
]

const shuffleArray = (array) => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
}

const MotionGridItem = motion(ChakraGridItem)


const Team = () => {

    const [shuffledAvatars, setShuffledAvatars] = useState([])

    const numMembers = teamMembers.length

    const gridItemAnimationProps = (index) => ({
        initial: { opacity: 0, rotate: 180, y: 20 }, // Start rotated and slightly down
        animate: { opacity: 1, rotate: 0, y: 0 },   // Animate to no rotation and original position
        transition: { duration: 0.5, delay: index * 0.25, ease: 'easeOut' },
    })

    useEffect(() => {
        setShuffledAvatars(shuffleArray(initialAnimalAvatars))
    }, [])

    return (
        <Container maxW='container.xl' pt={10} pb={10}>
            <Box textAlign='center'>
                <Heading mb='16' color='white'>
                    Our Team
                </Heading>
                <Box display='grid' gridTemplateColumns='repeat(auto-fit, minmax(300px, 1fr))' gridGap={6} mt={4} al>
                    {teamMembers.map((member, index) => (
                        <MotionGridItem
                            key={index}
                            colSpan={numMembers % 3 === 1 && index === numMembers - 1 ? { base: 1, md: 3 } : 1}
                            justifySelf={numMembers % 3 === 1 && index === numMembers - 1 ? 'center' : 'auto'}
                            {...gridItemAnimationProps(index)}
                        >
                            <Image
                                src={shuffledAvatars[index % shuffledAvatars.length]} //{member.image}
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
                        </MotionGridItem>
                    ))}
                </Box>
            </Box>
        </Container>
    )
}

export default Team