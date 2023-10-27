import { StyleSheet,ActivityIndicator,StatusBar,ScrollView,TextInput,TouchableOpacity,FlatList,Image,View as view} from 'react-native';
import tw from 'twrnc'
// import { Link, Tabs } from 'expo-router';
import { Text, View, SafeAreaView } from './Themed';
import { Ionicons,Feather,FontAwesome } from '@expo/vector-icons'
import { useRouter, Link } from 'expo-router';
import { useState,useEffect,useRef } from 'react';
import { useActions} from '../hooks/actionsModule';
import { wallets } from './data';
import Colors from '../constants/Colors';
import {orders as data} from '../components/data'
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import MyOrdersheet from './bottomSheets/myOrderSheet';


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

const ordersTab = () => {
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

        <View style={tw`w-full pb-0.5`}>

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
            
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={()=>{OpenOrder(item)}} style={tw`rounded-xl px-4`} >
                        <View style={[tw`w-full flex flex-row items-center rounded-xl px-3 py-2`]}>
                            <View style={tw`flex flex-row justify-center items-center`}>
                                <TouchableOpacity style={tw`w-8 border-2 mr-2 flex flex-row rounded-3xl items-center`}>
                                    <Image
                                    style={[{aspectRatio:1,resizeMode:'cover'},tw` rounded-xl bg-transparent w-full`]}
                                    source={item.baseImg}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={[{marginLeft:-19},tw`w-8 border-2 mr-2 flex flex-row rounded-3xl items-center`]}>
                                    <Image
                                    style={[{aspectRatio:1,resizeMode:'cover'},tw` rounded-xl bg-transparent w-full`]}
                                    source={item.quoteImg}
                                    />
                                </TouchableOpacity>
                            </View>
                        

                            <View style={tw`w-11/12 mx-2 bg-transparent flex flex-row justify-between`}>
                                    <View style={tw`w-32 bg-transparent`}>
                                        <Text numberOfLines={1} style={tw`font-bold text-lg`} darkColor='black'>{item.exchangePair}</Text>
                                        <Text numberOfLines={1} style={tw`font-bold text-xs text-gray-400`}>{item.orderType}</Text>
                                    </View>

                                    <View style={tw`w-24 bg-transparent`}>
                                        <Text numberOfLines={1} style={[{color:item.orderType == 'BUY'? Colors.light.vyreGreen:Colors.light.vyreBlue},tw`font-bold text-lg`]} darkColor='black'>{item.amount}</Text>
                                        <Text numberOfLines={1} style={tw`font-bold text-xs text-gray-400`}>{item.quote} {item.price}</Text>
                                    </View>
                            </View>
                            
                            
                
                        </View>
                    </TouchableOpacity>
        
                )}
                contentContainerStyle={[{columnGap:16},tw`mt-4`]}
            />
            
        </View>
        <BottomSheet ref={sheetRef} animationType='slide' height={'70%'}>
            <MyOrdersheet
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

export default ordersTab

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