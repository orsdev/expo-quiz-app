import { StatusBar } from 'expo-status-bar';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card } from './components/ui';
import Constants from 'expo-constants';
import { IOptions, IQuestions } from './interfaces/questions.interface';
import question from './assets/data/oneQuestionWithOption';
import questions from './assets/data/imageMulatipleChoiceQuestions';
import { useState } from 'react';
import { Button } from './components/ui/Button';

function App() {
  const [selectedOption, setSelectedOption] = useState<IOptions | null>(null);
  const [current, setCurrent] = useState(0)
  const [selectedQuestion, setSelectedQuestion] = useState<IQuestions | null>(questions[current])

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
            }else {
              Alert.alert('You won....')
              setCurrent(0)
              setSelectedQuestion(questions[0]);
              setSelectedOption(null)
            }
          },
          style: 'default'
        }
      ]);
    } else {
      Alert.alert('OOPS!', 'Please try again', [
        {
          text: 'Close',
          style: 'destructive'
        }
      ])
    }
  }

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.heading}>{selectedQuestion?.question}</Text>
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
    paddingTop: 30,
    paddingHorizontal: 20
  },
  heading: {
    fontWeight: "600",
    fontSize: 19,
  },
  cardContainer: {
    marginTop: 20,
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
    height: 80
  },
  disabledFooter: {
    backgroundColor: '#ccc'
  }
});


// Default to rendering your app
let AppEntryPoint = App;

// Render Storybook if storybookEnabled is true
if ((Constants.expoConfig as any)?.extra.storybookEnabled == true) {
  AppEntryPoint = require('./.storybook').default;
}

export default AppEntryPoint