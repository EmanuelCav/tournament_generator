import { IComment } from '../../../../../interface/Event'

const Comment = ({ comment }: { comment: IComment }) => {
  return (
    <div>
      {comment.comment}
    </div>
  )
}

export default Comment