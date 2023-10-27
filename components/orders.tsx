import { StyleSheet,ActivityIndicator,StatusBar,ScrollView,TextInput,TouchableOpacity,FlatList,Image,View as view} from 'react-native';
import tw from 'twrnc'
// import { Link, Tabs } from 'expo-router';
import { Text, View, SafeAreaView } from './Themed';
import { Ionicons,Feather,FontAwesome } from '@expo/vector-icons'
import { useRouter, Link } from 'expo-router';
import { useState,useEffect } from 'react';
import { useActions} from '../hooks/actionsModule';
import { wallets } from './data';
import Colors from '../constants/Colors';
import {orders as data} from '../components/data'

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

type param = {
    openTransaction: (item:order)=> void
}

const orders = ({openTransaction}:param) => {
    const router = useRouter()
    const {state,dispatch} = useActions()
    // const {isLoading,data,refetch} = useFetch()

    useEffect(()=>{
        console.log(state)
    },[]);

    if(!wallets.length){
        return (
            <View style={tw`w-full flex flex-row items-center mt-16`}>
            <Image
              style={[{aspectRatio:1,resizeMode:'contain'},tw`rounded-xl border-2 opacity-75 h-80 w-4/5`]}
              source={require('../assets/images/Pose23.png')}
            />
          </View>
          
        )
    } 


  return (
    <>

        <View style={[{},tw`w-full pb-0.5`]}>
            
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <TouchableOpacity style={tw`rounded-xl px-2`} onPress={()=>{openTransaction(item)}}>
                        <View style={[tw`w-full flex flex-row items-center rounded-xl px-2 py-2`]}>
                        <View style={tw`flex flex-row items-center justify-center`}>
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
                                    <Text numberOfLines={1} style={tw`font-bold text-sm`} darkColor='black'>{item.exchangePair}</Text>
                                    <Text numberOfLines={1} style={tw`font-bold text-xs text-gray-400`}>{item.orderType}</Text>
                                </View>

                                <View style={tw`w-24 bg-transparent`}>
                                    <Text numberOfLines={1} style={[{color:item.orderType == 'BUY'? Colors.light.vyreGreen:Colors.light.vyreBlue},tw`font-bold text-sm`]} darkColor='black'>{item.amount}</Text>
                                    <Text numberOfLines={1} style={tw`font-bold text-xs text-gray-400`}>{item.quote} {item.price}</Text>
                                </View>
                        </View>
                            
                            
                
                        </View>
                    </TouchableOpacity>
        
                )}
                contentContainerStyle={[{columnGap:16},tw`mt-4`]}
            />
            
        </View>

    </>    
  )
}

export default orders

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