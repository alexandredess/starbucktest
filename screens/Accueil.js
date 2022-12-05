// Libraries
import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Image, 
    FlatList, 
    TouchableOpacity,
    Modal,
    Button } from 'react-native';
import { Formik } from 'formik';

// Composant
import Product from '../components/Product/Product';

function Accueil({navigation}) {
    // States
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [modal,setModal] = useState(true)
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
            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                title="Lieux"
                onPress={() => navigation.navigate('Lieux')}
                />
            </View> */}
            <Modal transparent={true} visible={modal} animationType="slide">
                <View style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:'rgba(0,0,0,.5)'
                }}>
                    <View style={{
                        backgroundColor:'white',
                        padding:17,
                        elevation:40,
                        shadowColor:'#006341',
                        shadowOpacity:.4,
                        shadowRadius:5,
                        shadowOffset:{width:0,height:0}
                    }}>
                        <TouchableOpacity onPress={()=>setModal(false)}>
                            <Text style={{
                                textAlignVertical:"center",
                                textAlign:"center",
                                borderStyle:"solid",
                                borderWidth:2,
                                borderColor:"#006341",
                                borderRadius:30,
                                width:30,
                                height:30,
                                color:"#006341",
                                marginBottom:8
                            }}>X</Text>
                        </TouchableOpacity>
                        <Text>
                            Ceci est ma première modale
                        </Text>
                    </View>
                </View>
                
            </Modal>
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
                    style={{ width: '100%' }}
                />
            )}
            <View style={{ marginTop: 40 }}>
                
                <TouchableOpacity
                    onPress={()=>setIsDisplayed(prevState => !prevState)}
                    
                    style={{
                        widht:'40%',
                        backgroundColor:'#006341',
                        paddingHorizontal:15,
                        paddingVertical:5,
                        borderRadius:5,
                        }}
                        activeOpacity={0.8}
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

export default Accueil;