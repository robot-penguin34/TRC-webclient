import type { MessageStruct } from "@/App";
import Message from "./Message";
import { Separator } from "@/components/ui/separator";

interface Props {
    messages: MessageStruct[]
}

export default function MessageContainer(props: Props) {
    let { messages } = props

    return (<>
        <div className="p-8">
            {messages.map((message, i) => {
                return (<>
                    <Message
                        sender={message.sender.username}
                        sender_handle={message.sender.handle}
                        content={message.content}
                        key={i}
                    />
                    <Separator/>
                </>)
            })}
        </div>
    </>)
}