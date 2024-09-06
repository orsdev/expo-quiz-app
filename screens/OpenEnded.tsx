import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native"
// import MaskotImage from '../assets/images/mascot.png';
import openQuestion from '../assets/data/openEndedQuestions';
import { useState } from "react";
import { Button } from "../components/ui/Button";
import { useForm, Controller } from "react-hook-form"
import { IOpenEnded } from "../interfaces/questions.interface";
import { useNavigation } from "@react-navigation/native";
import { ProgressBar } from "../components/ui";
import { TotalLives } from "./Home";

const OpenEndedScreen = () => {
    const navigation = useNavigation();
    const [lives, setLives] = useState(TotalLives)
    const [current, setCurrent] = useState(0)
    const [question, setQuestion] = useState<IOpenEnded>(openQuestion[current]);

    const {
        control,
        watch,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            answer: ''
        },
    });


    const handleCheck = (value: Pick<IOpenEnded, 'answer'>) => {
        const { answer } = value;
        const formatEnteredAnswer = answer.toLowerCase().trim();
        const formatQuestionAnswer = question.answer.toLowerCase().trim();

        const isSameAnswer = formatEnteredAnswer === formatQuestionAnswer;

        if (isSameAnswer) {
            Alert.alert('YAY!', 'You got it right', [
                {
                    text: "Go to next question",
                    onPress: () => {
                        reset(); // Reset text input value
                        if (current < openQuestion.length - 1) {
                            setCurrent((prev => prev + 1))
                            setQuestion(openQuestion[current + 1]);
                        } else {
                            Alert.alert('You won....')
                            setCurrent(0)
                            // navigation.navigate('OpenEnded' as never)
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
                            setQuestion(openQuestion[0]);
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
    };

    const enteredAnswer = watch('answer') || '';


    return (
        <View style={styles.root}>
            <ProgressBar progress={current} total={openQuestion.length} lives={lives} />
            <Text style={styles.heading}>Translate this sentence</Text>
            <View style={styles.row}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/mascot.png')}
                // source={MaskotImage}
                // resizeMode="contain"
                />
                <View style={styles.sentenceContainer}>
                    <Text style={styles.sentence}>{question.text}</Text>
                </View>
            </View>
            <Controller
                control={control}
                name="answer"
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <>
                        <TextInput
                            style={styles.multiLineInput}
                            multiline={true}
                            autoCapitalize="none"
                            autoComplete="off"
                            autoCorrect={false}
                            placeholder="Type in english..."
                            keyboardType="default"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        {errors.answer && <Text>This is required.</Text>}
                    </>
                )}
            />

            <View style={[styles.footer, !enteredAnswer ? styles.disabledFooter : {}]}>
                <Button
                    title="Check"
                    isDisabled={!enteredAnswer}
                    onClick={handleSubmit(handleCheck)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    image: {
        width: "30%",
        aspectRatio: 3 / 4
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    multiLineInput: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        minHeight: 100,
        flex: 1,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#ccc',
        backgroundColor: "#ebebeb"
    },
    heading: {
        fontWeight: "600",
        fontSize: 20,
        marginTop: 10
    },
    sentence: {
        fontSize: 14,
    },
    sentenceContainer: {

    },
    footer: {
        backgroundColor: '#DAF7A6',
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 20,
        height: 80,
        marginTop: 10,
    },
    disabledFooter: {
        backgroundColor: '#ccc'
    }
});

export default OpenEndedScreen;