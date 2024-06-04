import { useState } from "react"
import { Box, Typography, Button } from "@mui/material"

import ShowTeam from "./components/showTeams/ShowTeam"

import { ITeam } from "../../interface/Event"
import { ShowTeamsPropsType } from "../../types/event.types"

const ShowTeams = ({ event, handleSure, handleAddTeam, handleEditTeam, handleAddPlayer, handleSurePlayer, handleEditPlayer }: ShowTeamsPropsType) => {

    const [isShowPlayers, setIsShowPlayers] = useState<boolean>(false)

    return (
        <Box flex={1} alignItems={'center'} justifyContent={'center'} py={2} px={4}>
            <Button variant='outlined' sx={{ mt: 4, mx: 2 }} color='success' onClick={handleAddTeam}>
                Add a team
            </Button>
            {
                event.teams?.length === 0 && <Typography mt={2} textAlign='center' color='#33cc33' variant='h5'>There are not teams yet. Start to add.</Typography>
            }
            {
                event.teams?.length! >= 0 && <Button color="inherit" variant="outlined" sx={{ mt: 4, mx: 2 }} onClick={() => setIsShowPlayers(!isShowPlayers)}>{isShowPlayers ? "Hide players" : "Show players"}</Button>
            }
            {
                event.teams?.map((team: ITeam) => {
                    return <ShowTeam team={team} handleSure={handleSure} handleEditPlayer={handleEditPlayer} handleSurePlayer={handleSurePlayer} handleEditTeam={handleEditTeam} isShowPlayers={isShowPlayers} handleAddPlayer={handleAddPlayer} key={team._id} />
                })
            }
        </Box>
    )
}

export default ShowTeams