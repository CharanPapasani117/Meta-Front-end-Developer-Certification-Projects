import { Box, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  return (
<Box maxW="lg" borderWidth="0px" borderRadius="lg" bg="white">
<Image src={imageSrc} borderRadius="lg"/>
<Box p="5" spaceY="2">
  <VStack align="start" spacing={4}>
    <Heading as="h3" size="sm" color="black" >
          {title}
        </Heading>
        
        <Text fontSize="sm" color="grey"  >
              {description}
            </Text>
            <Text fontSize="xs" color="black" >
              See more <FontAwesomeIcon icon={faArrowRight} size="5px"></FontAwesomeIcon>
            </Text>
  </VStack>
</Box>
</Box>
  );
}

export default Card;
