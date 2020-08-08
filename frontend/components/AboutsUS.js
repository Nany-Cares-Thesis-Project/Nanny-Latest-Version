import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function AboutUS() {
  return (
    <View style={styles.container}>
      <View>
        <AntDesign name="heart" size={24} color="black" />
        <AntDesign name="heart" size={24} color="black" />
      </View>
      <Text>Nany App Love you !!</Text>
      <AntDesign name="heart" size={24} color="black" />
      <AntDesign name="heart" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    marginTop: 70 + "%",
    marginRight: 25 + "%",
    marginLeft: 25 + "%",
  },
  text: {
    marginTop: 70 + "%",
    marginRight: 25 + "%",
    color: "#52575D",
  },
});

// import { ImageBackground, StyleSheet, Text, View } from "react-native";

// const image = {
//   uri:
//     "https://www.cuinsight.com/wp-content/uploads/2019/11/bigstock-Teen-Nanny-With-Cute-Baby-Outd-324845542.jpg",
// };

// export default function AboutUS() {
//   const App = () => (
//     <View style={styles.container}>
//       <ImageBackground source={image} style={styles.image}>
//         <Text style={styles.text}>
//           If I open my eyes just a little bit more / I can see Nanny's
//           dressing-gown on the door; / It's a beautiful blue but it hasn't got a
//           hood, / God bless Nanny and make her good.{" "}
//         </Text>
//       </ImageBackground>
//     </View>
//   );

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       flexDirection: "column",
//     },
//     image: {
//       flex: 1,
//       resizeMode: "cover",
//       justifyContent: "center",
//     },
//     text: {
//       color: "grey",
//       fontSize: 30,
//       fontWeight: "bold",
//       color: "pink",
//       fontFamily: "monospace",
//     },
//   });
// }
