import React from 'react';
import { StyleSheet,Text, Button, TextInput, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
var stripe = require('stripe-client')('sk_test_51H7MbvAVkpUTL0EwaVusA6XP32vlslKkPKN2t4XWTfsKjnWmOwhXDHsSnRddXjUttr2gET8qIIDPCkRGtS43QV7I008hs0nJat');
export default class Payment extends React.Component {
constructor(){
    super()
    this.state = {
       cardNumber: "",
       cvc: "",
       name: "",
       exp_month:"",
       exp_year: "",
       spinner: false
    }
}
render() {
return (
<View style={styles.container}>
  <Spinner
    visible={this.state.spinner}
    textContent={'generating token...'}
    textStyle={{color: 'blue'}} 
  />
  <TextInput maxLength={25}
    keyboardType='default'
    multiline={false}
    placeholder='Card Name'
    style={[styles.input, styles.nameInput]}
    onChangeText={(text)=> this.setState({name: text})}/>
  <TextInput maxLength={16}
    keyboardType='number-pad'
    multiline={false}
    placeholder='Card Number'
    style={[styles.input, styles.cardNumber]}
    onChangeText={(text)=> this.setState({cardNumber: text})}/>
  <TextInput maxLength={3}
    keyboardType='number-pad'
    multiline={false}
    placeholder='CVC'
    style={[styles.input, styles.cvcInput]} 
    onChangeText={(text)=> this.setState({cvc: text})}/>
  <View style={{flexDirection:'row'}}>
    <TextInput maxLength={2}
      keyboardType='number-pad'
      multiline={false}
      placeholder='MM'
      style={[styles.input, styles.expDateInput]}
      onChangeText={(text)=> this.setState({exp_month: text})}/>
      <Text style={{fontSize:18}}>/</Text>
    <TextInput maxLength={2}
      keyboardType='number-pad'
      multiline={false}
      placeholder='YY'
      style={[styles.input, styles.expDateInput]}
      onChangeText={(text)=> this.setState({exp_year: text})}/>
  </View>
  <Button title= "Proceed" onPress={()=> this.onProcessPayment()}/>
</View>
);
}
async onProcessPayment() {
  this.setState({spinner: true})
  information = {
    card: {
      number: this.state.cardNumber,
      exp_month: this.state.exp_month,
      exp_year: this.state.exp_year,
      cvc: this.state.cvc,
      name: this.state.name
    }
  }
  
  var card = await stripe.createToken(information);
  if(!card.error){
    var token = card.id;
    alert(`Token: ${token}`)
  }else{
    alert(`Error: ${card.error.code}`)
  }
  this.setState({spinner: false})
}
}
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: 8
},
input:{
  fontSize: 18,
  borderColor: 'gray'
},
cardNumber:{
  width: 150,
},
cvcInput:{
  width: 50
},
nameInput:{
  width: undefined,
  alignSelf: 'stretch'
},
expDateInput:{
  marginHorizontal:4
}
});