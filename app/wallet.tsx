import { StyleSheet,StatusBar,ScrollView,TextInput,TouchableOpacity,Image} from 'react-native';
import tw from 'twrnc'
// import { Link, Tabs } from 'expo-router';
import { Text, View, SafeAreaView } from '../components/Themed';
import { Ionicons,Feather,FontAwesome } from '@expo/vector-icons'
import { useRouter,useLocalSearchParams } from 'expo-router';
import { useState,useRef } from 'react';
import Colors from '../constants/Colors';
import { styles as defaultStyle } from '../constants/Colors';
import { ActionsProvider,useActions } from '../hooks/actionsModule';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import CreateAssetbottomSheet from '../components/bottomSheets/createAssetbottomSheet';
import Transactions from '../components/transactions';
import { wallet as walletype } from '../components/data';
import TransactionSheet from '../components/bottomSheets/transactionSheet';
import SendAssetSheet from '../components/bottomSheets/sendAssetSheet';

type transaction = {
  type:string;
  assetName:string;
  amount:number;
  assetSymbol:string;
  description:string;
  date:string;
  img:any
}

export default function wallet() {
  
  const router = useRouter()
  const [item, setItem] = useState<transaction| any>()
  const transactionSheetRef = useRef<BottomSheetMethods>(null);
  const sheetRef = useRef<BottomSheetMethods>(null);
  const [assetype, setAssetype] = useState({type:'fiat',ISO:'NGN'})

  const {name,amount,symbol,abb} = useLocalSearchParams<walletype>();

  const sendAsset = ()=>{
    sheetRef.current?.open()
  }

  const OpenTransaction = (item:transaction)=>{
    setItem(item)
    transactionSheetRef.current?.open()
  }

  const closeSheet = ()=>{
    sheetRef.current?.close()
  }

  return (
    <SafeAreaView style={[styles.container,tw`w-full`]}>
        <View style={[{backgroundColor:Colors.light.TabBar,paddingTop:StatusBar.currentHeight,flex:1},tw`w-full`]}>
          <View style={tw`bg-transparent pt-4 flex flex-row justify-between mx-4 mb-4`}>
            
            <TouchableOpacity onPress={()=>(router.back())} style={[{backgroundColor:Colors.light.background},tw`px-3 flex rounded-2xl justify-center items-center`]}>
              <Ionicons style={tw`w-6 px-1 py-1 rounded-xl mx-1`} name="arrow-back" size={20} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={tw`w-10 border border-white flex flex-row rounded-xl justify-center items-center bg-transparent`}>
              <Image
                style={[{aspectRatio:1,resizeMode:'cover'},tw` rounded-xl bg-transparent w-full`]}
                source={require('../assets/images/people/lady.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={tw`w-full bg-transparent mb-6`}>
            <TouchableOpacity onPress={()=>{}} style={[tw`px-3 flex rounded-2xl justify-center items-center`]}>
              <Text style={[{fontSize:16},tw`text-gray-100`]}>
                {name}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={tw`flex flex-row items-center justify-center bg-transparent mb-4`}>
              <TouchableOpacity style={tw` flex rounded-xl justify-center items-center bg-transparent`}>
                <Text style={[{fontFamily:'normal'},tw`text-white font-extrabold text-2xl`]}>
                    {symbol} {amount}
                </Text>
                <Text style={[{fontSize:8},tw`text-gray-100`]}>
                  Available Balance
                </Text>
              </TouchableOpacity>
          </View>
          <View style={[{backgroundColor:Colors.light.background,flex:1,borderTopRightRadius: 30,},tw`mt-2 pb-2`]}>

            <View style={tw`flex flex-row justify-between items-center bg-transparent px-4 mx-2 my-3`}>

              <TouchableOpacity style={[{...defaultStyle.IosBoxShadow,...defaultStyle.androidBoxShadow},tw`bg-white mx-2 rounded-3xl flex justify-center items-center px-7 py-2`]} onPress={()=>{sendAsset()}}>
                <View style={[{backgroundColor:Colors.light.VyreYellow},tw`mb-2 w-12 flex flex-row rounded-xl justify-center items-center px-2 py-2`]}>
                  <Image
                    style={[{aspectRatio:1,resizeMode:'cover'},tw` w-full `]}
                    source={require('../assets/images/send.png')}
                  />
                </View>
                <Text style={[{fontSize:14},tw`text-black`]}>
                  Send
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={[{...defaultStyle.IosBoxShadow,...defaultStyle.androidBoxShadow},tw`bg-white mx-2 rounded-3xl flex justify-center items-center px-6 py-2`]} onPress={()=>{}}>
                <View style={[{backgroundColor:Colors.light.vyreGreen},tw`mb-2 w-12 flex flex-row rounded-xl justify-center items-center px-2 py-2`]}>
                  <Image
                    style={[{aspectRatio:1,resizeMode:'cover'},tw` w-full `]}
                    source={require('../assets/images/receive.png')}
                  />
                </View>
                <Text style={[{fontSize:14},tw`text-black`]}>
                  Receive
                </Text>
              </TouchableOpacity>

            </View>

            <View style={tw` h-0.5 bg-gray-300 mx-4`}></View>

            <View style={tw`w-full flex items-center justify-center px-4`}>
              <View style={tw`w-full flex flex-row justify-between items-center mt-4`}>
                <Text style={[{fontFamily:'normal'},tw`font-extrabold text-2xl`]}>
                  Recents
                </Text>
                <TouchableOpacity style={[styles.IosBoxShadow, styles.androidBoxShadow,tw``]} onPress={()=>{router.push('/transactions')}}>
                  <Feather style={[{backgroundColor:Colors.light.vyreGreen},tw` w-10 px-2.5 py-2 rounded-xl`]} name="arrow-up-right" size={20} color={'white'} />
                </TouchableOpacity>
              </View>

              <View style={tw`w-full flex flex-row items-center justify-center py-2 mt-2`}>

                <TouchableOpacity style={[styles.IosBoxShadow,styles.androidBoxShadow,tw`w-1/5 px-2`]}>
                  <Text style={tw`font-bold px-2 py-2 rounded-3xl text-center text-sm bg-white w-full`} darkColor='black'>{'All'}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.IosBoxShadow,styles.androidBoxShadow,tw`w-4/12 flex flex-row items-center justify-center rounded-3xl bg-white mx-2 px-2 py-2`]}>
                 <Text style={tw`font-bold text-center text-sm`} darkColor='black'>{'income'}</Text>
                 <Feather style={[{},tw`mx-2`]} name="arrow-down-left" size={15} color={'black'} />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.IosBoxShadow,styles.androidBoxShadow,tw`w-4/12 flex flex-row items-center justify-center rounded-3xl bg-white px-2 py-2`]}>
                 <Text style={tw`font-bold text-center text-sm`} darkColor='black'>{'expense'}</Text>
                 <Feather style={[{},tw`mx-2`]} name="arrow-up-right" size={15} color={'black'} />
                </TouchableOpacity>

              </View>

            </View>
            

            <ScrollView style={tw`w-full px-2`}>

              <Transactions openTransaction={OpenTransaction}/>
              
            </ScrollView>

            <BottomSheet ref={transactionSheetRef} animationType='spring' height={'50%'}>
              <TransactionSheet 
                type={item?.type} 
                assetName={item?.assetName} 
                assetSymbol={item?.assetSymbol} 
                img={item?.img} 
                amount={item?.amount}
                description={item?.description}
                date={item?.date}
              />
            </BottomSheet>

            <BottomSheet ref={sheetRef} animationType='spring' height={'70%'}>
              <SendAssetSheet assetype={assetype} closeSheet={closeSheet}/>
            </BottomSheet>
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