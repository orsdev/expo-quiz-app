import { Image, Pressable, StyleSheet, Text } from "react-native"
interface ICard {
    id: string;
    text: string;
    image: string
    isSelected: boolean;
    onClick?(): void;
}

export const Card = ({ onClick, ...rest }: ICard) => {
    const { image, text, isSelected } = rest;

    return (
        <Pressable style={[styles.container,
        isSelected ? styles.selectedContainer :
            styles.defaultContainer]}
            onPress={onClick}>
            <Image
                style={styles.image}
                source={{
                    uri: image
                }}
                resizeMode="contain"
            />
            <Text style={[styles.defaultTitle]}>{text?.toUpperCase()}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 2,
        shadowOpacity: .5,
        borderWidth: 1,
        elevation: 2,
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 10,
        height: '48%',
        width: '48%'
    },
    defaultContainer: {
        borderColor: '#ccc',
        backgroundColor: '#fff',
        shadowColor: '#ccc',
    },
    selectedContainer: {
        borderColor: '#81D5FE',
        backgroundColor: '#DDF4FE',
        shadowColor: '#DDF4FE',
    },
    image: {
        width: 120,
        height: 220
    },
    defaultTitle: {
        fontSize: 16,
    }

})