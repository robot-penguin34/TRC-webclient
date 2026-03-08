import MessageInputBox from "./projectcomponents/MessageInputBox"
import MessageContainer from "./projectcomponents/MessageContainer"
import LoginPane from "./projectcomponents/LoginPane"
import { useState } from "react"
import axios from "axios"

const baseurl = "http://localhost:3000/api"




export function App() {
  const [token, setToken] = useState("")
  const [activeChannel, setActiveChannel] = useState("general")

  async function sendMessage(message: String) {
    axios.post(baseurl + "/messages/" + activeChannel, message, {
      headers: {
        "x-auth-token": token
      }
    })
    console.log("sending message: " + message)
  }

  if (token === "") {
    return (<LoginPane setToken={setToken} login_endpoint="http://localhost:3000/api/login"/>)
  } else {
    return (
      <>
        <MessageContainer/>
        <div className="fixed bottom-0 w-full p-8 self-center">
          <MessageInputBox onSend={sendMessage} activeChannel={activeChannel}/>
        </div>
      </>
    )
  }
  
}

export default App
