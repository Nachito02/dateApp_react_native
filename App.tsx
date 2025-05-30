import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import Form from './src/components/Form';
import Patients from './src/components/Patients';
function App() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [patients, setPatients] = useState([]);
  const [patient,setPatient] = useState([]);

  const editPatient = (id: number) => {
    console.log('editando');

    const patientToEdit = patients.filter((item: any) => item.id === id);

    console.log(patientToEdit);

    setPatient(patientToEdit[0]);
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Administrador de citas <Text style={styles.titleBold}>Veterinaria</Text>
      </Text>

      <Pressable
        style={styles.btnNewDate}
        onPress={() => setVisibleModal(!visibleModal)}>
        <Text style={styles.btnTextNewDate}>Nueva Cita</Text>
      </Pressable>

      {patients.length === 0 ? (
        <Text style={styles.noPatient}>No hay pacientes aún</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={patients}
          keyExtractor={(item: any) => item.id}
          renderItem={({item}: any) => {
            return <Patients item={item} setVisibleModal={setVisibleModal} editPatient={editPatient} />;
          }}
        />
      )}

      <Form
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
        patients={patients}
        setPatients={setPatients}
      />
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
  noPatient: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },

  list: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});

export default App;
