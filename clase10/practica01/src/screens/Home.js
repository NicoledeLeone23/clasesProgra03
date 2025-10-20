import React, {Component} from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import DynamicForm from "../components/DynamicForm";

function Home (){
    

    return(
                <View>
                    <Text style={styles.titulo}>Home</Text>
                    <DynamicForm />
                </View>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
    },
})

export default Home;