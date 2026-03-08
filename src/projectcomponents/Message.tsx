import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface Props {
    content: string,
    sender: string,
    sender_handle: string
}

export default function Message(props: Props) {
    return (<>
    <div className="py-3 px-2">
        <div>
            <HoverCard>
                <HoverCardTrigger className="text-[#0388fc] hover:underline text-lg">{props.sender}</HoverCardTrigger>
                <HoverCardContent className="text-[#f4fc03]">@{props.sender_handle}</HoverCardContent>
            </HoverCard>
        </div>
        <span>{props.content}</span>
    </div>
    </>)
}