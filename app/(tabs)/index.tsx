import { StyleSheet, FlatList } from "react-native";

import tweets from "../../assets/data/tweet";
import Tweet from "../../components/Tweet";

export default function TabOneScreen() {
  return (
    <>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
    </>
  );
}

const styles = StyleSheet.create({});

//!FIXME: 30:38
