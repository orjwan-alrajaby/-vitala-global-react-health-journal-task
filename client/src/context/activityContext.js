import { createContext, useState } from 'react';
import { ACTIVITIES } from "database";

const generateState = () => ({ list: [] })

const Context = createContext();

const ActivityContextProvider = ({ children }) => {
  const state = generateState();
  const [context, setContext] = useState(state);

  return <Context.Provider value={{ activityState: context, setActivityState: setContext }}>
    {children}
  </Context.Provider>
}

export { ActivityContextProvider, Context as ActivityContext };