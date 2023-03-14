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
  ) => void;
  gameOptions: string[];
};

const FormGameCard = ({
  game,
  onSubmit,
  handleForm,
  gameOptions,
}: FormGameCardProp) => {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col rounded-lg space-x-2"
    >
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="m-0 md:mr-10">
          <div className="text-lavanderBlush text-sm my-2 w-full">
            <label htmlFor="name">Name</label>
            <InputStyled
              value={game.name}
              onChange={handleForm}
              placeholder="Name"
              id="name"
            />
          </div>
          <div className="text-lavanderBlush text-sm my-2 w-full">
            <label htmlFor="description">Description</label>
            <TextAreaStyled
              value={game.description}
              onChange={handleForm}
              placeholder="Description"
              id="description"
            />
          </div>
          <div>
            <DropdownStyled
              options={gameOptions}
              title="Category"
              placeholder="select an option"
            />
          </div>
        </div>
      </div>
      <ButtonStyled type="submit" className="w-full md:w-20 self-end">
        Save
      </ButtonStyled>
    </form>
  );
};

export default memo(FormGameCard);
