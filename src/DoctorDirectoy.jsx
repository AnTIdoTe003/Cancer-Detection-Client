import React from 'react'
import CardDesign from './components/Card/CardDesign'
import { Box, Heading } from '@chakra-ui/react'

const DoctorDirectoy = () => {
    const dummyArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  return (
    <>
    <Heading textAlign={'center'} py={'1rem'}>
        Our Best Doctors
    </Heading>
   <Box display={'flex'} flexWrap={'wrap'} gap={'1rem'} justifyContent={'space-evenly'}>
   {
    dummyArray.map((ele)=>{
        return(
            <CardDesign/>
        )
    })
   }
   </Box>
    </>
  )
}

export default DoctorDirectoy