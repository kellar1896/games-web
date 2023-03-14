import react, { memo } from "react";

type TextAreaStyledProps = {
  value: string;
  onChange: (event: react.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  id?: string;
  name?: string;
};

const TextAreaStyled = ({
  onChange,
  placeholder,
  value,
  id,
  name,
}: TextAreaStyledProps) => {
  return (
    <div className="relative w-full">
      <textarea
        id={id}
        name={name}
        className="w-full block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default memo(TextAreaStyled);
