import react, { useCallback, useEffect, useMemo, useState } from "react";
import ButtonStyled from "../components/atoms/button-styled";
import UsersTable from "../components/molecules/users-table";
import ConfirmationButtonSelector from "../components/molecules/confirmation-buttons-selector";
import UsersForm from "../components/organisms/users-form";
import { User, UserHeader } from "../models/users";
import ModalStyled from "../components/templates/modal-styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  createUser,
  editUser,
  removeUser,
  removeUserSelected,
  selectAllUsers,
  setUserSelected,
} from "../features/users/usersSlice";
import { RootState } from "../app/store";
import LoadingPage from "../components/atoms/loading-page";

const headers = ["name", "age", "email", "location"] as UserHeader[];

const Users = () => {
  const dispatch = useAppDispatch();
  const usersData = useAppSelector(selectAllUsers);
  const { status } = useAppSelector((state: RootState) => state.users);
  const { selectedUser } = useAppSelector((state: RootState) => state.users);
  const [formUser, setFormUser] = useState({
    name: "",
    age: 0,
    email: "",
    location: "",
  } as User);
  const [errorForm, setErrorForm] = useState(null as null | string);
  const [isLoadingForm, setLoadingForm] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConfirmCancelVisible, setIsConfirmCancelVisible] = useState(false);

  const validateForm = useCallback((data: User) => {
    if (!data.name) {
      return "Name is required";
    }
    if (!data.email) {
      return "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      return "Invalid email address";
    }
    if (!data.location) {
      return "Location is required";
    }
    if (!data.age) {
      return "Age is required";
    } else if (isNaN(data.age)) {
      return "Age must be a number";
    } else if (data.age < 18 || data.age > 100) {
      return "Age must be between 18 and 100";
    }
    return null;
  }, []);

  const onSubmit = useCallback(
    async (
      e: react.FormEvent<HTMLFormElement>,
      submitType: "CREATE" | "UPDATE"
    ) => {
      e.preventDefault();
      const errorValidation = validateForm(formUser);
      setErrorForm(errorValidation);
      if (errorValidation !== null) return;
      if (submitType === "UPDATE") {
        dispatch(
          editUser({
            ...formUser,
            age: +formUser.age,
          })
        );
      } else if (submitType === "CREATE") {
        dispatch(
          createUser({
            ...formUser,
            age: +formUser.age,
          })
        );
      }
      setLoadingForm(false);
      dispatch(removeUserSelected);
      setIsModalVisible(false);
    },
    [dispatch, formUser, validateForm]
  );

  const deleteUser = useCallback(async () => {
    if (selectedUser?.id === undefined) return;
    dispatch(removeUser(selectedUser.id));
  }, [dispatch, selectedUser]);


  const showSelectedUser = useCallback((user: User) => {
    dispatch(setUserSelected(user))
    setFormUser(user);
  }, [dispatch]);

  const handleChange = (event: react.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormUser((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const openModal = useCallback(() => {
    setIsModalVisible(true);
    setFormUser({
      name: "",
      age: 0,
      email: "",
      location: "",
    } as User);
    dispatch(removeUserSelected);
  }, [dispatch]);

  console.log('cualquier cosa')

  if (status === "loading") {
    return <LoadingPage />;
  }

  if (status === "failed") {
    return <div>{`Error:`}</div>;
  }

  return (
    <div className="p-2 md:p-10 flex flex-col">
      <ButtonStyled
        className="w-full md:w-44 self-end my-2"
        onClick={openModal}
      >
        New User
      </ButtonStyled>
      <UsersTable
        headers={headers}
        data={usersData}
        onEditUser={showSelectedUser}
      />
      {selectedUser && (
        <div className="my-5 bg-gray-500 rounded-lg p-5 w-full md:w-5/12 flex flex-col overflow-hidden">
          {isConfirmCancelVisible ? (
            <ConfirmationButtonSelector
              className="self-end"
              onCancel={() => setIsConfirmCancelVisible(false)}
              onConfirm={deleteUser}
            />
          ) : (
            <ButtonStyled
              onClick={() => setIsConfirmCancelVisible(true)}
              className="w-full md:w-32 self-end"
            >
              <FontAwesomeIcon icon={solid("trash")} />
            </ButtonStyled>
          )}
          <UsersForm
            buttonText="Edit"
            onSubmit={(e) => onSubmit(e, "UPDATE")}
            user={formUser}
            handleChange={handleChange}
            error={errorForm}
            loadingForm={isLoadingForm}
          />
        </div>
      )}
      <ModalStyled isOpen={isModalVisible}>
        <div className="text-raisingBlack bg-transparent flex flex-col">
          <button className="self-end" onClick={() => setIsModalVisible(false)}>
            <FontAwesomeIcon icon={solid("xmark")} />
          </button>
          <UsersForm
            buttonText="create"
            onSubmit={(e) => onSubmit(e, "CREATE")}
            user={formUser}
            handleChange={handleChange}
            error={errorForm}
            loadingForm={isLoadingForm}
            className="text-raisingBlack"
          />
        </div>
      </ModalStyled>
    </div>
  );
};

export default Users;
