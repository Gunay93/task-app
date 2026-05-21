import React from "react";
import { StyleSheet, View } from "react-native";

import { Spacing } from "@/constants/theme";
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";
type AppHeaderProps = {
  pendingCount: number;
};

export default function AppHeader({
  pendingCount,
}: AppHeaderProps) {
  return (
    <View style={styles.container}>
      <ThemedView type="backgroundElement" style={styles.header}>
        <View style={styles.leftSide}>
          <ThemedText
            type="small"
            themeColor="textSecondary"
          >
            Gününü planla <Ionicons name="sparkles" size={15} color="#c3c300" />
          </ThemedText>

          <ThemedText type="title" style={styles.title}>
            Gündəlik Tapşırıqlar
          </ThemedText>

          <ThemedText
            type="small"
            themeColor="textSecondary"
            style={styles.subtitle}
          >
            {pendingCount} aktiv tapşırıq
          </ThemedText>
        </View>

        <ThemedView
          type="backgroundSelected"
          style={styles.badge}
        >
          <ThemedText type="smallBold">
            {pendingCount}
          </ThemedText>
          <ThemedText>
            <SimpleLineIcons name="notebook" size={15} color={pendingCount ? 'yellow' : 'green'} />
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginBottom: Spacing.four,
  },

  header: {
    width: "100%",
    paddingVertical: Spacing.four,
    paddingHorizontal: Spacing.four,
    borderRadius: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftSide: {
    flex: 1,
  },

  title: {
    marginTop: 2,
    fontSize: 18,
    lineHeight: 33,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 8,
  },

  badge: {
    width: 60,
    height: 60,
    borderRadius: '50%',
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    flexDirection: 'row'
  },
});