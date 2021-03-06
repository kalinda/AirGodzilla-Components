
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
 Image,
 Dimensions,

} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import GodzillaButton from '../Shared/GodzillaButton';

import {getRoom} from '../../actions/room';

const styles =StyleSheet.create({

container: {
  backgroundColor: 'white',
  marginBottom: 40,
 },

  image: {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').width * 4/7,
  marginBottom: 15,
  },

  row: {
   flexDirection: 'row',
   alignItem: 'center',
   paddingBottom: 20,
   marginBottom: 20,
   borderBottomWidth: 1,
   borderBottomColor: '#E2E2E2',
  },

  avatar: {
   width: 60,
   height: 60,
   borderRadius: 60,
  },

  info: {
   flex: 1,
   alignItems: 'center',
  },

  about: {
   paddingBottom: 20,
   marginBottom: 20,
   borderBottomWidth: 1,
   borderBottomColor: '#E2E2E2',
  },

  aboutText: {
   fontWeight: 'bold',
  },

  bookingBar: {
   position: 'absolute',
   bottom: 0,
   padding: 15,

   flexDirection: 'row',
   borderTopWidth: 1,
   borderTopColor: '#E2E2E2',
   backgroundColor: 'white',
   alignItems: 'center',
  },

  });


  class RoomScreen extends Component {

  componentWillMount () {

  const selectedRoomId = this.props.navigation.state.params.item.id;

  this.props.getRoom(selectedRoomId);


    render()
          {
      const room = this.props.room;
         if (!room) return null;

         const { image, host, bedRoom, bathRoom, accommodate, summary, price } = room;


   const item = this.props.navigation.state.params.item;
   return (

     < View style={{flex : 1}}>

     <View style={styles.container}>

     <ScrollView style = {styles.container}>
     <Image source = {{uri: image}} style = {styles.image} />
     <View style = {{padding: 30 }} >
     <View style = {styles.row} >
     <Text Style = {{flex: 1}}>{ 'Hosted by ${host.fullname' }}</Text>
     <Image source = {{uri: host.avatar}} style = {styles.avatar} />

  </View>

  <View style = {styles.row} >
      <View style = {styles.info} >
       <Icon name = 'ios-people-outline' size={40} />
  <Text>{accommodate} guest(s)</Text>
      </View>

  <View style = {styles.info} >
       <Icon name = 'ios-alarm-outline' size={40} />
  <Text>{bedRooms}  bedroom(s)</Text>
      </View>

  <View style = {styles.info} >
       <Icon name = 'ios-home-outline' size={40} />
  <Text>{bathRooms} bathroom(s)</Text>
      </View>

  </View>

  <View style={styles.about}>
  <Text style = {styles.aboutText}> About this home </Text>
  <Text > {summary}</Text>
  </View>


  </View>
  </ScrollView>


  <View style={styles.bookingBar}>
  <Text style = {{ flex: 1 }}>
  <Text style = {{ fontWeight: 'bold'}} > {`$${price}`}</Text>per night
  </Text>



  <GodzillaButton
  onPress = { ( ) => {alert ( 'Check availability')} }
 backgroundColor = '#FF5A60'
 textColor = 'white'
  label = 'Check availability'
  />

  </View>


  </View>
  ),
   },
  },


       <Text style={styles.text}>{room.host.fullname}</Text>
     </View>
   );
  }

  const mapStateToProps = state => ({
  room: state.room.room,

  });

  const mapDispatchToProps = dispatch => ({
  getRoom: (roomId) => dispatch (getRoom(roomId)),

  });

  export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen );
