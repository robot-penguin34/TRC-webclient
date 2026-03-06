import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export default function MessageInputBox() {
    const [value, setValue] = useState("")

    function handleKeyDown() {

    }

    return (
        <Textarea placeholder="Your message here sire"/>
    )
}