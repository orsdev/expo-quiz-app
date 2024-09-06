import { View, StyleSheet, Image, Text } from 'react-native';

type Progress = {
    progress: number;
    total: number;
    lives?: number
};

const getProgressValue = (progress: number, total: number) => {
    return (progress / total) * 100
}

export const ProgressBar = ({ progress = 0, total, lives }: Progress) => {
    return (
        <View style={styles.root}>
            <View style={styles.bar}>
            <View style={[styles.pill, {
                width: `${getProgressValue(progress, total)}%`
            }]} />
                            
                            </View>
            <Image    
            source={require('../../assets/images/heart.png')}
            style={styles.image}
            />
            <Text>{lives}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        height: 25,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5,
    },
    bar: {
        width: '90%',
        borderRadius: 20,
        backgroundColor: "#ccc",
    },
    pill: {
        borderRadius: 20,
        backgroundColor: 'orange',
        height: '100%'
    },
    image: {
        width: 20,
        height: 20,
        objectFit: 'contain'
    }
})