import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TextInput,
} from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DeliveryAddressCard from '../components/DeliveryAddressCard';
import CartItem from '../components/CartItem';
import { cartData } from '../data/CartData';

const CartScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      header: () => (
        <SafeAreaView
          style={{
            backgroundColor: 'rgba(5,250,242,0.4)',
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              width: '80%',
              margin: 20,
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#b8baba',
              paddingLeft: 10,
              backgroundColor: 'white',
              borderRadius: 5,
              height: 40,
            }}
          >
            <MaterialIcons name="search" color={'gray'} size={20} />
            <TextInput
              style={{
                outline: 'none',
                width: '92%',
                height: '90%',
                borderWidth: 0,
                paddingLeft: 10,
                backgroundColor: 'white',
                paddingBottom: 1,
              }}
              placeholder="Search Amazon.com"
              placeholderTextColor={'gray'}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: '100%',
              justifycontent: 'center',
              width: '90%',
            }}
          >
            <MaterialIcons name="mic-none" size={26} />
          </View>
        </SafeAreaView>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <DeliveryAddressCard />
      <View style={styles.subCont}>
        <Text style={styles.titleText}>Subtotal</Text>
        <Text style={styles.priceText}>$948</Text>
      </View>
      <View style={styles.deliveryCont}>
        <View>
          <MaterialIcons name="verified" color={'teal'} size={22} />
        </View>
        <View>
          <Text style={styles.deliveryText}>
            Your order is eligible for FREE delivery
          </Text>
        </View>
      </View>
      <View style={styles.buyBtn}>
        <Pressable style={styles.btnCont}>
          <Text style={styles.btnText}>Proceed to buy (2 items)</Text>
        </Pressable>
      </View>
      <ScrollView>
        {cartData.map((dat) => (
          <CartItem
            key={dat.title}
            title={dat.title}
            img={dat.img}
            price={dat.price}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subCont: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: '600',
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  deliveryCont: {
    flexDirection: 'row',
    padding: 10,
  },
  deliveryText: {
    color: 'teal',
    marginLeft: 5,
  },
  buyBtn: {
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  btnCont: {
    backgroundColor: 'gold',
    marginLeft: '5%',
    marginRight: '5%',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
});
