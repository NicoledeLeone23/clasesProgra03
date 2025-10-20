import React, {Component} from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { Pressable } from "react-native";

function Profile (props){
    

    return(
                <View>
                    <Text style={styles.titulo} >Profile</Text>
                    <Pressable onPress={ ()=> props.navigation.navigate('Register')} style={styles.boton}>
                        <Text>Desloguearse</Text>
                    </Pressable>
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
    boton: {
        backgroundColor: "orange",
        padding: 10,
        margin: 10,
        width: 250,
        marginLeft: 20,
        textAlign: 'center',
        borderRadius: 5,
        alignItems: 'center',
        
    },
})

export default Profile;