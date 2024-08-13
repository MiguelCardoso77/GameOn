import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { firestore } from '@/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

export default function Edit() {
    const navigation = useNavigation();
    const [name, setName] = useState('Miguel Cardoso');
    const [email, setEmail] = useState('miguel@example.com');
    const [phoneCode, setPhoneCode] = useState('+351');
    const [phone, setPhone] = useState('123456789');
    const [gender, setGender] = useState('Masculino');
    const [birthDate, setBirthDate] = useState('01/01/1990');
    const [description, setDescription] = useState('Descrição do perfil');
    const [country, setCountry] = useState('Portugal');
    const [image, setImage] = useState(require('../assets/images/profile.png'));

    const handleSave = async () => {
        try {
            navigation.goBack();

            // Definir o documento de usuário com o ID do usuário (pode ser o email ou outro ID único)
            await setDoc(doc(firestore, "users", email), {
                name,
                email,
                phoneCode,
                phone,
                gender,
                birthDate,
                description,
                country,
                image: 'profile_image_url_placeholder',
            });

            console.log('Profile updated:', { name, email });

        } catch (error) {
            console.error("Error saving user data: ", error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Edit Profile</Text>
            </View>
            <View style={styles.profileImageContainer}>
                <Image source={image} style={styles.profileImage} />
                <TouchableOpacity style={styles.changeImageButton}>
                    <MaterialCommunityIcons name="camera" size={24} color="#007BFF" />
                </TouchableOpacity>
            </View>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Nome e Apelido"
            />
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="email-address"
            />
            <View style={styles.inputRow}>
                <TouchableOpacity
                    style={[styles.input, styles.inputHalf]}
                    onPress={() => (true)}
                >
                    <Text style={styles.text}>{phoneCode}</Text>
                </TouchableOpacity>
                <TextInput
                    style={[styles.input, styles.inputHalf]}
                    value={phone}
                    onChangeText={setPhone}
                    placeholder="Telefone"
                />
            </View>
            <TextInput
                style={styles.input}
                value={gender}
                onChangeText={setGender}
                placeholder="Género"
            />
            <TextInput
                style={styles.input}
                value={birthDate}
                onChangeText={setBirthDate}
                placeholder="Data de Nascimento"
            />
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={setDescription}
                placeholder="Descrição"
                multiline
                numberOfLines={4}
            />
            <TextInput
                style={styles.input}
                value={country}
                onChangeText={setCountry}
                placeholder="País de Residência"
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    header: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    profileImageContainer: {
        alignItems: 'center',
        marginBottom: 20,
        position: 'relative',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#007BFF',
        marginBottom: 10,
    },
    changeImageButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    inputHalf: {
        flex: 1,
        marginRight: 10,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
    saveButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
});