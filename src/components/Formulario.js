import React from "react";
import {Modal, Text, Button, View, TextInput, ScrollView, Pressable} from 'react-native';
import DatePicker from "react-native-date-picker";

const Formulario = ({modalVisible}) => {
    const [paciente, setPaciente] = useState('');
    const [propietario, setPropietario] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [fecha, setFecha] = useState(new Date());

    return (
        <Modal animationType= 'slide' visible={modalVisible}>
            <View style={styles.contenido}>
                <ScrollView>
                <Text style={styles.titulo}>Nueva {' '}
                        <Text style={styles.tituloBold}>Cita</Text>
                    </Text>
                    <Pressable  
                        style={styles.btnCancelar}
                        onLongPress={()=>setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
                    </Pressable>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Mascota:</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Nombre Mascota"
                        placeholderTextColor={'#666'}
                        value={paciente}
                        onChangeText={setPaciente}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Propietario:</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Nombre Propietario"
                        placeholderTextColor={'#666'}
                        value={propietario}
                        onChangeText={setPropietario}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Email del Propietario:</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Email del Propietario"
                        placeholderTextColor={'#666'}
                        keyboardType='email-address'
                        value={email}
                        onChangeText={setEmail}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Teléfono del Propietario:</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Teléfono del Propietario"
                        placeholderTextColor={'#666'}
                        keyboardType='number-pad'
                        value={telefono}
                        onChangeText={setTelefono}
                        maxLength={10}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha Alta:</Text>
                        <View style={styles.fechaContenedor}>
                            <DatePicker
                            date={fecha}
                            onDateChange={setFecha}
                            mode='date'
                            locale='es-ES'
                            />
                        </View>
                        
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Sintomas:</Text>
                        <TextInput
                        style={[styles.input, styles.sintomasInput]}
                        placeholder="Sintomas"
                        placeholderTextColor={'#666'}
                        keyboardType="number-pad"
                        value={sintomas}
                        onChangeText={setSintomas}
                        multiline={true}
                        numberOfLines={4}
                        />
                    </View>
                    <Pressable>
                        <Text style={styles.btnNuevaCitaTexto}>Agregar Paciente</Text>
                    </Pressable>
                </ScrollView>
            </View>
        </Modal>
    )
} 

const styles = StyleSheet.create({
    contenido: {
        flex: 1,
        backgroundColor: '#6D28D9',
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        color: '#fff',
        textAling: 'center',
        marginTop: 30,
    },
    tituloBold: {
        fontWeight: '900',

    },
    campo: {
        marginVertical: 10,
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
    sintomasInput:{
        height: 100, 
    },
    fechaContenedor:{
        backgroundColor: 'fff',
        borderRadius: 10,
    },
    btnCancelarTexto:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '900',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    btnNuevaCitaTexto:{
        textAlign: 'center',
        color: '#5827A4',
        textTransform: 'uppercase',
        fontWeight: '900',
        fontSize: 16,
    }
});

export default Formulario
