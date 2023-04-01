import React, {useContext, createContext, useState, useEffect} from 'react';
import {API, Auth, graphqlOperation, Hub} from 'aws-amplify';
import {getUser} from '../../src/graphql/queries';

const UserDataContext = createContext();

export const useUserData = () => useContext(UserDataContext);

const UserDataProvider = ({children}) => {
  const [user, setUser] = useState();
  const [userid, setUserid] = useState();
  const [name, setName] = useState();
  const [availableToTrade, setAvailableToTrade] = useState(0.0);
  const [vmoney, setVmoney] = useState(0.0);
  const [_version, set_version] = useState(1);

  const fetchUserData = async () => {
    if (userid) {
      try {
        const response = await API.graphql(
          graphqlOperation(getUser, {id: userid}),
        );
        setName(response.data.getUser.name);
        setAvailableToTrade(response.data.getUser.availableToTrade);
        setVmoney(response.data.getUser.vmoney);
        set_version(response.data.getUser._version);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
      setUserid(await authUser.username);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };

    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [userid]);

  const updateDataProfile = async () => {
    await fetchUserData();
  };

  return (
    <UserDataContext.Provider
      value={{
        user,
        userid,
        name,
        availableToTrade,
        vmoney,
        _version,
        updateDataProfile,
        setName,
        setAvailableToTrade,
        setVmoney,
        set_version,
      }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
