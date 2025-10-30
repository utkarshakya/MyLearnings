import { Ionicons } from "@expo/vector-icons";
import React from "react";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  focusedIcon: keyof typeof Ionicons.glyphMap;
  focused: boolean;
};

export function TabBarIcon({ icon, focusedIcon, focused }: Props) {
  if (focused) {
    return (
      <Ionicons name={focused ? focusedIcon : icon} size={14} color="white" />
    );
  }
  return <Ionicons name={icon} size={14} color="white" />;
}
