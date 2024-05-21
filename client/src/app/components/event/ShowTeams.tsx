import { Box } from "@mui/material"

import { IEvent, ITeam } from "../../interface/Event"

const ShowTeams = ({ event }: { event: IEvent }) => {
    return (
        <Box>
            {
                event.teams?.map((team: ITeam) => {
                    return <p>{team.name}</p>
                })
            }
        </Box>
    )
}

export default ShowTeams