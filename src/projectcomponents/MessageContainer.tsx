import Message from "./Message";
import { Separator } from "@/components/ui/separator";

interface Props {
    
}

export default function MessageContainer(props: Props) {
    let messages: string[] = [
        ""
    ]

    return (<>
        <div className="p-8">
            {messages.map((message, i) => {
                return (<>
                    <Message
                        sender="RandomGoblin"
                        sender_handle="Kreeg_the_goblin"
                        time="12:00pm"
                        content="ME WANT GOLD"
                    />
                    <Separator/>
                </>)
            })}
        </div>
    </>)
}