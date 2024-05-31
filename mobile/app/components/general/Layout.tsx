import { ReactNode } from 'react'
import { Box } from 'native-base'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <Box flex={1}>{children}</Box>
    )
}

export default Layout