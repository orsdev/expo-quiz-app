import { Image, StyleSheet, Text, View } from "react-native"

interface ICard {
    title: string;
    imageUri: string
}

export const Card = ({ title, imageUri }: ICard) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: imageUri
                }}
                resizeMode="contain"
            />
            <Text style={[styles.defaultTitle]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderWidth: 1,
        elevation: 2,
        shadowColor: '#ccc',
        shadowOffset: {width: 1, height: 2},
        shadowRadius: 2,
        shadowOpacity: .5,
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 10,
        height: '48%',
        width: '48%'
    },
    image: {
        width: 120,
        height: 220
    },
    defaultTitle: {
        fontSize: 16,
    }

})