import Message from "./Message";
import { Separator } from "@/components/ui/separator";

interface Props {
    
}

interface Message {
    content: string,
    sender: string,
    sender_handle: string
    time: string
}


export default function MessageContainer(props: Props) {
    let messages: Message[] = [
        {content: "...", sender: "RandomGoblin", sender_handle: "Kreegthegoblin", time: "12:00"},
        {content: "what", sender: "Grimace", sender_handle: "Happy_birthday", time: "12:00"}
    ]

    return (<>
        <div className="p-8">
            {messages.map((message, i) => {
                return (<>
                    <Message
                        sender={message.sender}
                        sender_handle={message.sender_handle}
                        time={message.time}
                        content={message.content}
                    />
                    <Separator/>
                </>)
            })}
        </div>
    </>)
}