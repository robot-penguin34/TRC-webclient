import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { 
    Alert,
    AlertDescription,
    AlertTitle,
 } from "@/components/ui/alert"
import { X } from "lucide-react"
import axios from "axios"


interface Props {
    setToken: (value: string) => void
    login_endpoint: string
    setBase_url: (value: string) => void
    setSock_url: (value: string) => void
    base_url: string
    sock_url: string
}



export default function LoginPane(props: Props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isShowingError, setIsShowingError] = useState(false)


    async function login(setToken: (value: string) => void, login_endpoint: string) {
        /* validate fields */
        if (username.length === 0 || password.length === 0) { return }

        /* fetch the token from the server */
        let token = ""

        try {
            // login
            const response = await axios.post(login_endpoint, {
                handle: username,
                password: password
            })

            // check for errors
            if (response.data.error != false) {
                throw new Error("server side error, value sent back: " + response.data.error)
            }

            // assign the token if there we no errors
            token = response.data.value

        } catch (error) {
            console.error(error)
            setIsShowingError(true)
            setUsername("")
            setPassword("")
            return
        }

        

        /* set the token and clear the fields */
        setUsername("")
        setPassword("")
        setToken(token)
    }

    return (<>
        <div>
            {isShowingError &&
                <Alert className="max-w-md bottom-10 right-10 fixed p-8 z-100 animate-in fade-in slide-in-from-bottom-2 duration-300" variant="destructive" >
                    <X onClick={() => setIsShowingError(false)} />
                    <AlertTitle>Error logging in</AlertTitle>
                    <AlertDescription>Try a different username or password</AlertDescription>
                </Alert>
            }
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="justify-center items-center p-8">
                <h1 className="text-xl p-8">Log into {document.location.hostname}</h1>
                <div>
                    <input value={props.base_url} onChange={(e) => props.setBase_url(e.target.value)} placeholder="https://example.com:8080/api"/>
                </div>
                <div>
                    <input value={props.sock_url} onChange={(e) => props.setSock_url(e.target.value)} placeholder="wss://example.com:8088/"/>
                </div>

                <hr className="dashed p-3"/>
                <h4>Username</h4>
                <Input placeholder="john_doe" value={username} onChange={(e) => setUsername(e.target.value)}/>

                <h4>Password</h4>
                <Input type="password" placeholder="ex@mpl3=passw0rd!" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <Button onClick={() => login(props.setToken, props.login_endpoint)} className="mt-3">Login</Button>
            </div>
        </div>
        <div className="fixed bottom-0 w-full p-8 self-center">
            <span>Powered by <a href="https://github.com/Terminal-Relay-Chat/TRCd" className="underline">TRC</a> on github</span>
        </div>
    </>)
}