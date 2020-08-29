import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16,
        marginTop: 48
    },
    incidentProperty: {
        fontSize: 14,
        color: "#41414d",
        fontWeight: "bold",
        marginTop: 24,
    },
    incidentValue: {
        fontSize: 15,
        marginTop: 8,
        color: "#737380"
    },

    contentBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16,
    },

    heroTitle: {
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 30,
        color: "#13131a"
    },
    heroDescription: {
        fontSize: 15,
        color: "#737380",
        marginTop: 16
    },

    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 16
    },
    action: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: "48%",
        backgroundColor: "#E02041",
        borderRadius: 8
    },
    actionText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#FFF"
    }
});
