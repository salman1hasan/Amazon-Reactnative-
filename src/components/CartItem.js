import { StyleSheet, Text, Image, View, Pressable } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CartItem = ({ img, title, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topCont}>
        <View style={styles.imageCont}>
          <Image
            style={{
              height: '100%',
              width: '100%',
              //   borderColor: "#b8baba",
              //   borderWidth: 1,
              //   borderRadius: 10,
              resizeMode: 'contain',
              backgroundColor: 'white',
            }}
            source={{
              uri: img,
            }}
          />
        </View>
        <View style={styles.contentCont}>
          <Text style={styles.itemTitleText}>{title}</Text>
          <Text style={styles.priceText}>${price}</Text>
          <Text>Eligible for FREE Shipping</Text>
        </View>
      </View>
      <View style={styles.bottomCont}>
        <View style={styles.itemCountCont}>
          <MaterialIcons
            style={styles.iconDel}
            name="delete-outline"
            size={22}
          />
          <Text style={styles.countText}>1</Text>
          <MaterialIcons style={styles.iconAdd} name="add" size={22} />
        </View>
        <View style={styles.actionCont}>
          <Pressable style={styles.btnCont}>
            <Text>Delete</Text>
          </Pressable>
          <Pressable style={styles.btnCont}>
            <Text>Save for later</Text>
          </Pressable>
          <Pressable style={styles.btnCont}>
            <Text>See more like this</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'white',
    borderBottomWidth: 10,
    backgroundColor: '#ededed',
  },
  topCont: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  imageCont: {
    flex: 1,
  },
  contentCont: {
    flex: 2,
    padding: 5,
    marginLeft: 10,
  },
  itemTitleText: {
    flex: 1,
    fontWeight: '600',
  },
  priceText: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
  },
  bottomCont: {
    flexDirection: 'row',
    padding: 10,
    flex: 1,
  },
  itemCountCont: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconDel: {
    borderWidth: 1,
    borderColor: '#c9c9c9',
    backgroundColor: '#e6e5e3',
    paddingLeft: 5,
    paddingRight: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingTop: 4,
    paddingBottom: 4,
  },
  iconAdd: {
    borderWidth: 1,
    borderColor: '#c9c9c9',
    backgroundColor: '#e6e5e3',
    paddingLeft: 5,
    paddingRight: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingTop: 4,
    paddingBottom: 4,
  },
  btnCont: {
    borderWidth: 1,
    borderColor: '#c9c9c9',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  countText: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#c9c9c9',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 3,
  },
  actionCont: {
    flex: 2,
    padding: 5,
    marginLeft: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
