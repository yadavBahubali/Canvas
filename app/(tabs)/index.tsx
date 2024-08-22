import { StyleSheet ,View} from 'react-native';
 
import App from '@/src';
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      
      
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <App />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
