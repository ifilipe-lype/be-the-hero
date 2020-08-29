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
    headerText: {
        fontSize: 15,
        color: "#717180"
    },
    headerTextBold: {
        fontWeight: "bold"
    },
    title: {
        fontSize: 30,
        color: "#13131a",
        marginTop: 40,
        marginBottom: 16,
        fontWeight: "bold"
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: "#737380"
    }
});
