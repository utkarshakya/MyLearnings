import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
// Custom Hooks
import { useColors } from "../hooks/useColors";
import {
    useResponsiveFont,
    useResponsiveHeight,
    useResponsiveWidth,
} from "../hooks/useResponsive";

const CustomSearchBar = ({ query, setQuery, placeholder }) => {
  const colors = useColors();

  return (
    <View
      // Styles
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 50,
        borderWidth: 2,
        paddingHorizontal: useResponsiveWidth(6),
        paddingVertical: useResponsiveHeight(1),
        borderColor: colors.border,
        backgroundColor: colors.bg,
      }}
    >
      <TextInput
        // Styles
        style={{
          flex: 1,
          color: colors.text,
          fontSize: useResponsiveFont(12),
        }}
        placeholderTextColor={colors.placeholder}
        // Props
        placeholder={placeholder || "Search for Movies or TV Shows"}
        value={query}
        onChangeText={setQuery}
      />
      <Feather
        name="search"
        size={useResponsiveFont(12)}
        color={colors.placeholder}
        style={{
          position: "absolute",
          right: useResponsiveWidth(6),
          zIndex: 0,
        }}
      />
    </View>
  );
};

export default CustomSearchBar;
