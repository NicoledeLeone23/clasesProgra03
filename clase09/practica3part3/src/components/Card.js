import React, {Component} from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

class Card extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(info => {
            this.setState({data: info}) })
    }
    render(){
    return(
        //console.log(this.state.data.results)
        <FlatList
            data={this.state.data.results}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
                <View style={styles.contenedorr}>
                    <Text style={styles.contenedor2}>{item.name}</Text>
                    <Text style={styles.contenedor2}>{item.species}</Text>
                    <Text style={styles.contenedo2}>{item.gender}</Text>
                    <Image 
                        source={{uri: item.image}}
                        style={styles.image} 
                        resizeMode="contain"/>
                </View>
            )}
        />
        // <Text>Hola</Text>
    )}


}


const styles = StyleSheet.create({
    contenedorr: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        alignItems: 'center',
        flexItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
    },
    contenedor2: {
        textAlign: 'center',
        fontSize: 15,
        flexItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 10,

    },
});

export default Card;