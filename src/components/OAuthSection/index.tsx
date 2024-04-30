import Google from "../../../assets/login/google-logo.svg"
import Facebook from "../../../assets/login/facebook-logo.svg"
import { AuthWrapper, ConnectText, SocialSection } from "./styles"

export default function OAuthSection({text } : {text: string}) {
  return (
    <AuthWrapper>
      <ConnectText fontsize="24">
        {text}
      </ConnectText>
      <ConnectText>
        com
      </ConnectText>

      <SocialSection>
        <Google style={{
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "#000",
        }}/>
        <Facebook />
      </SocialSection>
    </AuthWrapper>
  )
};

