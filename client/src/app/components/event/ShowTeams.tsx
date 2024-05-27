import { Box } from "@mui/material"

import ShowTeam from "./components/showTeams/ShowTeam"

import { ITeam } from "../../interface/Event"
import { ShowTeamsPropsType } from "../../types/event.types"

const ShowTeams = ({ event, handleSure }: ShowTeamsPropsType) => {
    return (
        <Box width={'100%'} py={2} px={4}>
            {
                event.teams?.map((team: ITeam) => {
                    return <ShowTeam team={team} handleSure={handleSure} key={team._id} />
                })
            }
        </Box>
    )
}

export default ShowTeams