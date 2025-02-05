"use client";

interface InputBox {
  // label?:string,
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  btnText?: string;
  placeholder?: string;
  type?: string;
  disable?: boolean;
}

const Input: React.FC<InputBox> = ({
  value,
  onChange,
  onClick,
  btnText,
  placeholder,
  type,
  disable,
}) => {
  return (
    <div className="font-medium mt-2 text-sm space-y-1 pr-4">
      <input
        type={type || "text"}
        value={value}
        onChange={onChange}
        className="border p-2 w-full outline-none rounded-md py-3.5"
        placeholder={placeholder}
      />
      {btnText && (
        <button
          onClick={onClick}
          disabled={disable}
          className="mt-2 p-2 bg-blue-500 text-white w-full"
        >
          {btnText}
        </button>
      )}
      <div></div>
    </div>
  );
};

export default Input;
