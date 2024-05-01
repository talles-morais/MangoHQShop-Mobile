import { TextInputProps, View } from "react-native";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Input, Error } from "./styles";

interface Props<T extends FieldValues> extends TextInputProps {
  control: Control<T>,
  name: Path<T>,
  error: string,
}

export default function InputForm<T extends FieldValues>({ control, name, error, ...rest }: Props<T>) {

  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </View>
  )
};
