
import { createContext } from 'react'
export {foodList} from "./data/menuData/foodWebData.json"
const StoreContext = createContext(null)


const StoreContextProvider = (props) => {
  const contextValue = {
  
  };
  return <StoreContext.Provider value={contextValue}>
    {props.childern}
  </StoreContext.Provider>;
}

export default StoreContextProvider;