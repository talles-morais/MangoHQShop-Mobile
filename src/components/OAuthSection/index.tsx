import Google from "../../../assets/login/google-logo.svg"
import Facebook from "../../../assets/login/facebook-logo.svg"
import { AuthWrapper, ConnectText, SocialSection } from "./styles"
import { View } from "react-native"

export default function OAuthSection({ text }: { text: string }) {
  return (
    <AuthWrapper>
      <ConnectText fontsize="24">
        {text}
      </ConnectText>
      <ConnectText>
        com
      </ConnectText>

      <SocialSection>
        <View style={{
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "#000",
          borderRadius: 100
        }}>
          <Google/>
        </View>
        <View style={{
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "#000",
          borderRadius: 1000
        }}>
          <Facebook />
        </View>
      </SocialSection>
    </AuthWrapper>
  )
};

