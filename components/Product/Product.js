// Librairies
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Product(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{props.item.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        padding: 30,
        borderBottomWidth: 1,
        borderColor: '#182E28',
    },
});

export default Product;