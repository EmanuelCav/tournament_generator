import { ReactNode } from "react"
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Container