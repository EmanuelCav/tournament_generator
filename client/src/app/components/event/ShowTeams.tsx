import { Box, Typography, Button } from "@mui/material"

import ShowTeam from "./components/showTeams/ShowTeam"

import { ITeam } from "../../interface/Event"
import { ShowTeamsPropsType } from "../../types/event.types"

const ShowTeams = ({ event, handleSure, handleAddTeam, handleEditTeam }: ShowTeamsPropsType) => {
    return (
        <Box width={'100%'} py={2} px={4}>
            {
                event.teams?.length === 0 && <Typography mt={2} textAlign='center' color='#33cc33' variant='h5'>There are not teams yet. Start to add.</Typography>
            }
            {
                event.teams?.map((team: ITeam) => {
                    return <ShowTeam team={team} handleSure={handleSure} handleEditTeam={handleEditTeam} key={team._id} />
                })
            }
            <Button variant='text' color='success' onClick={handleAddTeam}>
                Add a team
            </Button>
        </Box>
    )
}

export default ShowTeams