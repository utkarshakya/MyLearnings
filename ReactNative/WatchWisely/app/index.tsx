import {Text, View} from "react-native";
import {Link} from "expo-router";

export default function Index() {
    return (
        <View className="flex-1 justify-center items-center">
            <Text className="font-bold text-4xl text-black italic">Welcome!</Text>
            <Link href="//About">About</Link>
        </View>
    );
}
