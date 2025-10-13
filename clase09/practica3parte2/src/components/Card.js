import React, {Component} from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

function Card (props){
    return(
        <FlatList
                    data= {props.data}
                    keyExtractor={item  => item.id.toString()}
                    renderItem={({item})=>
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.price}</Text>
                        <Text>{item.description}</Text>
                        <Text>{item.category}</Text>
                        
                    </View>
                    
                }
        />
    )
}


export default Card;