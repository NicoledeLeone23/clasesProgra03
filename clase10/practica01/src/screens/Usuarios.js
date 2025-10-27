import React, {Component} from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { db, auth } from "../firebase/config"


class Usuarios extends Component{
    constructor (props){
        super (props);
        this.state = {
            usuarios: [],
            loading: true
        }
    }
    componentDidMount(){
        db.collection('users').onSnapshot(
            docs =>{
                    let us = [];
               docs.forEach( doc => {
                    us.push({
                        id: doc.id,
                        data: doc.data()
            })
                   this.setState({
                    usuarios: us,
                    loading: false
               })
            })
    })}

render (){
    return(
                <View>
                    <Text style={styles.titulo}>Usuarios</Text>
                    {console.log(this.state.usuarios)}
                { this.state.loading ? (<Text>Cargando...</Text>) :  
                    (<FlatList
                        data={this.state.usuarios}
                        keyExtractor={ item => item.id}
                        renderItem={ ({item}) => <Text>{item.data.email}</Text> }

                    />)
                    }   
                    
                </View>
    )
}
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

export default Usuarios;