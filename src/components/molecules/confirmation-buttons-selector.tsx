import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import react, { memo } from "react";

type ConfirmationButtonSelectorProps = {
  onConfirm: () => void;
  onCancel: () => void;
  className?: string;
};

const ConfirmationButtonSelector = ({
  onCancel,
  onConfirm,
  className,
}: ConfirmationButtonSelectorProps) => {
  return (
    <div className={`flex justify-center space-x-2 ${className}`}>
      <button
        onClick={onConfirm}
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        <FontAwesomeIcon icon={solid("check")} />
      </button>
      <button
        onClick={onCancel}
        className="bg-redCrayola hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-redCrayola rounded"
      >
        <FontAwesomeIcon icon={solid("xmark")} />
      </button>
    </div>
  );
};

export default memo(ConfirmationButtonSelector);
