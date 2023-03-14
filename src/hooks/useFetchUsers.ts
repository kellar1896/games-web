import { useCallback, useEffect, useMemo, useState } from "react";
import { User } from "../models/users";
import { UserServices } from "../services/user.Services";

export const useFetchUsers= () =>{
    const [usersData, setUsersData] = useState([] as User[]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null as null | unknown);
    const userServices = useMemo(()=> new UserServices(),[]);

    const getUserData = useCallback(async () => {
      try {
        const data = await userServices.fetchUsers();
        setUsersData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    },[userServices])
  
    useEffect(() => {
      getUserData();
    }, [getUserData, userServices]);
  
    return { usersData, isLoading, error, getUserData };
}

export default useFetchUsers;