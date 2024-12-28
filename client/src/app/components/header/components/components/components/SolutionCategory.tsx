import { Grid, MenuItem, Typography } from "@mui/material"

import { SolutionCategoryPropsType } from "../../../../../types/header.types"

const SolutionCategory = ({ func, title, solutions }: SolutionCategoryPropsType) => {
    return (
        <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom color='#2e7d32' fontWeight={600}>
                {title}
            </Typography>
            {
                solutions.map((solution, index) => {
                    return <MenuItem key={index} onClick={func} sx={{
                        padding: '10px'
                    }}>
                        {solution}
                    </MenuItem>
                })
            }
        </Grid>
    )
}

export default SolutionCategory