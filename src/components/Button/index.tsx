import { ButtonText, ButtonWrapper } from "./styles";

interface ButtonProps {
  text: string,
  textColor?: string,
  bgColor?: string,
  borderColor?: string,
  screen?: string,
  navigation?: any
}

export default function Button({text, textColor, bgColor, borderColor, screen, navigation} : ButtonProps) {
  return (
    <ButtonWrapper 
      bgColor={bgColor} 
      borderColor={borderColor}
      onPress={() => {screen && navigation ? navigation.navigate(screen) : null}}
    >
      <ButtonText color={textColor}>
        {text}
      </ButtonText>
    </ButtonWrapper>
  )
};
