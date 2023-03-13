import react from "react";
import ReactLoading from "react-loading";

type ButtonStyledProps = {
  onClick?: (event: react.MouseEvent<HTMLButtonElement>) => void;
  children: react.ReactNode;
  className?: string;
  loading?: boolean;
  type?: react.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

const ButtonStyled = ({
  onClick,
  children,
  className,
  loading = false,
  type,
}: ButtonStyledProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-redCrayola hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-redCrayola rounded w-full flex justify-center ${className}`}
    >
      {loading ? <ReactLoading height={20} width={20} /> : children}
    </button>
  );
};

export default ButtonStyled;
