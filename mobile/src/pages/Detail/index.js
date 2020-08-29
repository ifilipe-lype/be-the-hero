import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import * as MailComposer from "expo-mail-composer";

import logoImg from "../../assets/logo.png";
import styles from "./styles";

export default function Detail(){
    const navigation = useNavigation();
    const message = `Olá, ONU estou entrando em contato pois quero ajudar no caso "nome do caso aqui" com o valor de valor aqui`

    function handleNavigateBack(){
        navigation.goBack()
    }

    function handleSendEmail(){
        // open default mail app with pre-filled info
        MailComposer.composeAsync({
            subject: `Héroi do caso: nome do heroi aqui`, // what the email is about
            recipients: ["filipe7lype@gmail.com"], // author
            body: message // content
        });
    }

    function handleContactWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=244993546937&text=${message}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity
                    style={styles.gotBackButton}
                    onPress={handleNavigateBack}
                >
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG</Text>
                <Text style={styles.incidentValue}>ONU</Text>

                <Text style={styles.incidentProperty}>CASO</Text>
                <Text style={styles.incidentValue}>Galinha atropelada</Text>

                <Text style={styles.incidentProperty}>VALOR</Text>
                <Text style={styles.incidentValue}>120.00 RS</Text>
            </View>
            
            <View style={styles.contentBox}>
                <Text style={styles.heroTitle}>Salve o dia.</Text>
                <Text style={styles.heroTitle}>Seja o heroi desse caso</Text>
                <Text style={styles.heroDescription}>Entre em contato: </Text>
                
                <View style={styles.actions}>
                    <TouchableOpacity
                        style={styles.action}
                        onPress={handleContactWhatsapp}
                    >
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.action}
                        onPress={handleSendEmail}
                    >
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
