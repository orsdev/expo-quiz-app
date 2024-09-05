import { Pressable, StyleSheet, Text } from "react-native"

interface IButton {
    title: String;
    onClick?(): void;
    isDisabled?: boolean;
};

export const Button = ({ title, isDisabled, onClick }: IButton) => {
    return (
        <Pressable
            style={[styles.button, isDisabled ? styles.buttonDisabled : {}]}
            onPress={onClick}
            disabled={isDisabled}
        >
            <Text style={[styles.text]}>{title}</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#008000",
        borderRadius: 8,
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    buttonDisabled: {
        backgroundColor: "grey",
        opacity: .5
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        textDecorationStyle: "solid",
        textDecorationColor: "#fff",
        fontWeight: 600,
        textDecorationLine: "underline"
    }
})