import { useEffect, useState } from "react"
import { Box, Typography, Button } from "@mui/material"

import ShowTeam from "./components/showTeams/ShowTeam"

import { ITeam } from "../../interface/Event"
import { ShowTeamsPropsType } from "../../types/event.types"

const ShowTeams = ({ event, user, handleSure, handleAddTeam, handleEditTeam, handleAddPlayer, handleSurePlayer, handleEditPlayer, joinTeam, handleSureQuitFan, handleEditPlayerData }: ShowTeamsPropsType) => {

    const [isShowPlayers, setIsShowPlayers] = useState<boolean>(false)
    const [isShowFans, setIsShowFans] = useState<boolean>(false)
    const [isJoined, setIsJoined] = useState<boolean>(false)

    const handlePlayers = () => {
        setIsShowPlayers(!isShowPlayers)
        setIsShowFans(false)
    }

    const handleFans = () => {
        setIsShowFans(!isShowFans)
        setIsShowPlayers(false)
    }

    useEffect(() => {
        for (let i = 0; i < event.teams!.length; i++) {
            event.teams![i].competitors.find((c) => {
                c.user._id === user._id ? (
                    setIsJoined(true)
                ) : (
                    setIsJoined(false)
                )
            })
        }

        if(isJoined) {
            setIsJoined(false)
        }
        
    }, [event.teams])

    return (
        <Box flex={1} alignItems={'center'} justifyContent={'center'} py={2} px={4}>
            {
                event.competitors?.find((c) => c.user._id === user._id)?.role.role === 'ADMIN' &&
                <Button variant='outlined' sx={{ mt: 4, mx: 2 }} color='success' onClick={handleAddTeam}>
                    Add a team
                </Button>
            }
            {
                event.teams?.length === 0 && <Typography mt={2} textAlign='center' color='#33cc33' variant='h5'>There are not teams yet. Start to add.</Typography>
            }
            {
                event.teams?.length! >= 0 && <Button color="inherit" variant="outlined" sx={{ mt: 4, mx: 2 }} onClick={handlePlayers}>{isShowPlayers ? "Hide players" : "Show players"}</Button>
            }
            {
                event.teams?.length! >= 0 && <Button color="inherit" variant="outlined" sx={{ mt: 4, mx: 2 }} onClick={handleFans}>{isShowFans ? "Hide fans joined" : "Show fans joined"}</Button>
            }
            {
                event.teams?.map((team: ITeam) => {
                    return <ShowTeam isJoined={isJoined} joinTeam={joinTeam} user={user} event={event} team={team} handleSure={handleSure} isShowPlayers={isShowPlayers} isShowFans={isShowFans}
                    handleEditPlayer={handleEditPlayer} handleSurePlayer={handleSurePlayer} handleSureQuitFan={handleSureQuitFan} handleEditTeam={handleEditTeam} handleAddPlayer={handleAddPlayer} handleEditPlayerData={handleEditPlayerData} 
                    key={team._id} />
                })
            }
        </Box>
    )
}

export default ShowTeams