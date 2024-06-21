import { Box, Typography } from '@mui/material'

import { CommentPropsType } from '../../../../../types/event.types'

const Comment = ({ comment, user }: CommentPropsType) => {
  return (
    <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={user.user?._id === comment.user._id ? 'flex-end' : 'flex-start'} flexDirection={'column'}>
      <Typography mt={1} variant='h6'>{comment.user.nickname}</Typography>
      <Typography maxWidth={295} borderRadius={2} p={1} bgcolor={'#2e7d32'} variant='body1' color={'#ffffff'}>
        {comment.comment}
      </Typography>
    </Box>
  )
}

export default Comment