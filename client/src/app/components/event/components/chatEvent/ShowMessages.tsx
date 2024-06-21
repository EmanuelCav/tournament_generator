import { Box } from "@mui/material"

import { IComment, IEvent } from "../../../../interface/Event"

import Comment from "./components/Comment"

const ShowMessages = ({ event }: { event: IEvent }) => {
  return (
    <Box>
      {
        event.comments?.map((comment: IComment) => {
          return <Comment comment={comment} key={comment._id} />
        })
      }
    </Box>
  )
}

export default ShowMessages