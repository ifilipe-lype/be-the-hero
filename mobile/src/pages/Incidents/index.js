import React from "react";
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import logoImg from "../../assets/logo.png";

export default function Detail(){
    const navigation = useNavigation();

    function handleNavigateToDetail(){
        navigation.navigate("Detail");
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style = {styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos.</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList style={styles.incidentList}
                data={[1,2,3,4,5]}
                keyExtractor={(incident) => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => {
                    return (
                        <View style={styles.incident}>
                            <Text style={styles.incidentProperty}>ONG</Text>
                            <Text style={styles.incidentValue}>ONU</Text>

                            <Text style={styles.incidentProperty}>CASO</Text>
                            <Text style={styles.incidentValue}>Galinha atropelada</Text>

                            <Text style={styles.incidentProperty}>VALOR</Text>
                            <Text style={styles.incidentValue}>120.00 RS</Text>

                            <TouchableOpacity
                                style={styles.detailsButton}
                                onPress={handleNavigateToDetail}
                            >
                                <Text style={styles.detailsButtonText}>
                                    ver mais detalhes
                                </Text>
                                <Feather name="arrow-right" size={16} color = "#E02041" />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}
