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
        <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
                <View style={styles.contenedorr}>
                    <Text style={styles.contenedor2}>{item.title}</Text>
                    <Text style={styles.contenedor2}>{item.price}</Text>
                    <Text style={styles.contenedo2}>{item.description}</Text>
                    <Text style={styles.contenedor2}>{item.category}</Text>
                    <Image 
                        source={{uri: item.image}}
                        style={styles.image}/>
                </View>
            )}
        />
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