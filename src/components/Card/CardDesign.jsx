import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button, ButtonGroup, Divider } 
from '@chakra-ui/react';
import doctorDummy from '../../assets/doctorDummy.jpg'
const CardDesign = () => {
  return (
    <Card maxW="sm">
      <CardBody display={'flex'}>
        <Image
          src={doctorDummy}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          height={200}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Dr. XYZ</Heading>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ducimus ex iusto, doloribus consectetur dignissimos ipsam odio, unde molestias accusantium est cupiditate rerum aliquid eius, nemo facere maxime quisquam culpa?
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="red">
            Call Now
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default CardDesign