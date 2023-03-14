import react, { memo } from "react";
import ReactLoading from "react-loading";

const LoadingPage = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <ReactLoading />
    </div>
  );
};

export default memo(LoadingPage);
