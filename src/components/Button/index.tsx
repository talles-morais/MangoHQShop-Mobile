import { GestureResponderEvent } from "react-native";
import { ButtonText, ButtonWrapper } from "./styles";

interface ButtonProps {
  text: string,
  textColor?: string,
  bgColor?: string,
  borderColor?: string,
  screen?: string,
  navigation?: any,
  handle?: (event: GestureResponderEvent) => void;
}

export default function Button({text, textColor, bgColor, borderColor, screen, navigation, handle} : ButtonProps) {
  const onPressHandler = (event: GestureResponderEvent) => {
    if (handle) {
      handle(event);
    } else if (navigation && screen) {
      navigation.navigate(screen);
    }
  };

  return (
    <ButtonWrapper 
      bgColor={bgColor} 
      borderColor={borderColor}
      onPress={onPressHandler}
    >
      <ButtonText color={textColor}>
        {text}
      </ButtonText>
    </ButtonWrapper>
  )
};
