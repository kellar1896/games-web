import react, { memo } from "react";
import { User } from "../../models/users";
import ButtonStyled from "../atoms/button-styled";
import InputStyled from "../atoms/input-styled";

type UsersFormProps = {
  onSubmit: (e: react.FormEvent<HTMLFormElement>) => void;
  buttonText: string;
  user: User;
  handleChange: (e: react.ChangeEvent<HTMLInputElement>) => void
  error?: null | string; 
  loadingForm?: boolean
  className?: string
};

const UsersForm = ({
  user,
  onSubmit,
  buttonText,
  handleChange,
  error,
  loadingForm = false,
  className
}: UsersFormProps) => {

  return (
    <form onSubmit={onSubmit} className={`text-lavanderBlush flex flex-col ${className}`}>
      <label>
        Name:
        <InputStyled
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Age:
        <InputStyled
          type="number"
          name="age"
          placeholder="Age"
          value={user.age.toString()}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <InputStyled
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Location:
        <InputStyled
          type="text"
          name="location"
          placeholder="Location"
          value={user.location}
          onChange={handleChange}
        />
      </label>
      <br />
      {error && <p className="text-sm
       font-bold text-red-600 my-2">{error}</p>}
      <ButtonStyled type="submit" className="w-full md:w-32 self-end" loading={loadingForm}>{buttonText}</ButtonStyled>
    </form>
  );
};

export default memo(UsersForm);
