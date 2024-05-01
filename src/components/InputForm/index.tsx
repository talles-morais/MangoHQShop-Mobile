import { TextInputProps, View } from "react-native";
import { Control, Controller } from "react-hook-form";
import { Input } from "./styles";

type Inputs = {
  name: string,
  email: string,
  phone: string,
  password: string,
  confirmPassword: string
}

interface Props extends TextInputProps {
  control: Control<Inputs>,
  name: keyof Inputs
}

export default function InputForm({ control, name, ...rest } : Props) {

  return (
    <View>
      <Controller 
        control={control}
        render={({field : { onChange, value }}) => (
          <Input 
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      >
      </Controller>
    </View>
  )
};
