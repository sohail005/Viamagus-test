import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Data from './../Data.json'
const Profile = () => {
  const [button, setButton] = useState(true);

  const renderItem = ({ item,index}) => (
    <Item index={index} title={item.title} desc={item.description} reward={item.reward} />
  );
  const Item = ({ title, desc, reward }) => {
    return (
      <View style={styles.item}>
        <View style={{ width: '25%' }}>
          <Image resizeMode='cover' style={{ width: 55, height: 55, margin: 10 }} source={require('../Assets/star.png')} />
        </View>
        <View style={{ width: '70%' }}>
          <Text style={{ color: '#333333', fontSize: 14, fontWeight: '600' }}>{title}  {reward != "" ? <Text style={{ color: '#FFA600' }}>x{reward}</Text> : ""}</Text>
          <Text numberOfLines={2} style={{ color: '#727682', fontSize: 14, fontWeight: '600' }}>{desc}</Text>
        </View>

      </View>
    );
  }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff', }}>
      {/*Header  */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Image source={require('../Assets/logo.png')} style={{ width: 50, height: 50 }} />
        <Text>Profile</Text>
        <MaterialCommunityIcons name="message-badge" color={'#727682'} size={30} style={{ paddingHorizontal: 5 }} />
      </View>
      {/* profile image container */}
      <View style={{ alignItems: 'center' }}>
        <View style={{ backgroundColor: 'red', width: 100, height: 100, borderRadius: 50, alignSelf: 'center', marginTop: 20 }}>
          <Image resizeMode='cover' style={{ width: '100%', height: '100%', borderRadius: 50 }} source={{ uri: 'https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80' }} />
          <View style={{ top: -40, alignItems: 'center', justifyContent: 'center', right: -45 }}>
            <FontAwesome5 name="edit" color={'#727682'} size={16} style={{ padding: 5, backgroundColor: '#fff', borderRadius: 50, borderWidth: 1, borderColor: '#EEEAF3' }} /></View>
        </View>
        <Text style={{ fontSize: 14, fontWeight: '500', color: '#333333', paddingTop: 10 }}>Jina Simons</Text>
        <Text style={{ fontSize: 12, fontWeight: '500', color: '#727682', padding: 10 }}>6000 Pts</Text>
        <Text style={{ fontSize: 14, fontWeight: '500', color: '#727682', padding: 10, lineHeight: 20 }}>I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!</Text>
        {/* logout button */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <MaterialCommunityIcons name="logout" color={'#727682'} size={30} style={{}} />
          <Text style={{ fontSize: 14, fontWeight: '500', color: '#727682', padding: 10, lineHeight: 20 }}>Logout</Text>
        </View>
        {/* Star */}
        <Image resizeMode='cover' style={{ width: 45, height: 45, borderRadius: 50, bottom: -20, zIndex: 1 }} source={require('../Assets/star.png')} />
        {/* Under or Over data container */}
        <View style={styles.underOverContainer}>
          <View style={{ width: '50%', marginLeft: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#727682', padding: 10, lineHeight: 20 }}>Under or Over</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.arrowbackground}><AntDesign name="arrowup" color={'#48C547'} size={30} style={{ padding: 5 }} /></View>
              <Text style={{ color: '#000', fontSize: 24, fontWeight: '700', paddingLeft: 5, top: -5 }}>81%</Text>
            </View>
          </View>
          <View style={{ width: '50%', }}>
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#727682', padding: 10, lineHeight: 20, textAlign: 'left' }}>Top 5</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={[styles.arrowbackground, { backgroundColor: '#facfcf' }]}>
                <AntDesign name="arrowdown" color={'#F73232'} size={30} style={{ padding: 5 }} /></View>
              <Text style={{ color: '#000', fontSize: 24, fontWeight: '700', paddingLeft: 5, top: -5 }}>- 51%</Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: '#decef2', width: '100%', height: 4, marginTop: 20 }}></View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Pressable onPress={() => setButton(false)} style={{ width: '50%', borderBottomWidth: 4, borderBottomColor: !button ? '#6231AD' : '#fff' }}>
          <Text style={{ color: !button ? '#6231AD' : '#727682', fontSize: 14, fontWeight: '500', textAlign: 'center', paddingVertical: 15 }}>Games played</Text></Pressable>
        <Pressable onPress={() => setButton(true)} style={{ width: '50%', borderBottomWidth: 4, borderBottomColor: button ? '#6231AD' : '#fff' }}>
          <Text style={{ color: button ? '#6231AD' : '#727682', fontSize: 14, fontWeight: '500', textAlign: 'center', paddingVertical: 15 }}>Badges</Text>
        </Pressable>
      </View>
      {button ?
        <View style={{ backgroundColor: '#decef2',paddingBottom:20 }}>
          <FlatList
            data={Data.history}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        : null}

    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  underOverContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: '95%',
    justifyContent: 'space-between',
    borderColor: '#EEEAF3',
    paddingVertical: 15
  },
  arrowbackground: {
    backgroundColor: '#c9f2d9',
    borderRadius: 50,
    marginBottom: 15
  },
  item: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center'
  }
})