import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 10,
  },
  header: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    padding: '5px 0',
    marginTop: 10,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    marginBottom: 10,
  },
  contentText: {
    fontSize: 14,
    marginBottom: 3,
  },
  timestamp: {
    fontSize: 10,
    textAlign: 'center',
  },
  itemName: {
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  column: {
    width: '33%',
  }, 
   totalRow: {
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    padding: '5px 0',
    marginTop: 10,
  },
  subtotalRow: {
    
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    padding: '5px 0',
  },
  taxRow: {
    padding: '5px 0',
  },
  totalLabel: {
    fontWeight: 'bold',
  },
  subtotalLabel: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  totalValue: {
    fontWeight: 'bold',
    textAlign: 'right',
  }
  , itemHeading: {
    width: '55%',
  },
  quantityHeading: {
    width: '20%',
    textAlign: 'center',
  },
  priceHeading: {
    width: '25%',
    textAlign: 'right',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    padding: '5px 0',
  },
  itemRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5px 0',
  },
  itemName: {
    width: '55%',
    fontSize: 12,
  },
  quantity: {
    width: '20%',
    fontSize: 12,
    textAlign: 'center',
  },
  price: {
    width: '25%',
    fontSize: 12,
    textAlign: 'right',
  }
});



const Receipt = (props) => {
  
 
  const currentDateTime = new Date().toLocaleString();
  // const cartstate = useSelector(state => state);
   let items = props.Cart;
//  let items=[
//   {
//       name:"Option 1",
//       price:500,
//       quantity:1
//   },
//   {
//       name:"Option 2",
//       price:500,
//       quantity:1
//   }
// ]

const calculateSubtotal = () => {
  let total = 0;
  items.forEach((item) => {
      total += item.quantity * item.price;
  });
  return total;
};
const calculateTotal = () => {
  const subtotal = calculateSubtotal();
  const salesTax = calculateSubtotal()*0.15;
  return subtotal + salesTax;
};

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Receipt</Text>
          <Text style={styles.headerText}>----------------------------------------------------------------------------</Text>
          <Text style={styles.timestamp}>{currentDateTime}</Text>

        </View>
        <View style={styles.content}>
          <View style={styles.itemRow}>
            <Text style={[styles.itemHeading, styles.itemName]}>Item</Text>
            <Text style={[styles.quantityHeading, styles.quantity]}>Qty</Text>
            <Text style={[styles.priceHeading, styles.price]}>Price</Text>
          </View>
          {items.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <Text style={styles.price}>Rs.{item.price}</Text>
            </View>
          ))}
            <View style={[styles.itemRow1, styles.subtotalRow]}>
            <Text style={styles.subtotalLabel}>Subtotal:</Text>
            <Text style={styles.price}>{`Rs.${calculateSubtotal()}`}</Text>
          </View>
          <View style={[styles.itemRow1, styles.taxRow]}>
            <Text style={styles.subtotalLabel}>Sales Tax (15%):</Text>
            <Text style={styles.price}>{`Rs.${(0.15*calculateSubtotal()).toFixed(2)}`}</Text>
          </View>
          <View style={[styles.itemRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalValue}>{`Rs.${calculateTotal().toFixed(2)}`}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Receipt;