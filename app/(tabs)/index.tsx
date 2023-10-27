import { StyleSheet,StatusBar,ScrollView,TextInput,Image,FlatList,TouchableOpacity } from 'react-native';
import tw from 'twrnc'
// import { Link, Tabs } from 'expo-router';
import { Text, View, SafeAreaView } from '../../components/Themed';
import Homeview from '../../components/homeview';
import { Ionicons, Entypo,FontAwesome } from '@expo/vector-icons'
// import { CartProvider } from '../../hooks/cartModule';
import { useActions } from '../../hooks/actionsModule';
import Colors from '../../constants/Colors';
import SlideBtns from '../../components/slideBtns';



export default function index() {
  const {state} = useActions()
  return (
    <SafeAreaView style={[styles.container, {flex:1},tw`flex flex-col items-center justify-center`]} darkColor="black">
      <View style={[{backgroundColor:Colors.light.TabBar,paddingTop:StatusBar.currentHeight},tw`w-full rounded-2xl max-h-60 mb-8`]}>
        <View style={tw`bg-transparent pt-2 flex flex-row justify-between mx-4 mb-4`}>
          
          <TouchableOpacity style={tw` flex rounded-xl justify-center items-center bg-transparent`}>
            <Text style={[{fontFamily:'normal'},tw`text-white font-extrabold text-xl`]}>
                $ {'2,5476.60'}
            </Text>
            <Text style={[{fontSize:8},tw`text-gray-100`]}>
              Available Balance
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={tw`w-10 border border-white flex flex-row rounded-xl justify-center items-center bg-transparent`}>
            <Image
              style={[{aspectRatio:1,resizeMode:'cover'},tw` rounded-xl bg-transparent w-full`]}
              source={require('../../assets/images/people/lady.png')}
            />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={tw`bg-transparent mt-2 mb-1 mx-4`}>
         <Text style={[{fontFamily:'normal'},tw`text-xl text-gray-300 font-bold`]}>Hello,<Text style={tw`text-white`}> user</Text></Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex flex-row justify-end`} onPress={()=>{}}>
          <Ionicons  style={tw`px-2.5 rounded-xl`} name="arrow-forward-outline" size={12} color="white" />
          <Ionicons  style={tw`px-2.5 rounded-xl`} name="arrow-forward-outline" size={12} color="white" />
        </TouchableOpacity>

        <SlideBtns/>
        
      </View>

      <ScrollView style={tw`w-full px-2 mb-2`}>
          <Homeview/>        
      </ScrollView>

      <StatusBar backgroundColor={Colors.light.TabBar}/>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
