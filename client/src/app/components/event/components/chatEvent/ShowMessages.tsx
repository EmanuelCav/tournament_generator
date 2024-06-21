import { useEffect, useRef } from "react"
import { Box } from "@mui/material"

import { IComment } from "../../../../interface/Event"
import { ShowMessagesPropsType } from "../../../../types/event.types"

import Comment from "./components/Comment"

const ShowMessages = ({ event, user }: ShowMessagesPropsType) => {

  const messagesEndRef = useRef<any>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [event.comments]);

  return (
    <Box width={'100%'} height={'40em'} sx={{
      overflowY: 'auto'
    }}>
      {
        event.comments?.map((comment: IComment) => {
          return <Comment user={user} comment={comment} key={comment._id} />
        })
      }
      <div ref={messagesEndRef} />
    </Box>
  )
}

export default ShowMessages