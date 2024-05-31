import React, { ReactNode } from 'react'
import { Dimensions } from 'react-native'
import { Box, NativeBaseProvider, Container as Cont } from 'native-base'

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <NativeBaseProvider>
      <Cont>
        <Box width={Dimensions.get("window").width} p={2} bgColor={'emerald.100'} height={Dimensions.get("window").height}>
            {children}
        </Box>
      </Cont>
    </NativeBaseProvider>
  )
}

export default Container