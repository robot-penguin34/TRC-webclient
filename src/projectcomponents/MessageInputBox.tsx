import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

interface Props {
    onSend: (message: string) => Promise<void>,
    activeChannel: string,
}

export default function MessageInputBox(props: Props) {
    const [value, setValue] = useState("")

    async function handleKeyDown(e: React.KeyboardEvent) {
        if (value.length === 0) {return}

        /* send message on enter without a shift */
        if (!e.shiftKey && e.key === "Enter") {

            e.preventDefault() // no newline
            // send message and reset the buffer
            await props.onSend(value.trim())

            // reset buffer
            setValue("")
        }
    }

    return (
        <Textarea 
            className="min-h-10 text-xl"
            placeholder={"message #" + props.activeChannel}
            value={value}
            onKeyDown={handleKeyDown}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}