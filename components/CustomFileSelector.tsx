import { Input } from "@/components/ui/input";
import { ComponentPropsWithRef } from "react";
type Props = ComponentPropsWithRef<"input"> & any;

const CustomFileSelector = ({ onChange, ...props }: Props) => {
  return <Input {...props} onChange={onChange} type="file" multiple />;
};

export default CustomFileSelector;
