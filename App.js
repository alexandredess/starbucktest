// Libraries
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';

// Composant
import Product from './components/Product/Product';

export default function App() {
    // States
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [products, setProducts] = useState([
        {
            name: 'Iced Latte',
        },
        {
            name: 'Doubleshot Iced Coffee',
        },
        {
            name: 'Doubleshot Vanilla Iced Coffee',
        },
        {
            name: 'Caramel Macchiato',
        },
        {
            name: 'Iced Caramel Macchiato',
        },
        {
            name: 'Iced Cappuccino',
        },
        {
            name: 'Ristretto Bianco',
        },
        {
            name: 'Cold Brew Latte',
        },
        {
            name: 'Mocha',
        },
        {
            name: 'Iced Mocha',
        },
        {
            name: 'Americano',
        },
        {
            name: 'Iced Americano',
        },
        {
            name: 'Café Filtre',
        },
        {
            name: 'Café Filtre Glacé',
        },
        {
            name: 'Chocolat Viennois Signature',
        },
        {
            name: 'Chocolat Viennois Signature Glacé',
        },
    ]);

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://believemy.com/uploads/6435acae7f1901acb1e4355395964ea5_ea186b839326aea1816bd1f3f2ab84b3.png',
                }}
                style={{ width: 100, height: 100, marginBottom: 15 }}
            />
            <Text style={styles.title}>STARBUCKS</Text>
            {isDisplayed ? (
                <Text>Que souhaitez-vous boire ?</Text>
            ) : (
                <Text>Commencez par ouvrir le menu</Text>
            )}

            {isDisplayed && (
                <FlatList
                    data={products}
                    renderItem={({ item }) => <Product item={item} />}
                    keyExtractor={item => Math.random().toString()}
                    style={{ width: '100%' }}
                />
            )}
            <View style={{ marginTop: 40 }}>
                {/* <Button
                    onPress={() => setIsDisplayed(prevState => !prevState)}
                    title={isDisplayed ? 'Fermer le menu' : 'Ouvrir le menu'}
                    color="#006341"
                /> */}
                <TouchableOpacity
                    onPress={()=>setIsDisplayed(prevState => !prevState)}
                    
                    style={{
                        widht:'40%',
                        backgroundColor:'#006341',
                        paddingHorizontal:15,
                        paddingVertical:5,
                        borderRadius:5
                        }}
                >
                    <Text style={{color:'white'}} >{isDisplayed ? 'Fermer le menu' : 'Ouvrir le menu'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        paddingBottom: 15,
    },
    title: {
        fontSize: 32,
        color: '#006341',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});
