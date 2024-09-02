import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card } from './components/ui';
import allQuestions from './assets/data/allQuestions';
import Constants from 'expo-constants';
import { IQuestions } from './interfaces/questions.interface';

function App() {

  const currentQuestion = allQuestions[1].options as IQuestions[];

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.heading}>Which of these is "the glass"?</Text>
        <View style={styles.cardContainer} >
          {currentQuestion?.map(item => (
            <Card key={item.id} title={item.text} imageUri={item.image} />
          ))}
        </View>
        <View style={styles.footer}>
          <Text> Footer </Text>
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
  footer: {
    backgroundColor: 'green',
    height: 100
  }
});


// Default to rendering your app
let AppEntryPoint = App;

// Render Storybook if storybookEnabled is true
if ((Constants.expoConfig as any)?.extra.storybookEnabled == true) {
  AppEntryPoint = require('./.storybook').default;
}

export default AppEntryPoint