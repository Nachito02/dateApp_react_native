import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

interface PatientsProps {
  item: {
    id: number;
    name: string;
    owner: string;
    email: string;
    phone: string;
    symptoms: string;
    date: string;
  };
  setVisibleModal: (value: boolean) => void;
  editPatient: (id: number) => void;
}

interface DateTimeFormatOptions {
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day?: 'numeric' | '2-digit';
  weekday?: 'long' | 'short' | 'narrow';
}

const Patients: React.FC<PatientsProps> = ({
  item,
  setVisibleModal,
  editPatient,
}) => {
  const {name, date, owner, id} = item;

  const dateFormat = (date: string) => {
    const newDate = new Date(date);

    const options: DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return newDate.toLocaleDateString('es-ES', options);
  };

  return (
    <View style={stlyes.container}>
      <Text style={stlyes.label}>Paciente:</Text>
      <Text style={stlyes.text}>{owner}</Text>
      <Text style={stlyes.date}>{dateFormat(date)}</Text>

      <View style={stlyes.containerButton}>
        <Pressable
          onLongPress={() => {
            setVisibleModal(true);
            editPatient(id);
          }}
          style={[stlyes.btn, stlyes.editBtn]}>
          <Text style={stlyes.btnText}>Editar</Text>
        </Pressable>

        <Pressable style={[stlyes.btn, stlyes.deleteBtn]}>
          <Text style={stlyes.btnText}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const stlyes = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomColor: '#94a3b8',
    borderBottomWidth: 2,
  },

  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
  },

  text: {
    color: '#6D28D9',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },

  date: {
    color: '#374151',
  },

  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

  editBtn: {
    backgroundColor: '#f59e0b',
  },

  deleteBtn: {
    backgroundColor: '#ef4444',
  },

  btnText: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
    color: '#fff',
  },
});

export default Patients;
