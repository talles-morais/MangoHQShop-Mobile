import { TouchableOpacity } from "react-native";
import { Icon } from "./styles";
import { Ionicons } from "@expo/vector-icons"

type IoniconName = keyof typeof Ionicons.glyphMap;

interface IProps {
  iconName: IoniconName,
}

export default function SocialIcon({ iconName }: IProps) {
  return (
    <TouchableOpacity>
      <Icon name={iconName} />
    </TouchableOpacity>
  )
};
