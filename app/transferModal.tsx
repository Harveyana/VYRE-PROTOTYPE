import { StyleSheet,StatusBar,ScrollView,TextInput,TouchableOpacity,Image,ActivityIndicator} from 'react-native';
import tw from 'twrnc'
// import { Link, Tabs } from 'expo-router';
import { Text, View, SafeAreaView } from '../components/Themed';
import { Ionicons,Feather,FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter,useLocalSearchParams } from 'expo-router';
import { useState,useRef } from 'react';
import Colors from '../constants/Colors';
import { styles as defaultStyle } from '../constants/Colors';
import { ActionsProvider,useActions } from '../hooks/actionsModule';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import CreateAssetbottomSheet from '../components/bottomSheets/createAssetbottomSheet';
import Transactions from '../components/transactions';
import TransactionSheet from '../components/bottomSheets/transactionSheet';

type transaction = {
  type:string;
  assetName:string;
  amount:number;
  assetSymbol:string;
  description:string;
  date:string;
  img:any
}

export default function transactions() {
  
  const router = useRouter()
  const [item, setItem] = useState<transaction| any>()
  const sheetRef = useRef<BottomSheetMethods>(null);
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [Amount, setAmount] = useState('9000');


  const OpenTransaction = (item:transaction)=>{
    setItem(item);
    sheetRef.current?.open()
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
                source={require('../assets/images/fn1.jpg')}
              />
            </TouchableOpacity>
          </View>

          <View style={[{backgroundColor:Colors.light.background,flex:1,borderTopRightRadius: 30,},tw`mt-2  py-6`]}>
              <ScrollView style={tw`w-full px-2`}>
                <View style={tw`w-full flex items-center justify-center px-4`}>

                        <View style={[{backgroundColor:Colors.light.vyreBlue},tw`w-full rounded-2xl my-4 py-4 px-2 flex border justify-center items-center`]}>
                          <View style={tw`bg-white w-full rounded-2xl my-4 py-4 px-2 flex border flex-row justify-center items-center`}>
                            <Text style={tw`font-bold text-center mx-2 text-sm`} darkColor='black'>{'reciepient'}</Text>
                            <View style={tw`w-3/5 bg-gray-100 h-12 flex flex-row items-center px-2 rounded-xl`}>
                              <TextInput
                                  style={tw`bg-transparent w-4/5 h-full  text-lg`}
                                  textAlign='right'
                                  placeholder="enter user email"
                                  value={email}
                                  onChangeText={setEmail}
                              />
                            </View>
                          </View>

                          {/* <ActivityIndicator size={42} color={'white'} style={tw`my-4`}/> */}

                          <TouchableOpacity onPress={()=>{}} style={[{...defaultStyle.IosBoxShadow,...defaultStyle.androidBoxShadow},tw`mx-2 bg-white my-2 py-2 rounded-3xl`]} >
                            <View style={[tw`w-full flex flex-row justify-between bg-transparent rounded-xl px-2.5 py-2`]}>

                                <View style={tw`flex flex-row bg-transparent`}>
                                    <View style={tw`w-14 ml-2 mr-4 flex flex-row items-center justify-center rounded-xl bg-transparent`}>
                                        <Image
                                            style={[{aspectRatio:1,resizeMode:'cover'},tw`rounded-xl bg-transparent w-full`]}
                                            source={require('../assets/images/people/BlackMan.png')}
                                        />
                                    </View>
                                    
                                    <View style={tw`bg-transparent w-1/2`}>
                                        <Text numberOfLines={1} style={tw`font-bold text-sm`} darkColor='black'>{'Harvey Ana'}</Text>
                                        <Text numberOfLines={1} style={[{fontSize:14},tw`font-bold text-gray-500`]}>{'harveyana3@gmail.com'}</Text>
                                        <Text numberOfLines={1} style={tw`font-bold text-green-800 text-sm`}>{'user'}</Text>
                                    </View> 

                                </View>

                                <View style={tw`px-2 ml-2 bg-transparent flex flex-row justify-center items-center`}>

                                    <TouchableOpacity onPress={()=>{}} style={[{backgroundColor:Colors.light.vyreBlue},tw`rounded-xl`]}>
                                    <MaterialCommunityIcons style={tw`w-6 px-1 py-1 rounded-xl mx-1`} name="arrow-top-right" size={16} color="white" />
                                    </TouchableOpacity>

                                </View>
                        
                    
                            </View>
                          </TouchableOpacity>
                          
                        </View>

                        <Text style={tw`font-bold text-center mx-2 text-lg`} darkColor='black'>{'Balance: '}{'1200'} {'USD'}</Text>

                        <View style={[{...defaultStyle.IosBoxShadow,...defaultStyle.androidBoxShadow},tw`w-full bg-white rounded-2xl my-4 py-4 px-2 flex flex-row justify-center items-center`]}>
                            <Text style={tw`font-bold text-center mx-4 text-lg`} darkColor='black'>{'Amount'}</Text>
                            <View style={tw`w-3/5 bg-gray-100 h-12 flex flex-row items-center px-2 rounded-xl`}>
                                <TextInput
                                    style={tw`bg-transparent w-9/12 h-full font-bold text-xl`}
                                    textAlign='right'
                                    placeholder="enter Amount"
                                    keyboardType="numeric"
                                    value={Amount}
                                    inputMode='numeric'
                                    onChangeText={setAmount}
                                />
                                <Text style={tw`font-bold text-center mx-2 text-lg`} darkColor='black'>{'USD'}</Text>
                            </View>
                        </View>

                        <View style={[{...defaultStyle.IosBoxShadow,...defaultStyle.androidBoxShadow},tw`bg-white w-full rounded-2xl my-4 py-4 px-2 flex justify-center items-center`]}>
                            <Text style={tw`font-bold text-center mx-2 text-sm`} darkColor='black'>{'reciepient Note'}</Text>
                            <View style={tw`w-4/5 bg-gray-100 h-12 flex flex-row items-center px-2 mt-2 rounded-xl`}>
                              <TextInput
                                  style={tw`bg-transparent w-4/5 h-full  text-lg`}
                                  textAlign='right'
                                  placeholder="reciepient note"
                                  value={note}
                                  onChangeText={setNote}
                              />
                            </View>
                        </View>


                        <Text style={tw`font-bold text-center mx-2 text-sm`} darkColor='black'>{'enter reciepient email'}</Text>

                        <View style={[,tw`w-full mt-4 flex flex-row justify-center items-center px-2 py-2`]}>
                          <TouchableOpacity onPress={()=>{}} style={[{backgroundColor:Colors.light.vyreGreen},tw`mt-2 w-4/5 px-4 py-2 rounded-2xl flex items-center justify-center`]}>
                            <Text style={tw`font-bold text-center text-white text-lg`}>{'Transfer'}</Text>
                          </TouchableOpacity>
                        </View>


                  <View style={tw` h-0.5 bg-gray-300 mx-4`}></View>

                </View>
            
              
              </ScrollView>

            <BottomSheet ref={sheetRef} animationType='spring' height={'70%'}>
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