import { useSelector } from "react-redux";
import { selectTheme } from "../redux/slice/themeSlice";
import { Colors } from '../utils/Colors';


const useColors = () => {
  const isDarkMode = useSelector(selectTheme);
  const theme = isDarkMode ? 'dark' : 'light';
  return Colors[theme];
}

export default useColors