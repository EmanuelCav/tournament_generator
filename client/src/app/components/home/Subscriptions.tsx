import { Box } from "@mui/material"

import { ISubscription } from "../../interface/User"

import CardSubscription from "./components/subscriptions/CardSubscription"

const Subscriptions = ({ showSubscriptions }: { showSubscriptions: ISubscription[] }) => {
  return (
    <Box width={'100%'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} flexWrap={'wrap'} sx={{
        height: '100vh'
    }}>
        {
            showSubscriptions.map((showSubscription: ISubscription) => {
                return <CardSubscription showSubscription={showSubscription} key={showSubscription._id} />
            })
        }
    </Box>
  )
}

export default Subscriptions