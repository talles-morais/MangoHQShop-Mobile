import Google from "../../../assets/login/google-logo.svg"
import Facebook from "../../../assets/login/facebook-logo.svg"
import { AuthWrapper, ConnectText } from "./styles"
import { StyleSheet, Text, View } from "react-native"
import theme from "../../global/styles/theme"

export default function OAuthSection() {
  return (
    <AuthWrapper>
      <ConnectText>
        Conecte-se com sua conta social:
      </ConnectText>

      <View style={styles.container}>
        <Google />
        <Facebook />
      </View>
    </AuthWrapper>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 32,
    justifyContent: "center",
  },
})
