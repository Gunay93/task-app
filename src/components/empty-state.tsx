import { Spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "./themed-text";
export default function EmptyState() {
    return (
        <View style={styles.container}>
            <Ionicons
                name="sparkles-outline"
                size={72}
                color="#bbb"
            />

            <ThemedText style={styles.title}>
                Hələ tapşırıq yoxdur
            </ThemedText>

            <ThemedText
                themeColor="textSecondary"
                style={styles.subtitle}
            >
                İlk tapşırığını əlavə et <Ionicons name="sparkles-outline" size={16} color="#c3c300" />
            </ThemedText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 120,
        paddingHorizontal: Spacing.four,
    },

    title: {
        marginTop: Spacing.three,
        fontSize: 22,
        fontWeight: "700",
    },

    subtitle: {
        marginTop: Spacing.one,
        fontSize: 16,
        lineHeight:16,
        textAlign: "center",
    },
});