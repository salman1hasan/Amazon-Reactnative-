import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import ProfileCard from '../components/ProfileCard';
import OrderCard from '../components/OrderCard';
import AccountCard from '../components/AccountCard';
import {
  accountData,
  infoData,
  OrderData,
  WishListData,
} from '../data/ProfileData';

const ProfileScreen = ({ navigation }) => {
  useEffect(() =>
    navigation.setOptions({
      headerTitle: '',
      headerLeft: () => (
        <Image
          source={require('../../assets/amazon.png')}
          style={{ height: 30, width: 90, marginLeft: 10, backgroundColor: '' }}
        />
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          }}
        >
          <MaterialIcons
            name="notifications-none"
            size={26}
            style={{ marginRight: 5 }}
          />
          <MaterialIcons name="search" size={26} />
        </View>
      ),
      headerStyle: {
        backgroundColor: 'rgba(5, 250, 242,0.4)',
        borderBottomWidth: 0,
      },
    })
  );
  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={['rgba(5,250,242,0.4)', '#fff']}>
        <View style={styles.titleCont}>
          <Text style={styles.titleText}>Hello, Av codes</Text>
          <MaterialIcons
            name="account-circle"
            color={'#b0b0b0'}
            size={40}
            backgroundColor="white"
          />
        </View>
        <View style={styles.actionCont}>
          {infoData.map((data) => (
            <ProfileCard title={data.title} />
          ))}
        </View>
      </LinearGradient>
      <View style={styles.orderCont}>
        <Text style={styles.orderText}>Your Orders</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {OrderData.map((data) => (
            <OrderCard image={data.image} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.orderCont}>
        <Text style={styles.orderText}>Your Orders</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {WishListData.map((data) => (
            <OrderCard image={data.image} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.orderCont}>
        <Text style={styles.orderText}>Your Account</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {accountData.map((data) => (
            <AccountCard title={data.title} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  titleCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  actionCont: {
    margnTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  orderCont: {
    marginTop: 15,
    borderBottomColor: '#b8baba',
    borderBottomWidth: 3,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  orderText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
  },
});
