import * as React from 'react'
import { Button, ChakraProvider, Heading, Textarea, Center, Box, } from '@chakra-ui/react'

function UserMessage({onSubmitUserMessage}) {
  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUserMessage(event.target.elements.messageInput.value)
  }

  return (
    <ChakraProvider>
    <Box w='100%' h='800px' bgImage="&#128520" bgGradient='linear(to-b, purple.300, purple.500)'> 
    <form onSubmit={handleSubmit}>
      <div>
        <Heading color='black' align='center' marginTop='80px' marginBottom='50px' htmlFor="messageInput">Go on, type something...</Heading>
        <Center><Textarea htmlsize={4} width='auto' id="messageInput" type="text" marginBottom='50px' placeholder='Type here' /> </Center>
      </div>
      <Center><Button type="submit" align='center' variant='outline' colorScheme='black' >Send to the boss</Button></Center>
    </form>
    </Box>
    </ChakraProvider>
  )
}

// Now... How to mess with the userMessage... Will use JavaScript to 
// do an if "." return "???!!!" kind of thing. How do I fit that in? In a component file
// probably to keep it separate from this file, but then how to import it to here.
// Sometimes import this and that doesn't seem to work.
// Perhaps for simplicity for now, add it to this page since it's only a very small
// program.

// Look up onKeyPress for later...
// Research hashes in JavaScript

function App() {
  const onSubmitUserMessage = userMessage => 
  alert(`
  This is what you were really thinking: 
  "${userMessage.replaceAll(".", "???!!!").replaceAll("and", "buggeration")
  .replaceAll("there", "[REDACTED]")}"
  `);
  return <UserMessage onSubmitUserMessage={onSubmitUserMessage} />
}

export default App