import React, {useState} from 'react'
import {StyleSheet, StatusBar, SafeAreaView, ScrollView, FlatList, Text, TouchableHighlight, View } from 'react-native';

import * as Models from "../models"
let clientList = Models.ClientListFromDB;
let dogStatus = Models.ClientStatusList;

const ClientCard = (props) => {
  let { owner, dog, vet } = props.client;
  let status = dogStatus[Math.floor(Math.random() * (dogStatus.length -1))]
  return( 
    <View
      style={{
        flexDirection: "row",
        height: 130,
        margin: 2,
        borderRadius: 5, borderColor: "black", borderWidth: 1, borderRadius: 4, overflow:"hidden"
      }}
    >
      <View style={{ backgroundColor: "white", flex: 0.3, justifyContent: "center", alignItems:"center", borderRightWidth: 1 }}>
        <Text>{status}</Text>
      </View>
      <View style={{ backgroundColor: "white", flex: 0.5, fontSize: 23, padding: 4 }}>
        <Text style={{fontSize: 22}}>Owner: {owner}</Text>
        <Text style={{fontSize: 22}}>Dog: {dog}</Text>
        <Text style={{fontSize: 15}}>Address: 901 Anna St.</Text>
        <Text style={{fontSize: 15}}>Youngstown, Oh</Text>
        <Text style={{fontSize: 22}}>Vet: {vet}</Text> 
      </View>
      <View style={{ backgroundColor: "white", flex: 0.2, fontSize: 25, padding: 4, justifyContent: "center", alignItems:"center", borderLeftWidth: 1}}>
        <Text>Send</Text>
      </View>
    </View>
  )
}

const ClientHeader = () => {
  return (
    <View  
      style={{
        flex:1,
        justifyContent:"center",
        flexDirection: "row", 
        margin: 2,
        height: 34,
        backgroundColor: "white", 
        alignItems: "center", 
        borderRadius: 5, 
        borderColor: "black", 
        borderWidth: 1, 
        borderRadius: 4, 
        overflow:"hidden"
      }}>
      <View style={{
        alignItems:"center",
        justifyContent:"center",
        flexDirection: "row",
        backgroundColor: "white"
        }}>
        <View
          style={{
            flex: 1,
            alignItems:"center",
            justifyContent:"center",
            flexDirection: "row"
          }}>
          <Text style={{flex: 0.1, justifyContent:'center', textAlign:"center"}}>{`<`}</Text>
          <Text style={{flex: 0.5, justifyContent:'center', textAlign:"center"}}>{`27 Oct 2022`}</Text>
          <Text style={{flex: 0.1, justifyContent:'center', textAlign:"center"}}>{`>`}</Text>
        </View>
        <Text style={{flex: 0.2, justifyContent:'center', textAlign:"center"}}>{`Sort ^`}</Text>

      </View>
    </View>
  )
}

export const ClientList = ({navigation}) => {

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ClientHeader />
        {
          clientList.map( i => {
            return( <ClientCard client={i} key={i.dog}/> ) 
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "grey"
  },
  scrollView: {
    marginHorizontal: 10,
  },
  clientCard:{

  },
  text: {
    fontSize: 28,
  },
});