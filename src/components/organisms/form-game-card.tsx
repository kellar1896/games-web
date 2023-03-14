import react, { memo } from "react";
import { Game } from "../../models/games";
import ButtonStyled from "../atoms/button-styled";
import InputStyled from "../atoms/input-styled";
import TextAreaStyled from "../atoms/text-area-styled";
import DropdownStyled from "../atoms/dropdown-styled";

type FormGameCardProp = {
  game: Game;
  onSubmit: (event: react.FormEvent<HTMLFormElement>) => void;
  handleForm: (
    event:
      | react.ChangeEvent<HTMLInputElement>
      | react.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  gameOptions: string[];
  isLoading?: boolean;
  errorForm?: string | null;
  className?: string;
};

const FormGameCard = ({
  game,
  onSubmit,
  handleForm,
  gameOptions,
  isLoading = false,
  errorForm,
  className,
}: FormGameCardProp) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`text-lavanderBlush w-full flex flex-col rounded-lg space-x-2 ${className}`}
    >
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="m-0 md:mr-10">
          <div className="text-sm my-2 w-full">
            <label htmlFor="name">Name</label>
            <InputStyled
              value={game.name}
              onChange={handleForm}
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="text-sm my-2 w-full">
            <label htmlFor="description">Description</label>
            <TextAreaStyled
              value={game.description}
              onChange={handleForm}
              placeholder="Description"
              name="description"
            />
          </div>
          <div>
            <DropdownStyled
              options={gameOptions}
              title="Category"
              placeholder="select an option"
              onChange={handleForm}
              name="category"
              value={game.category}
              className={className}
            />
          </div>
        </div>
      </div>
      {errorForm && <p className="text-sm
       font-bold text-red-600 my-2">{errorForm}</p>}
      <ButtonStyled type="submit" className="w-full md:w-20 self-end mt-5" loading={isLoading}>
        Save
      </ButtonStyled>
    </form>
  );
};

export default memo(FormGameCard);
