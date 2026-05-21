import React, { useState } from "react";
import {
    Pressable,
    StyleSheet,
    TextInput
} from "react-native";

import { Spacing } from "@/constants/theme";
import AntDesign from '@expo/vector-icons/AntDesign';
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";
type AddTaskInputProps = {
    value: string;
    onChangeText: (text: string) => void;
    onAdd: () => void;
};

export default function AddTaskInput({
    value,
    onChangeText,
    onAdd,
}: AddTaskInputProps) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <ThemedView type="backgroundElement" style={styles.wrapper}>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder="Tapşırığını daxil et"
                placeholderTextColor="#999"
                returnKeyType="done"
                onSubmitEditing={onAdd}
                style={[
                    styles.input,
                    isFocused && styles.inputFocused,
                ]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />

            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed,
                ]}
                onPress={onAdd}
            >
                <ThemedText style={styles.buttonText}><AntDesign name="plus" size={24} color="white" /></ThemedText>
            </Pressable>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: Spacing.two,
        padding: Spacing.two,
        borderRadius: 22,
        marginBottom: Spacing.four,
    },

    input: {
        flex: 1,
        fontSize: 16,
        paddingHorizontal: Spacing.three,
        paddingVertical: Spacing.two,
    },
    inputFocused: {
        borderWidth: 0,
        outlineStyle: "none",
    } as any,
    button: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: "#111",
        justifyContent: "center",
        alignItems: "center",
    },

    buttonPressed: {
        opacity: 0.8,
        transform: [{ scale: 0.96 }],
    },

    buttonText: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "300",
        marginTop: -2,
    },
});