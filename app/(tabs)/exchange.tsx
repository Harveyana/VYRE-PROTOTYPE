import { StyleSheet,StatusBar,ScrollView,TextInput,TouchableOpacity,Image,FlatList} from 'react-native';
import tw from 'twrnc'
// import { Link, Tabs } from 'expo-router';
import { Text, View, SafeAreaView } from '../../components/Themed';
import { Ionicons,Feather,FontAwesome } from '@expo/vector-icons'
import { useRouter,useLocalSearchParams } from 'expo-router';
import { useState,useRef } from 'react';
import Colors from '../../constants/Colors';
import { styles as defaultStyle } from '../../constants/Colors';
import ExchangeTab from '../../components/exchangeTab';
import OrdersTab from '../../components/ordersTab';
import AddOrdersTab from '../../components/addOrderTab';

type order = {
  exchangePair: string;
  orderType:string;
  base:string;
  quote:string;
  price:number;
  amount:number;
  baseImg:any;
  quoteImg:any;
  percentageProcess:number
}

export default function transactions() {
  
  const router = useRouter()
  
  const [tab, setTab] = useState('exchange')


  // const OpenTransaction = (item:order)=>{
  //   setItem(item);
  //   sheetRef.current?.open()
  // }

  return (
    <SafeAreaView style={[styles.container,tw`w-full`]}>
        <View style={[{backgroundColor:Colors.light.TabBar,paddingTop:StatusBar.currentHeight,flex:1},tw`w-full`]}>

            <View style={tw`flex flex-row justify-between items-center bg-transparent px-4 mx-2 my-3`}>

              <TouchableOpacity style={[{backgroundColor:tab == 'exchange'? Colors.light.VyreDeepBlue: Colors.light.vyreBlue,...defaultStyle.IosBoxShadow,...defaultStyle.androidBoxShadow},tw` mx-2 rounded-3xl flex justify-center items-center px-4 pt-2 pb-3`]} onPress={()=>{setTab('exchange')}}>
                <View style={[{},tw`bg-transparent mb-1 w-12 flex flex-row rounded-xl justify-center items-center px-2 py-2`]}>
                  <Image
                    style={[{aspectRatio:1,resizeMode:'cover'},tw` w-full `]}
                    source={require('../../assets/images/currency-exchange.png')}
                  />
                </View>
                <Text style={[{fontSize:12},tw`text-white`]}>
                  Exchange
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={[{backgroundColor:tab == 'orders'? Colors.light.VyreDeepBlue: Colors.light.vyreBlue,...defaultStyle.IosBoxShadow,...defaultStyle.androidBoxShadow},tw` mx-2 rounded-3xl flex justify-center items-center px-4 pt-2 pb-3`]} onPress={()=>{setTab('orders')}}>
                <View style={[{},tw`bg-transparent mb-1 w-12 flex flex-row rounded-xl justify-center items-center px-2 py-2`]}>
                  <Image
                    style={[{aspectRatio:1,resizeMode:'cover'},tw` w-full `]}
                    source={require('../../assets/images/myOrders.png')}
                  />
                </View>
                <Text style={[{fontSize:12},tw`text-white`]}>
                  Orders
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={[{backgroundColor:tab == 'add'? Colors.light.VyreDeepBlue: Colors.light.vyreBlue,...defaultStyle.IosBoxShadow,...defaultStyle.androidBoxShadow},tw` mx-2 rounded-3xl flex justify-center items-center px-4 pt-2 pb-3`]} onPress={()=>{setTab('add')}}>
                <View style={[{},tw`bg-transparent mb-1 w-12 flex flex-row rounded-xl justify-center items-center px-2 py-2`]}>
                  <Image
                    style={[{aspectRatio:1,resizeMode:'cover'},tw` w-full `]}
                    source={require('../../assets/images/add.png')}
                  />
                </View>
                <Text style={[{fontSize:12},tw`text-white`]}>
                  Add
                </Text>
              </TouchableOpacity>

            </View>

          <View style={[{backgroundColor:Colors.light.background,flex:1,borderTopRightRadius: 30,},tw`w-full mt-2  py-6`]}>

            {tab === 'exchange'?(<ExchangeTab/>)
            :tab === 'orders'?(<OrdersTab/>):
            (<AddOrdersTab/>)}

          </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:Colors.light.vyreBlue
  },
  androidBoxShadow: {
    elevation: 5,
    shadowColor: '#52006A'
},
 IosBoxShadow:{
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowRadius: 3
  }
});