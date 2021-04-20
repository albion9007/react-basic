// createContextをimportする。
import { createContext } from "react";

// createContextで作られたものをAppContextに格納しておく。
const AppContext = createContext();

// AppContextを他のコンポーネントで使えるようにexportする。
export default AppContext;
