import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const userName = 'Miguel Cardoso';

const notifications = [
    { id: '1', message: 'New message from Sarah', time: '5 mins ago' },
    { id: '2', message: 'Your profile was updated', time: '1 hour ago' },
    { id: '3', message: 'New team member joined', time: '2 hours ago' },
];

const statistics = [
    { id: '1', label: 'Matches Played', value: '25' },
    { id: '2', label: 'Goals Scored', value: '15' },
    { id: '3', label: 'Assists', value: '8' },
];

export default function HomeScreen() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome</Text>
                <MaterialCommunityIcons name="account-circle" size={40} color="#007BFF" />
            </View>

            {/* Container do perfil */}
            <View style={styles.profileContainer}>
                <Image
                    source={require('../assets/images/profile.png')}
                    style={styles.profileImage}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.greetingText}>Hello,</Text>
                    <Text style={styles.nameText}>{userName}</Text>
                </View>
            </View>

            {/* Seção de Notificações */}
            <View style={styles.notificationsContainer}>
                <Text style={styles.sectionTitle}>Notifications</Text>
                <FlatList
                    data={notifications}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.notificationItem}>
                            <Text style={styles.notificationMessage}>{item.message}</Text>
                            <Text style={styles.notificationTime}>{item.time}</Text>
                        </View>
                    )}
                />
            </View>

            {/* Seção de Estatísticas */}
            <View style={styles.statisticsContainer}>
                <Text style={styles.sectionTitle}>Statistics</Text>
                <View style={styles.statisticsList}>
                    {statistics.map(stat => (
                        <View key={stat.id} style={styles.statItem}>
                            <Text style={styles.statLabel}>{stat.label}</Text>
                            <Text style={styles.statValue}>{stat.value}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Menu de Navegação */}
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => router.push('/profile')}
                >
                    <MaterialCommunityIcons name="home" size={32} color="#ffffff" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => router.push('/team')}
                >
                    <MaterialCommunityIcons name="account-group" size={32} color="#ffffff" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => router.push('/fields')}
                >
                    <MaterialCommunityIcons name="soccer" size={32} color="#ffffff" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => router.push('/calendar')}
                >
                    <MaterialCommunityIcons name="calendar" size={32} color="#ffffff" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => router.push('/profile')}
                >
                    <MaterialCommunityIcons name="account" size={32} color="#ffffff" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    contentContainer: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        width: '100%',
        maxWidth: 400,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20,
    },
    textContainer: {
        justifyContent: 'center',
    },
    greetingText: {
        fontSize: 20,
        color: '#555',
    },
    nameText: {
        fontSize: 24,
        color: '#222',
        fontWeight: '700',
    },
    notificationsContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 15,
        marginBottom: 20,
        width: '100%',
        maxWidth: 400,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    notificationItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 10,
    },
    notificationMessage: {
        fontSize: 16,
        color: '#555',
    },
    notificationTime: {
        fontSize: 12,
        color: '#888',
    },
    statisticsContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 15,
        marginBottom: 20,
        width: '100%',
        maxWidth: 400,
    },
    statisticsList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statItem: {
        alignItems: 'center',
    },
    statLabel: {
        fontSize: 14,
        color: '#555',
    },
    statValue: {
        fontSize: 18,
        color: '#222',
        fontWeight: '700',
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#0e0a18',
        paddingVertical: 12,
    },
    menuButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 10,
    },
});
