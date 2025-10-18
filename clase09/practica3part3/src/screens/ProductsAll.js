import React, {Component} from "react";
import Card from "../components/Card";
import { View, Text, FlatList, StyleSheet } from "react-native";

class ProductsAll extends Component{
    constructor(){
        super();
        this.state = {
            products: []
              
        }
    }

    render(){
        return(
            <Card/>
        )
    }
}

export default ProductsAll;