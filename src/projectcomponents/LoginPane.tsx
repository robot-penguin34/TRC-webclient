import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { 
    Alert,
    AlertDescription,
    AlertTitle
 } from "@/components/ui/alert"
import { ServerCrash } from "lucide-react"


interface Props {
    setToken: (value: string) => void
}



export default function LoginPane(props: Props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    async function login(setToken: (value: string) => void) {
        /* validate fields */
        if (username.length === 0 || password.length === 0) { return }

        /* fetch the token from the server */

        setToken("something")
    }

    return (<>
        <div>
            <Alert className="max-w-md bottom-10 right-10 fixed p-8 z-100" variant="destructive">
                <ServerCrash />
                <AlertTitle>Error logging in</AlertTitle>
                <AlertDescription>Try a different username or password</AlertDescription>
            </Alert>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="justify-center items-center p-8">
                <h1 className="text-l">Log into TRC</h1>
                <h4>Username</h4>
                <Input placeholder="john_doe" value={username} onChange={(e) => setUsername(e.target.value)}/>

                <h4>Password</h4>
                <Input type="password" placeholder="ex@mpl3=passw0rd!" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <Button onClick={() => login(props.setToken)} className="mt-3">Login</Button>
            </div>
        </div>
        <div className="fixed bottom-0 w-full p-8 self-center">
            <span>Powered by <a href="https://github.com/Terminal-Relay-Chat/TRCd" className="underline">TRC</a> on github</span>
        </div>
    </>)
}