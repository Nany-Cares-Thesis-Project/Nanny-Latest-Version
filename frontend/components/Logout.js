import React from "react";
import Login from "./LoginInputs"

export default function Logout() {
    return (
          <Login />
      
    )
}





                  
              
              























// import { Button } from "react-native-paper"
// export default function  ({ navigation }) {
//   return (
//     <View>
//       <KeyboardAvoidingView behavior="position" disabled>
//         <View
//           style={{ marginTop: 50, marginLeft: "auto", marginRight: "auto" }}
//         >
//           <Text
//             style={{
//               fontSize: 20,
//               fontWeight: "bold",
//               color: "#E88877",
//               marginTop: 100,
//             }}
//           >
//             logout?
//           </Text>
//         </View>
//         <View>
//           <Formik
//             onSubmit={() => {
//            console.log('fnh')
            
//             }}
//           >
//             {(props) => (
//               <View>
//                 {/* submit bttn  */}
//                 <Button
//                   title="logout"
//                   mode="contained"
//                   Text="logout"
//                   onPress={props.handleSubmit}
//                 >
//                   <Text style={{ color: "pink" }}>logout</Text>
//                 </Button>
//               </View>
//             )}
//           </Formik>
//         </View>
//       </KeyboardAvoidingView>
//     </View>
//   );
// }


      
//       const style = StyleSheet.create({
//         title: {
//           color: "red",
//           textAlign: "center",
//           marginTop: 50,
//           fontSize: 30,
//           fontWeight: "bold",
//         },
//         center: {
//           marginLeft: "auto",
//           marginRight: "auto",
//         },
//         textButton: {
//           width: 140,
//           padding: 10,
//           fontSize: 20,
//           marginTop: 10 + "%",
//           marginLeft: "auto",
//           marginRight: "auto",
//           fontWeight: "bold",
//           borderRadius: 30,
//           color: "white",
//           textAlign: "center",
//           backgroundColor: "#f0f",
//         },
//       });



   
      

//       import React from "react";
// import { Formik } from "formik";
// import { View } from "react-native-animatable";
// import { Text, StyleSheet, KeyboardAvoidingView } from "react-native";
// import { Button } from "react-native-paper"

// function Logout() {
//     // export default function Logout ({ navigation }){
//     return (
//         <View>
//         <KeyboardAvoidingView behavior="position" disabled>
//         <View
//             style={{ marginTop: 50, marginLeft: "auto", marginRight: "auto" }}
//           >
//       {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Log Out Screen</Text>   
//   </View> */}
  
//             <Text
//               style={{
//                 fontSize: 20,
//                 fontWeight: "bold",
//                 color: "#E88877",
//                 marginTop: 100,
//               }}
//             >
//               logout?
//             </Text>
//           </View>
//           <Formik
           
//               onSubmit={() => {
//                 {/* userLogOut: function (req, res) {
//       res.status(200).send({ auth: false, token: null });
//     }, */}
//     axios
//                   .get("http://192.168.1.65:5000/userLogOut")
  
//                   .then(function (res) {
//                     console.log(res.data);
//                     {/* if (res.data.t=== "User authenticated") {
//                       navigation.navigate("Login");
//                     } else {
//                       if (res.data === "User already exists...") {
//                         alert("User already exists...");
//                       }
//                     } */}
//                   })
//                   {/* .catch(function (error) {
//                     console.log(error);
//                   }); */}
//               }
              
//               }
//            >
//               {(props) => (
//                 <View>
//                   {/* submit bttn  */}
//                   <Button
//                     title="logout"
//                     mode="contained"
//                     Text="logout"
//                     onPress={props.handleSubmit}
//                   >
//                     <Text style={{ color: "pink" }}>logout</Text>
//                   </Button>
//                 </View>
//               )}
//               </Formik>
//         </View>
          
//         </KeyboardAvoidingView>
//       </View>
//       );
//               }



