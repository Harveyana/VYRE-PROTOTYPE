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
import {transactions as history ,people} from '../components/data'

type transaction = {
    type:string;
    assetName:string;
    amount:number;
    assetSymbol:string;
    description:string;
    date:string;
    img:any
}
type param = {
    openTransaction: (item:transaction)=> void
}

const transactions = ({openTransaction}:param) => {
    const router = useRouter()
    const {state,dispatch} = useActions()
    // const {isLoading,data,refetch} = useFetch()

    useEffect(()=>{
        console.log(state)
    },[]);

    if(!history.length){
        return (
            <View style={[{flex:1},tw`w-full flex items-center justify-center mt-8`]}>
            
                    <TouchableOpacity style={tw`w-4/5 mr-2 flex flex-row items-center`}>
                    <Image
                        style={[{aspectRatio:1,resizeMode:'cover'},tw`bg-transparent w-full`]}
                        source={require('../assets/images/Saly22.png')}
                    />
                    </TouchableOpacity>
                    
            </View>
          
        )
    } 


  return (
    <>

        <View style={tw`w-full pb-2`}>
            
            <FlatList
                data={history}
                renderItem={({item}) => (
                    <TouchableOpacity style={tw`rounded-xl px-2`} onPress={()=>{openTransaction(item)}}>
                        <View style={[tw`w-full flex flex-row items-center rounded-xl px-2 py-2`]}>
                        <TouchableOpacity style={tw`w-10 border-2 mr-2 flex flex-row rounded-3xl items-center`}>
                            <Image
                            style={[{aspectRatio:1,resizeMode:'cover'},tw` rounded-xl bg-transparent w-full`]}
                            source={item.img}
                            />
                        </TouchableOpacity>
                            <View style={tw`w-11/12 mx-2 bg-transparent flex flex-row justify-between`}>
                                <View style={tw`w-32 bg-transparent`}>
                                    <Text numberOfLines={1} style={tw`font-bold text-lg`} darkColor='black'>{item.assetSymbol}</Text>
                                    <Text numberOfLines={1} style={tw`font-bold text-gray-400`}>{item.description}</Text>
                                </View>

                                <View style={tw`w-24 bg-transparent`}>
                                    <Text numberOfLines={1} style={[{color:item.type == 'send'? Colors.light.vyreBlue:Colors.light.vyreGreen},tw`font-bold text-lg`]} darkColor='black'>{item.type == 'receive'? '+': '-'} {item.amount}</Text>
                                    <Text numberOfLines={1} style={tw`font-bold text-sm text-gray-400`}>{item.date}</Text>
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

export default transactions

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