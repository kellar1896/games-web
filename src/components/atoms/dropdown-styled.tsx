import React, { memo } from "react";
import "./dropdown-styled.css";

type DropdownStyledProps = {
  options: string[];
  title: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const DropdownStyled = ({
  options,
  title,
  placeholder,
  onChange
}: DropdownStyledProps) => {
  return (
    <div className="w-full">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <select
        name="cars"
        id="cars"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={onChange}
      >
        <option selected disabled>{placeholder}</option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default memo(DropdownStyled);
