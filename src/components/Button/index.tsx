import { ButtonText, ButtonWrapper } from "./styles";

interface ButtonProps {
  text: string,
  textColor?: string,
  bgColor?: string,
  borderColor?: string,
}

export default function Button({text, textColor, bgColor, borderColor} : ButtonProps) {
  return (
    <ButtonWrapper bgColor={bgColor} borderColor={borderColor}>
      <ButtonText color={textColor}>
        {text}
      </ButtonText>
    </ButtonWrapper>
  )
};
