import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Text, TextInputProps, View } from 'react-native';
import { Input, Error } from '../InputForm/styles';

// Função para formatar o número do telefone brasileiro
const formatPhone = (value: string): string => {
  // Remover caracteres não numéricos
  const cleaned = value.replace(/\D/g, '');

  // Aplicar a formatação
  if (cleaned.length > 10) {
    // Formato com 11 dígitos
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (cleaned.length > 6) {
    // Formato com 10 dígitos
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  } else if (cleaned.length > 2) {
    // Formato parcial (00) 0000
    return cleaned.replace(/(\d{2})(\d*)/, '($1) $2');
  } else {
    // Formato inicial (00)
    return `${cleaned}`;
  }
};

interface PhoneInputProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  error: string;
}

const PhoneInput = <T extends FieldValues>({ control, name, error, ...rest }: PhoneInputProps<T>) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input
            {...rest}
            value={formatPhone(value || '')}
            maxLength={15}
            onChangeText={(text) => {
              const formatted = formatPhone(text); // Aplicar a formatação antes de enviar ao `onChange`
              onChange(formatted); // Atualizar o campo com o valor formatado
            }}
          />
        )}
      />
      {error && <Error>{error}</Error>}
    </View>
  );
};

export default PhoneInput;
