// import './App.css';

function UserMessage({onSubmitUserMessage}) {
  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUserMessage(event.target.elements.messageInput.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="messageInput">Go on, type something...</label>
        <input id="messageInput" type="text" />
      </div>
      <button type="submit">Go forth</button>
    </form>
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