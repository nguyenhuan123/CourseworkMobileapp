import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
    return (
      <View>
          <TouchableOpacity
              style = {styles.button}
              onPress = {props.handlePress}>
              <Text style = {styles.Text}>{props.title}</Text>
          </TouchableOpacity>
      </View>
    )
  }
  
  const styles = StyleSheet.create(
      {
          Text:
          {
            textTransform:"none",
            color: "white",
            fontSize: 20,
          },
          button:
        {
          width: 125,
          height: 70,
          borderWidth: 3,
          backgroundColor: "#0066CC",
          fontSize: 250,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          marginTop:20,
          marginHorizontal:5,
        }
      }
  )
  
  export default CustomButton;