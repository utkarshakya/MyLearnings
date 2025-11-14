import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColors } from "../../src/hooks/useColors";
import { useResponsiveFont } from "../../src/hooks/useResponsive";

const Profile = () => {
  const colors = useColors();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.bg,
      }}
    >
      <Text
        className="font-bold text-4xl text-white italic"
        style={{
          color: colors.text,
          fontSize: useResponsiveFont(30),
          lineHeight: useResponsiveFont(40),
          fontStyle: "italic",
          fontWeight: "bold",
        }}
      >
        Profile
      </Text>
    </SafeAreaView>
  );
};

export default Profile;
