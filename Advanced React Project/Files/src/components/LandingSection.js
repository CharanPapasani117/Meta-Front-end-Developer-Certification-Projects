import React from "react";
import { Avatar, Heading, HStack, VStack,Text} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack gap={4}>
    
    <Avatar
  size="xl"
  name="User Avatar"
  src="https://i.pravatar.cc/150?img=7"
/>
    
    <Text fontSize="xl" color="white" textAlign="center">
      {greeting}
    </Text>

    <Heading as="h1" size="lg" color="white" textAlign="center">
      {bio1}
    </Heading>

    <Heading as="h1" size="lg" color="white" textAlign="center">
      {bio2}
    </Heading>
          
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
