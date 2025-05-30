import React, {useState} from 'react';
import {
  StyleSheet,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  View,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

interface FormProps {
  visibleModal: boolean;
  setVisibleModal: (value: boolean) => void;
  setPatients: (value: any) => void;
  patients: any;
}

const Form: React.FC<FormProps> = ({
  visibleModal,
  setVisibleModal,
  setPatients,
  patients,
}) => {
  const [owner, setOwner] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [date, setDate] = useState(new Date());

  const handleDate = () => {
    if ([owner, name, email, symptoms, date].includes('')) {
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios',
        // [{
        //     text:'Aceptar'
        // }]
      );
      return;
    }

    const newPatient = {
      id: Date.now(),
      name,
      owner,
      email,
      phone,
      date,
      symptoms,
    };

    setPatients([...patients, newPatient]);
    setVisibleModal(!visibleModal);
    setName('');
    setOwner('');
    setEmail('');
    setPhone('');
    setSymptoms('');
    setDate(new Date());
    
  };

  return (
    <Modal animationType="slide" visible={visibleModal}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>
            Nueva <Text style={styles.titleBold}>Cita</Text>
          </Text>

          <Pressable
            onLongPress={() => setVisibleModal(!visibleModal)}
            style={styles.btnCancel}>
            <Text style={styles.btnCancelText}>X Cancelar</Text>
          </Pressable>

          <View style={styles.camp}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Paciente"
              placeholderTextColor={'#666'}
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.camp}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Propietario"
              placeholderTextColor={'#666'}
              value={owner}
              onChangeText={setOwner}
            />
          </View>

          <View style={styles.camp}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              keyboardType="email-address"
              style={styles.input}
              placeholder="Email Propietario"
              placeholderTextColor={'#666'}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.camp}>
            <Text style={styles.label}>Telefono Paciente</Text>
            <TextInput
              keyboardType="number-pad"
              style={styles.input}
              placeholder="Teléfono Paciente"
              placeholderTextColor={'#666'}
              value={phone}
              onChangeText={setPhone}
              maxLength={10}
            />
          </View>

          <View style={styles.camp}>
            <Text style={styles.label}>Fecha Alta</Text>
            <View style={styles.dateContainer}>
              <DatePicker
                date={date}
                locale="es"
                mode="datetime"
                onDateChange={dateSelected => setDate(dateSelected)}
              />
            </View>
          </View>

          <View style={styles.camp}>
            <Text style={styles.label}>Sintomas Paciente</Text>
            <TextInput
              style={[styles.input, styles.syntomsInput]}
              multiline={true}
              textAlignVertical="top"
              numberOfLines={4}
              placeholder="Sintomas Propietario"
              placeholderTextColor={'#666'}
              value={symptoms}
              onChangeText={setSymptoms}
            />
          </View>

          <Pressable onPress={handleDate} style={styles.btnNewDate}>
            <Text style={styles.btnTextNewDate}> Agregar Paciente</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'center',
    marginTop: 30,
    color: '#fff',
  },

  titleBold: {
    fontWeight: '900',
  },
  camp: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#fff',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },

  syntomsInput: {
    height: 100,
  },

  dateContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  btnCancel: {
    marginVertical: 30,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 15,
  },
  btnCancelText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },

  btnNewDate: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },

  btnTextNewDate: {
    textAlign: 'center',
    color: '#5827A4',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

export default Form;
