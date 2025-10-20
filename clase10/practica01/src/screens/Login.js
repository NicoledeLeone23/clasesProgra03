import React, {Component} from "react";
import { View, Text, Image, StyleSheet, FlatList, TextInput } from "react-native";
import { Pressable } from "react-native";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        }} 
    
    render (){
        return(
                <View>
                    <Text style={styles.titulo} >Register</Text>
                        <Text>Login</Text>
                        <TextInput style={styles.field} 
                            keyboardType='email-address'
                            placeholder='email'
                            onChangeText={ text => this.setState({email:text}) }
                            value={this.state.email} />
                        <TextInput style={styles.field} 
                            keyboardType='default'
                            placeholder='password'
                            secureTextEntry={true} 
                            onChangeText={ text => this.setState({password:text}) }
                            value={this.state.password}/> 
                        <Pressable onPress={() => this.onSubmit()} style={styles.logi}>
                            <Text> Login </Text> 
                        </Pressable> 

                    <Pressable onPress={ ()=> this.props.navigation.navigate('Register')} style={styles.boton}>
                        <Text>Ir al registro</Text>
                    </Pressable>
                    <Pressable onPress={ () => this.props.navigation.navigate('HomeMenu')} style={styles.boton2}>
                        <Text>Entrar a la App</Text>
                    </Pressable>

                </View>
    )
}}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
    },
    boton: {
        backgroundColor: "lightblue",
        padding: 10,
        margin: 10,
        width: 250,
        marginLeft: 20,
        textAlign: 'center',
        borderRadius: 5,
        alignItems: 'center',
        
    },
    boton2: {
        backgroundColor: "orange",
        padding: 10,
        margin: 10,
        width: 250,
        marginLeft: 20,
        textAlign: 'center',
        borderRadius: 5,
        alignItems: 'center',
        
    },
    field:{
        height:30,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft :10,
        paddingRight :10,
        borderWidth:1,
        borderColor:"orange",
        borderStyle:"solid",
        marginTop:10,
        borderRadius:5,
        width: 250,
    },
    contenedor:{
        paddingLeft :10,
        paddingRight :10,
        marginTop:20,
    },
    logi:{
        backgroundColor: "orange",
        padding: 10,
        marginTop:20,
        width: 250,
        
        textAlign: 'center',
        borderRadius: 5,
        alignItems: 'center',
    }
})

export default Login;