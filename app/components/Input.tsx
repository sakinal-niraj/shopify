"use client";

interface InputBox{
    label?:string,
    value?:string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onClick?: () => void;
    btnText?:string,
    placeholder?:string,
    type?:string,
};

const Input: React.FC<InputBox> = ({label,value,onChange,onClick,btnText,placeholder,type}) => {
  return (
    <div className="font-medium mt-2 text-sm space-y-1">
      <h1 className="pb-1">{label}</h1>
      <input
        type={type || "text"}
        value={value}
        onChange={onChange}
        className="border p-2 w-full outline-none rounded-md"
        placeholder={placeholder}
      />
      <button
        onClick={onClick}
        className="mt-2 p-2 bg-blue-500 text-white w-full"
      >
        {btnText}
      </button>
      <div></div>
    </div>
  );
};

export default Input;
