
import {SafeAreaView, Text, StyleSheet, Modal, Pressable} from 'react-native';

function App() {
  const newDateHandler = () => {
    console.log('Nueva Cita');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Administrador de citas <Text style={styles.titleBold}>Veterinaria</Text>
      </Text>

      <Pressable style={styles.btnNewDate} onPressOut={newDateHandler}>
        <Text style={styles.btnTextNewDate}>Nueva Cita</Text>
      </Pressable>

      <Modal animationType="slide" visible={false}>
        <Text>Desde Modal</Text>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  titleBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },

  btnNewDate: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 30,
    borderRadius: 10,
  },

  btnTextNewDate: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});

export default App;
