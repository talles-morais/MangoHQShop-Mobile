import { Label, Input } from "./styles";

interface FieldProps {
  label: string,
}

export default function FormField({ label } : FieldProps) {
  return (
    <>
      <Label>
        {label}
      </Label>
      <Input />
    </>
  )
};
