import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import react from "react";

type InputStyledProps = {
  type?: react.HTMLInputTypeAttribute;
  value: string;
  onChange: (event: react.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon?: IconProp;
  id?: string;
  name?: string;
};

const InputStyled = ({
  onChange,
  type = "text",
  value,
  placeholder,
  icon,
  id,
  name,
}: InputStyledProps) => {
  return (
    <div className="w-auto">
      {icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FontAwesomeIcon icon={icon} className="text-gray-400" />
        </div>
      )}
      <input
        id={id}
        type={type}
        className="block p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default InputStyled;
