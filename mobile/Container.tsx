import React, { ReactNode } from 'react'
import { Dimensions, View, StyleSheet } from 'react-native'

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        padding: Dimensions.get("window").height / 74,
        backgroundColor: '#8de1e7'
    }
})

export default Container