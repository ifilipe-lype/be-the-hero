import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import * as MailComposer from "expo-mail-composer";

import logoImg from "../../assets/logo.png";
import styles from "./styles";

export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();
    const { incident } = route.params;

    const message = `Olá, ${incident.name} estou entrando em contato pois quero ajudar no caso "${incident.title}" com o valor de ${
        Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })
            .format(incident.value)
    }`;


    function handleNavigateBack(){
        navigation.goBack()
    }

    function handleSendEmail(){
        // open default mail app with pre-filled info
        MailComposer.composeAsync({
            subject: `Héroi do caso: ${incident.name}`, // what the email is about
            recipients: [incident.email], // author
            body: message // content
        });
    }

    function handleContactWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
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
                <Text style={styles.incidentProperty}>ONG</Text>
                <Text style={styles.incidentValue}>
                    { incident.name } de { incident.city }/{ incident.uf }
                </Text>

                <Text style={styles.incidentProperty}>CASO</Text>
                <Text style={styles.incidentValue}>{ incident.title }</Text>

                <Text style={styles.incidentProperty}>VALOR</Text>
                <Text style={styles.incidentValue}>{ 
                    Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })
                        .format(incident.value)
                }</Text>
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
