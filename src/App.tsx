import MessageInputBox from "./projectcomponents/MessageInputBox"
import MessageContainer from "./projectcomponents/MessageContainer"
import LoginPane from "./projectcomponents/LoginPane"
import { useState } from "react"

async function sendMessage(message: String) {
  console.log("sending message: " + message)
}


export function App() {
  const [token, setToken] = useState("")

  if (token === "") {
    return (<LoginPane setToken={setToken} login_endpoint="http://localhost:3000/api/login"/>)
  } else {
    return (
      <>
        <MessageContainer/>
        <div className="fixed bottom-0 w-full p-8 self-center">
          <MessageInputBox onSend={sendMessage}/>
        </div>
      </>
    )
  }
  
}

export default App
