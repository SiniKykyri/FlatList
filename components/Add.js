import { useState } from 'react';
import { StyleSheet, View,TextInput, Button } from 'react-native';

export default function Add({items, setItems}) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const save = () => {
        const newPerson = {
            id: items.length + 1,
            firstname: firstname,
            lastname: lastname,
        }

    const tempItems = [... items,newPerson]
    setItems(tempItems)
    setFirstname('')
    setLastname('')
    }

    return(
        <View style={styles.container}>
            <TextInput
            value={firstname}
            onChangeText={text => setFirstname(text)}
            placeholder="Etunimi.."
            />
            <TextInput
            value={lastname}
            onChangeText={text => setLastname(text)}
            placeholder="Sukunimi.."
            />
            <Button title='Save' onPress={save}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:16,
    },
});