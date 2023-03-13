import react from "react";
import UsersTable from "../components/molecules/users-table";
import useFetchUsers from "../hooks/useFetchUsers";
import { UserHeader } from "../models/users";

const headers = ["name", "email", "location"] as UserHeader[];

const Users = () => {
  const { usersData, isLoading, error } = useFetchUsers();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        {`Error: ${error}`}
      </div>
    );
  }

  return (
    <div className="p-2 md:p-10">
      <UsersTable headers={headers} data={usersData} onEditUser={() => {}} />
    </div>
  );
};

export default Users;
