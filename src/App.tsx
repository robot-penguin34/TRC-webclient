import MessageInputBox from "./projectcomponents/MessageInputBox"

async function sendMessage(message: String) {
  console.log("sending message: " + message)
}


export function App() {
  return (
    <>
      <div className="fixed bottom-0 w-full p-8 self-center">
        <MessageInputBox onSend={sendMessage}/>
      </div>
    </>
  )
}

export default App
