// import './App.css';
import * as React from 'react'
import { Button, ChakraProvider, Heading, Input, Center } from '@chakra-ui/react'

function UserMessage({onSubmitUserMessage}) {
  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUserMessage(event.target.elements.messageInput.value)
  }

  return (
    <ChakraProvider>
    <form onSubmit={handleSubmit}>
      <div>
        <Heading color='orange' align='center' htmlFor="messageInput">Go on, type something...</Heading>
        <Input id="messageInput" type="text" placeholder='Type here' />
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
  const onSubmitUserMessage = userMessage => alert(`You wrote: ${userMessage}`)
  return <UserMessage onSubmitUserMessage={onSubmitUserMessage} />
}

export default App