import React, { useState } from 'react';
import { 
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableHighlight,
    Alert} from 'react-native';


function Places() {

    const [places,setPlaces] = useState([
        {
          "city": "Hong Kong", 
          "name": "Plaza Hollywood", 
          "country": "CN", 
          "longitude": 114.20169067382812, 
          "latitude": 22.340700149536133, 
          "store_id": 1
        }, 
        {
          "city": "Hong Kong", 
          "name": "Exchange Square", 
          "country": "CN", 
          "longitude": 114.15818786621094, 
          "latitude": 22.283939361572266, 
          "store_id": 6
        }, 
        {
          "city": "Kowloon", 
          "name": "Telford Plaza", 
          "country": "CN", 
          "longitude": 114.21343994140625, 
          "latitude": 22.3228702545166, 
          "store_id": 8
        }, 
        {
          "city": "Hong Kong", 
          "name": "Hong Kong Station", 
          "country": "CN", 
          "longitude": 114.15846252441406, 
          "latitude": 22.28445053100586, 
          "store_id": 13
        }, 
        {
          "city": "Hong Kong", 
          "name": "Pacific Place, Central", 
          "country": "CN", 
          "longitude": 114.16461944580078, 
          "latitude": 22.27765655517578, 
          "store_id": 17
        }, 
        {
          "city": "Hong Kong", 
          "name": "Three Garden Road", 
          "country": "CN", 
          "longitude": 114.16087341308594, 
          "latitude": 22.278520584106445, 
          "store_id": 23
        }, 
        {
          "city": "Hong Kong", 
          "name": "MTR Central", 
          "country": "CN", 
          "longitude": 114.15946197509766, 
          "latitude": 22.281129837036133, 
          "store_id": 25
        }, 
        {
          "city": "Hong Kong", 
          "name": "Wan Chai Tower", 
          "country": "CN", 
          "longitude": 114.17261505126953, 
          "latitude": 22.280019760131836, 
          "store_id": 27
        },])

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             <FlatList data={places} renderItem={({ item }) =>
             <TouchableHighlight  
                    onPress={()=>Alert.alert('Désolé',"Nous n'avons pas d'informations à communiquer!!")}
                    activeOpacity={0.8}
                    underlayColor="rgba(0,105,60,.15)">
                <View style={styles.card}>
                    <Text >{item.city}</Text>
                    <Text >{item.name}</Text>
                </View>
            </TouchableHighlight>  
                }    
                style={{ width: '100%' }}/>
                
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        padding: 30,
        borderBottomWidth: 1,
        borderColor: '#182E28',
    }
})

export default Places