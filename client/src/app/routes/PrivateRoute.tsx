import { useSelector } from "react-redux"
import { Outlet, redirect } from "react-router-dom"

import { selector } from "../server/selector"

import { IReducer } from "../interface/General"

const PrivateRoute = () => {

    const user = useSelector((state: IReducer) => selector(state).user)

    return (
        <>
            {
                user.isLoggedIn ? <Outlet /> : redirect('/auth')
            }
        </>
    )
}

export default PrivateRoute