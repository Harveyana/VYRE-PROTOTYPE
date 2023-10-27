import { StyleSheet,ActivityIndicator,StatusBar,ScrollView,TextInput,TouchableOpacity,FlatList,Image,View as view} from 'react-native';
import tw from 'twrnc'
import { Text, View, SafeAreaView } from './Themed';
import { Ionicons,Feather,FontAwesome } from '@expo/vector-icons'
import { useRouter, Link } from 'expo-router';
import { useState,useEffect,useRef } from 'react';
import { useActions} from '../hooks/actionsModule';
import Colors from '../constants/Colors';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import Orders from './orders'
import {exchangeFilter as data} from './data'
import OrderSheet from './bottomSheets/orderSheet';


type order = {
    exchangePair: string;
    orderType:string;
    base:string;
    quote:string;
    price:number;
    amount:number;
    baseImg:any;
    quoteImg:any
    percentageProcess:number
}

const exchangeTab = () => {
    
    const router = useRouter()
    const {state,dispatch} = useActions()
    const [item, setItem] = useState<order|any>()
    const sheetRef = useRef<BottomSheetMethods>(null);

    // const {isLoading,data,refetch} = useFetch()

    const OpenOrder = (item:order)=>{
        setItem(item);
        sheetRef.current?.open()
    }

    const CloseOrder = ()=>{
      sheetRef.current?.close()
    }

    useEffect(()=>{
        console.log(state)
    },[]);

  return (
    <>

            <View style={[{},tw`w-full bg-transparent mx-2 px-2`]}>
                  <FlatList
                    data={data}
                    horizontal
                    renderItem={({item}) => (
                      <TouchableOpacity style={[styles.IosBoxShadow,styles.androidBoxShadow,tw`bg-white rounded-2xl mx-1 mb-2`]} onPress={()=>{}}>
                        <View style={[tw`bg-transparent flex items-center rounded-xl px-1 py-1 mx-1`]}>
                          <View style={tw`bg-transparent py-1`}>
                            <Text numberOfLines={1} style={tw`font-bold text-xs text-gray-500`}>{item.name}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                  
                    )}
                    contentContainerStyle={[{columnGap:7},tw`mt-2`]}
                  />
                      
            </View>

            <View style={tw` h-0.5 bg-gray-300 mx-4`}></View>            

            <ScrollView style={tw`w-full px-2`}>

              <Orders openTransaction={OpenOrder}/>
              
            </ScrollView>

            <View style={tw`w-full bg-black flex flex-row items-center justify-between border`}>

              <TouchableOpacity style={[styles.IosBoxShadow,styles.androidBoxShadow,tw` w-1/5 rounded-lg mx-1`]} onPress={()=>{}}>
                  <View style={[{backgroundColor:'white'},tw`w-full flex flex-row items-center justify-center rounded-lg py-1 px-1`]}>
                    <Text numberOfLines={1} style={tw`font-bold text-xs text-gray-500`}>{'All'}</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.IosBoxShadow,styles.androidBoxShadow,tw` w-4/12 border rounded-lg mx-1`]} onPress={()=>{}}>
                  <View style={[{backgroundColor:Colors.light.vyreGreen},tw`w-full flex flex-row items-center justify-center rounded-lg py-1 px-1`]}>
                    <Text numberOfLines={1} style={tw`font-bold text-xs text-white`}>{'Buy'}</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.IosBoxShadow,styles.androidBoxShadow,tw` w-4/12 border rounded-lg mx-1`]} onPress={()=>{}}>
                  <View style={[{backgroundColor:Colors.light.vyreBlue},tw`w-full flex flex-row items-center justify-center rounded-lg py-1 px-1`]}>
                    <Text numberOfLines={1} style={tw`font-bold text-xs text-white`}>{'Sell'}</Text>
                  </View>
              </TouchableOpacity>

            </View>

            <BottomSheet closeOnDragDown={false} closeOnBackdropPress={false} ref={sheetRef} animationType='slide' height={'70%'}>
              <OrderSheet 
                orderType={item?.orderType}
                exchangePair={item?.exchangePair}
                base={item?.base}
                quote={item?.quote}
                baseImg={item?.baseImg}
                quoteImg={item?.quoteImg}
                price={item?.price}
                amount={item?.amount}
                percentageProcess={item?.percentageProcess}
                closeOrder={CloseOrder}
              />
            </BottomSheet>
    </>    
  )
}

export default exchangeTab

const styles = StyleSheet.create({
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