import { Spacing } from "@/constants/theme";
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

type TaskCardProps = {
  title: string;
  isDone: boolean;
  onPress: () => void;
  onDelete: () => void;
};

export default function TaskCard({ title, isDone, onPress, onDelete }: TaskCardProps) {
  const [showDelete, setShowDelete] = useState(false);
  return (
    <Pressable
      onPress={() => {
        if (showDelete) {
          setShowDelete(false);
          return;
        }

        onPress();
      }}
      style={({ pressed }) => pressed && styles.pressed}
      onLongPress={() => setShowDelete(true)}
      delayLongPress={300}>
      <ThemedView
        type={isDone ? "backgroundSelected" : "backgroundElement"}
        style={styles.card}
      >
        <ThemedText style={[styles.icon]}>
          {isDone ? <MaterialIcons name="done" size={17} color="green" /> : showDelete ? <EvilIcons name="check" size={24} color="green" /> : <Entypo name="circle" size={17} color="red" />}
        </ThemedText>

        <ThemedText style={[styles.title, isDone && styles.doneText]}>
          {title}
        </ThemedText>
        {showDelete && (
          <Pressable
            onPress={onDelete}
            style={styles.deleteButton}
          >
            <ThemedText style={styles.deleteText}>
              Sil
            </ThemedText>
          </Pressable>
        )}
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Spacing.three,
    borderRadius: Spacing.four,
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.two,
    marginBottom: Spacing.two,
  },
  deleteButton: {
    backgroundColor: "#ff4444",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
  },

  deleteText: {
    color: "#fff",
    fontWeight: "600",
  },
  icon: {
    fontSize: 20,
  },

  title: {
    fontSize: 17,
    lineHeight: 17,
    flex: 1,
  },

  doneText: {
    opacity: 0.5,
    textDecorationLine: "line-through",
  },

  pressed: {
    opacity: 0.75,
  },
});