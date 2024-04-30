import { View } from "react-native";
import { Label, Input } from "./styles";

interface FieldProps {
  label: string,
}

export default function FormField({ label } : FieldProps) {
  return (
    <View>
      <Label>
        {label}
      </Label>
      <Input />
    </View>
  )
};
