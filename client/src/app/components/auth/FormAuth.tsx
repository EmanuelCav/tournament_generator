import { Button, Typography, Grid } from "@mui/material"

import FormLogin from "./components/FormLogin"

import { FormAuthPropsType } from "../../types/auth.types"

const FormAuth = ({ dispatch, navigate, setIsRegister, setIsForgotPassword }: FormAuthPropsType) => {
    return (
        <Grid
            item
            xs={12}
            sm={6}
            sx={{
                padding: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <Typography variant="h5" color="#2e7d32" sx={{ fontWeight: 600, marginBottom: 2 }}>
                Iniciar Sesión
            </Typography>
            <FormLogin dispatch={dispatch} navigate={navigate} setIsForgotPassword={setIsForgotPassword} />
            <Typography
                variant="body1"
                sx={{ textAlign: 'center', marginTop: 2, color: 'text.secondary' }}
            >
                ¿No tienes una cuenta?
                <Button color="success" sx={{ fontWeight: 600, ml: { xs: 0, sm: 2 }}} 
                onClick={() => setIsRegister(true)}>Regístrate</Button>
            </Typography>
        </Grid>
    )
}

export default FormAuth