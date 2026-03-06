import MessageInputBox from "./projectcomponents/MessageInputBox"
import MessageContainer from "./projectcomponents/MessageContainer"

async function sendMessage(message: String) {
  console.log("sending message: " + message)
}


export function App() {
  return (
    <>
      <MessageContainer/>
      <div className="fixed bottom-0 w-full p-8 self-center">
        <MessageInputBox onSend={sendMessage}/>
      </div>
    </>
  )
}

export default App
