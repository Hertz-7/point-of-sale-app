import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from './Logo-Stamp-thaali-1.png'
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 0,
    margin: 0,
    textAlign:'left'
  },
  header: {
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    padding: '5px 0',
    marginTop: 10,
  },
  logo: {
    paddingTop: 20,
    width: 250, // adjust the width as needed
    height: 250, // adjust the height as needed
    // marginLeft: 180,
    alignSelf: 'center',
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    marginBottom: 10,

  },
  contentText: {
    fontSize: 20,
    marginBottom: 3,
  },
  timestamp: {
    fontSize: 20,
    textAlign: 'center',
  },
  
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  }, 
   totalRow: {
    display: 'flex',
    flexDirection: 'row',
    
    borderTopWidth: 2,
    borderTopStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    padding: '5px 5px',
    marginTop: 15,
    
    marginBottom: 50,
  },
  subtotalRow: {
    display: 'flex',
    flexDirection: 'row',
    
    borderTopWidth: 2,
    borderTopStyle: 'solid',
    padding: '5px 5px',
    marginTop: 15,
  },
  taxRow: {
    display: 'flex',
    flexDirection: 'row',
    
    borderTopWidth: 2,
    borderTopStyle: 'solid',
    padding: '5px 0',
    marginTop: 15,
    
  },
  totalLabel: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '60%',
  },
  subtotalLabel: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '60%',
  },
  totalValue: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  }
  , itemHeading: {
    width: '40%',
  },
  quantityHeading: {
    width: '20%',
  },
  priceHeading: {
    width: '25%',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    padding: '5px 0',
  },
  itemRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5px 0',
  },
  itemName: {
    width: '40%',
    fontSize: 25,
  },
  quantity: {
    width: '20%',
    fontSize: 25,
  },
  price: {
    width: '25%',
    fontSize: 25,
  },
  thankyou:{
    paddingBottom :10,
  }
});



const Receipt = (props) => {
  
 
  const currentDateTime = new Date().toLocaleString();
  // const cartstate = useSelector(state => state);
   let items = props.Cart;


const calculateSubtotal = () => {
  let total = 0;
  items.forEach((item) => {
      total += item.quantity * item.price;
  });
  return total;
};
const calculateTotal = () => {
  const subtotal = calculateSubtotal();
  // const salesTax = calculateSubtotal()*0.15;
  return subtotal ;//+ salesTax;
};

  return (
    <Document >
      <Page size='legal' style={styles.page}>
        <View style={styles.header}>
          <Image src={logo} style={styles.logo} />
          <Text style={styles.headerText}>Thaalli</Text>
          <Text style={styles.headerText}>Plot No: 66, Shop 1 LG Floor</Text> 
          <Text style={styles.headerText}> Civic Center Phase 4 </Text>
          <Text style={styles.headerText}> Bahria Town Rawalpindi</Text>
          <Text style={styles.headerText}>---------------------------------------------------</Text>
          <Text style={styles.headerText}>Receipt</Text>
          <Text style={styles.headerText}>---------------------------------------------------</Text>
          <Text style={styles.timestamp}>{currentDateTime}</Text>

        </View>
        <View style={styles.content}>
          <View style={styles.itemRow}>
            <Text style={[styles.itemHeading]}>Item</Text>
            <Text style={[styles.quantityHeading]}>Qty</Text>
            <Text style={[styles.priceHeading]}>Price</Text>
          </View>
          {items.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <Text style={styles.price}>Rs.{item.price}</Text>
            </View>
          ))}
          <View style={[styles.subtotalRow]}>
            <Text style={styles.subtotalLabel}>Subtotal:</Text>
            <Text style={styles.price}>{`Rs.${calculateSubtotal()}`}</Text>
          </View>
          <View style={[ styles.totalRow]}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalValue}>{`Rs.${calculateTotal().toFixed(2)}`}</Text>
          </View>
          <Text style={[styles.headerText , styles.thankyou]}>Thank You!</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Receipt;