import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import logoImg from "../../assets/logo.png";
import api from "../../services/api";

export default function Detail(){
    const navigation = useNavigation();

    const [incidents, setIncidents] = useState([]);
    const [totalIncidents, setTotalIncidents] = useState(0);

    const [pageIndex, setPageIndex] = useState(1);
    const [loading, setLoading] = useState(false);

    async function loadIncidents(){
        if(loading) return;
        if(totalIncidents > 0 && incidents.length === totalIncidents) return;
        
        setLoading(true);

        const response = await api.get("incidents", { params: { page: pageIndex }});

        setIncidents([...incidents, ...response.data]);
        setTotalIncidents(response.headers["x-total-count"]);

        setPageIndex(pageIndex + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents()
    }, [])

    function handleNavigateToDetail(incident){
        navigation.navigate("Detail", { incident });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style = {styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{totalIncidents} casos.</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList style={styles.incidentList}
                data={incidents}
                keyExtractor={(incident) => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents} // when scroll reaches the end, loading more items
                onEndReachedThreshold={0.2} // set scrool end to 20%, for loading new items
                renderItem={({ item: incident }) => {
                    return (
                        <View style={styles.incident}>
                            <Text style={styles.incidentProperty}>ONG</Text>
                            <Text style={styles.incidentValue}>{ incident.name }</Text>

                            <Text style={styles.incidentProperty}>CASO</Text>
                            <Text style={styles.incidentValue}>{ incident.title }</Text>

                            <Text style={styles.incidentProperty}>VALOR</Text>
                            <Text style={styles.incidentValue}>{ 
                                Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })
                                    .format(incident.value)
                            }</Text>

                            <TouchableOpacity
                                style={styles.detailsButton}
                                onPress={() => handleNavigateToDetail(incident)}
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
