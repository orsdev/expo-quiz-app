import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { IOptions, IQuestions } from '../interfaces/questions.interface';
import questions from '../assets/data/imageMulatipleChoiceQuestions';
import { useState } from 'react';
import { Card, ProgressBar } from '../components/ui';
import { Button } from '../components/ui/Button';
import { useNavigation } from '@react-navigation/native';


export const TotalLives = 5;


const HomeScreen = () => {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState<IOptions | null>(null);
    const [current, setCurrent] = useState(0)
    const [selectedQuestion, setSelectedQuestion] = useState<IQuestions | null>(questions[current]);
    const [lives, setLives] = useState(TotalLives)

    const handleCheck = () => {
        if (selectedOption?.correct) {
            Alert.alert('YAY!', 'You got it right', [
                {
                    text: "Go to next question",
                    onPress: () => {
                        if (current < questions.length - 1) {
                            setCurrent((prev => prev + 1))
                            setSelectedQuestion(questions[current + 1]);
                            setSelectedOption(null)
                        } else {
                            Alert.alert('Open ended', "Are you ready to take the next quiz", [
                                {
                                    text: "Cancel",
                                    style: "default",
                                    onPress() {
                                        setCurrent(0)
                                        setSelectedQuestion(questions[0]);
                                        setSelectedOption(null)
                                    }
                                },
                                {
                                    text: "Continue",
                                    style: "default",
                                    onPress() {
                                        setCurrent(0)
                                        setSelectedQuestion(questions[0]);
                                        setSelectedOption(null)
                                        navigation.navigate('OpenEnded' as never)
                                    }
                                }
                            ])

                        }
                    },
                    style: 'default'
                }
            ]);
        } else {
            if (lives <= 1) {
                Alert.alert('OOPS!', 'Game Over', [
                    {
                        text: 'Start again',
                        style: 'cancel',
                        onPress() {
                            setCurrent(0)
                            setLives(TotalLives)
                            setSelectedQuestion(questions[0]);
                        }
                    }
                ])
            } else {
                setLives(prev => prev - 1)
                Alert.alert('OOPS!', 'Please try again', [
                    {
                        text: 'Close',
                        style: 'destructive'
                    }
                ])
            }
        }
    }

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <View>
                    <ProgressBar progress={current} total={questions.length} lives={lives} />
                    <Text style={styles.heading}>{selectedQuestion?.question}</Text>
                </View>
                <View style={styles.cardContainer}>

                    {(selectedQuestion?.options as IOptions[])?.map(item => (
                        <Card
                            key={item.id}
                            {...item}
                            isSelected={!!selectedOption && selectedOption?.id == item.id}
                            onClick={() => {
                                setSelectedOption(item)
                            }}
                        />
                    ))}
                </View>
                <View style={styles.separator} />
                <View style={[styles.footer, !selectedOption ? styles.disabledFooter : {}]}>
                    <Button
                        title="Check"
                        isDisabled={!selectedOption}
                        onClick={handleCheck}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20
    },
    heading: {
        fontWeight: "600",
        fontSize: 19,
        marginTop: 10
    },
    cardContainer: {
        marginTop: 10,
        justifyContent: 'space-between',
        alignContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        width: '100%'
    },
    separator: {
        marginVertical: 10,
    },
    footer: {
        backgroundColor: '#DAF7A6',
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 20,
        height: 70
    },
    disabledFooter: {
        backgroundColor: '#ccc'
    }
});

export default HomeScreen;