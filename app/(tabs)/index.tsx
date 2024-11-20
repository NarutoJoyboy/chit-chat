import { View, Text, Image, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { transform } from "@babel/core";

export default function index() {
  const imageAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timeout = setTimeout(() => {
      Animated.timing(imageAnimation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }).start();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [imageAnimation]);

  const animatedStyle = {
    transform: [
      {
        translateY: imageAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -150],
        }),
      },
      {
        scale: imageAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0.7], //shrink the size by half
        }),
      },
    ],
  };

  const textOpacity = imageAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1], //fade in the text
  });

  return (
    <LinearGradient
      colors={["#4194E2", "#373598"]}
      start={{ x: 0.7, y: -2 }}
      end={{ x: 1, y: 1 }}
      style={[
        {
          padding: 15,
          alignItems: "center",
          borderRadius: 5,
          flex: 1,
          justifyContent: "center",
        },
      ]}
    >
      <Animated.View
        style={[
          {
            width: 300,
            height: 300,
            borderRadius: 150,
            justifyContent: "center",
            alignItems: "center",
          },
          animatedStyle,
        ]}
      >
        <Image
          source={require("../../assets/images/cclogo.png")}
          style={{ width: 300, height: 300, marginTop: 120 }}
        />
      </Animated.View>
      <Animated.View style={{opacity:textOpacity}}>
        <Animated.Text
          style={[{ color: "white", fontSize: 20 }]}
        >
          Chit Chat
        </Animated.Text>
        <Animated.Text>
          Anonymously connect with anyone within 10 mile
        </Animated.Text>
      </Animated.View>
    </LinearGradient>
  );
}
