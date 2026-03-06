import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

interface Props {
    onSend: (message: string) => Promise<void>
}

export default function MessageInputBox(props: Props) {
    const [value, setValue] = useState("")

    async function handleKeyDown(e: React.KeyboardEvent) {
        /* send message on enter without a shift */
        if (!e.shiftKey && e.key === "Enter") {
            e.preventDefault() // no newline
            // send message and reset the buffer
            await props.onSend(value)

            // reset buffer
            setValue("")
        }
    }

    return (
        <Textarea 
            placeholder="Your message here sire"
            value={value}
            onKeyDown={handleKeyDown}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}