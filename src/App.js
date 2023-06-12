// import './App.css';
import * as React from 'react'
import { Button, ChakraProvider, Heading, Textarea, Center } from '@chakra-ui/react'

function UserMessage({onSubmitUserMessage}) {
  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUserMessage(event.target.elements.messageInput.value)
  }

  return (
    <ChakraProvider>
    <form onSubmit={handleSubmit}>
      <div>
        <Heading color='black' align='center' marginTop='20px' marginBottom='20px' htmlFor="messageInput">Go on, type something...</Heading>
        <Center><Textarea htmlSize={4} width='auto' id="messageInput" type="text" marginBottom='20px' placeholder='Type here' /> </Center>
      </div>
      <Center><Button type="submit" align='center' >Go forth</Button></Center>
    </form>
    </ChakraProvider>
  )
}

// Now... How to mess with the userMessage... Will use JavaScript to 
// do an if "." return "???!!!" kind of thing. How do I fit that in? In a component file
// probably to keep it separate from this file, but then how to import it to here.
// Sometimes import this and that doesn't seem to work.
// Perhaps for simplicity for now, add it to this page since it's only a very small
// program.

function App() {
  const onSubmitUserMessage = userMessage => alert(`This is what you were really thinking: "${userMessage.replaceAll(".", "???!!!")}"`);
  return <UserMessage onSubmitUserMessage={onSubmitUserMessage} />
}

export default App