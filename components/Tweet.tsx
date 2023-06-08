import React from "react";
import { StyleSheet, Image } from "react-native";

import { Text, View } from "../components/Themed";
import { TweetProps } from "../assets/shared/types";

// const tweet = tweets[4];
const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: tweet.user.image }} style={styles.usetImage} />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
      </View>
    </View>
  );
};

export default Tweet;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    // borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgrey",
  },
  usetImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: "600",
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
});
