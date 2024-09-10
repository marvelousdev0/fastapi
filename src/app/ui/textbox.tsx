import { InputHTMLAttributes } from 'react';

type TextBoxProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  name: string;
  showLabel?: boolean;
};

export default function TextBox({
  id,
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  showLabel = true,
}: TextBoxProps) {
  return (
    <div className="w-full max-w-2xl relative">
      {showLabel && (
        <label
          htmlFor={id}
          className="absolute -top-2 left-2 inline-block bg-transparent px-1 text-xs font-medium text-gray-900 dark:text-gray-100"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="block w-full rounded-md border-0 py-3 bg-transparent text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg sm:leading-6"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
