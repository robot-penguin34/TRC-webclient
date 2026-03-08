import MessageInputBox from "./projectcomponents/MessageInputBox"
import MessageContainer from "./projectcomponents/MessageContainer"
import LoginPane from "./projectcomponents/LoginPane"
import { useEffect, useRef, useState } from "react"
import axios from "axios"

const baseurl = "http://localhost:3000/api"
const sock_url = "ws://localhost:3001"


export interface MessageStruct {
    content: string,
    sender: Sender
}

interface SockMessage {
  message_type: string, // worry about MESSAGE
  content: string,
  sender: Sender
}

export interface Sender {
  user_type: string,
  permission_level: string,
  username: string,
  handle: string,
  provider_site: string,
  banned: boolean
}


export function App() {
  const [token, setToken] = useState("")
  const [activeChannel, setActiveChannel] = useState("general")
  const [messageBuffer, setMessageBuffer] = useState<MessageStruct[]>([])
  const sock = useRef<WebSocket | null>(null)

  async function handleSocketMessage(event: MessageEvent) {
    const message = JSON.parse(event.data)
    console.log("new message: " + event.data)

    /* handle server sent errors */
    if (message.error == true) {
      sock.current?.close()
    }

    if (message.message_type !== "MESSAGE") {return}

    setMessageBuffer([...messageBuffer, message])
  }

  useEffect(() => {
    if (token === "") {return}
    sock.current = new WebSocket(sock_url)
    sock.current.onopen = () => {
      sock.current?.send(token)
      sock.current?.send(activeChannel)
    }
    sock.current.onmessage = (event) => {handleSocketMessage(event)}

  }, [token])

  useEffect(() => {
    if (token === "" || sock.current === null) {return}
    sock.current.send(activeChannel)
  }, [activeChannel, sock.current])

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
        <MessageContainer messages={messageBuffer}/>
        <div className="fixed bottom-0 w-full p-8 self-center">
          <MessageInputBox onSend={sendMessage} activeChannel={activeChannel}/>
        </div>
      </>
    )
  }
  
}

export default App
