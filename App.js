import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, FlatList, SafeAreaView, Button } from 'react-native';
import Constants from 'expo-constants';
import { Data } from './Data';
import Row from './components/Row';
import Search from './components/Search';
import Add from './components/Add';

export default function App() {
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setItems(Data);
  }, []);
    

  // Tämä ScrollView esimerkki
  /*const [persons, setPerson] = useState([]);

  useEffect(() => {
    const testArray = Array();
    for (let i = 0; i < 30; i++) {
      testArray.push({ id: i, name: 'test' + i, image: 'https://reactnative.dev/img/tiny_logo.png' });
    }
    setPerson(testArray);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          persons.map((item) => (
            <View style = {styles.rowContainer}key={item.id}>
              <Image
              source = {{
                uri: item.image,
                width:32, 
                height:32,
              }}
              />
              <Text style={styles.rowText}>{item.name}</Text>
              </View>
          ))
        }
      </ScrollView>
    </View>
  );*/

  // TÄSTÄ ALKAA FLATLIST ESIMERKKI

 const executeSearch = (search) => {
    const searchArray = Data.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  };

  const select = (id) => {
    setSelectedId(id);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <Add items={items} setItems={setItems} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        renderItem={({item}) => (
          <Row person={item} selectedId = {selectedId} select ={select} />
           )}
      ></FlatList>
    </SafeAreaView>
  )

};


const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  image: {
    marginRight: 16,
  },
  rowText: {
    marginLeft: 16,
    fontSize: 16,
    padding: 1,
  }

});
