import { ActivityIndicator,StyleSheet,StatusBar,ScrollView,TextInput,TouchableOpacity,FlatList,Image } from 'react-native';
import tw from 'twrnc'
// import { Link, Tabs } from 'expo-router';
import { Text, View, SafeAreaView } from '../components/Themed';
import { Ionicons,Feather } from '@expo/vector-icons'
import { useNavigation,useRouter } from 'expo-router';
// import Slider from '../components/slider'
import React, {useState, useEffect} from 'react'
import { useActions } from '../hooks/actionsModule';
import Colors from '../constants/Colors';
import {transactions,people} from '../components/data'

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


export default function homeview() {
    
    const router = useRouter()
    
  return (
        <>
        <View style={tw`w-full flex flex-row justify-center items-center px-2`}>
           {/* <Slider/>  */}
        </View>
        <View style={tw`flex flex-row justify-between items-center mt-4 px-1`}>
            <Text style={[{fontFamily:'normal'},tw`font-extrabold text-2xl`]}>
                Recents
            </Text>
            <TouchableOpacity style={[styles.IosBoxShadow, styles.androidBoxShadow,tw``]} onPress={()=>{router.push('/allTransactions')}}>
                <Ionicons style={[{backgroundColor:Colors.light.vyreGreen},tw` w-10 px-2.5 py-2 rounded-xl`]} name="md-list" size={20} color={'white'} />
            </TouchableOpacity>
        </View>
        <View style={[{flex:1},tw`w-full py-4`]}>
            { transactions.length ? (<View style={tw`w-full flex flex-row items-center justify-center`}>

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

            </View>):<></>}
            {transactions.length ? (<FlatList
                data={transactions}
                renderItem={({item}) => (
                    <TouchableOpacity style={tw`rounded-xl px-2`} onPress={()=>{router.push({ pathname: "/productDetails", params:item})}}>
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
            />):

            (<View style={tw`w-full flex items-center justify-center mt-8`}>
            
                    <TouchableOpacity style={tw`w-2/3 mr-2 flex flex-row items-center`}>
                    <Image
                        style={[{aspectRatio:1,resizeMode:'cover'},tw`bg-transparent w-full`]}
                        source={require('../assets/images/Saly22.png')}
                    />
                    </TouchableOpacity>
                    
            </View>)}
            
        </View>
        
        <View style={tw`flex flex-row justify-between items-center mt-4 px-1`}>
            <Text style={[{fontFamily:'normal'},tw`font-extrabold text-2xl`]}>
                Beneficiaries
            </Text>
            <TouchableOpacity style={[styles.IosBoxShadow, styles.androidBoxShadow,tw``]} onPress={()=>{router.push('/newArrivalProducts')}}>
                <Feather style={[{backgroundColor:Colors.light.vyreGreen},tw` w-10 px-2.5 py-2 rounded-xl`]} name="arrow-up-right" size={20} color={'white'} />
            </TouchableOpacity>
        </View>
        <View style={[styles.IosBoxShadow, styles.androidBoxShadow,{backgroundColor:Colors.light.vyreGreen},tw`w-full my-4 mx-4 px-2 rounded-3xl`]}>
            <FlatList
                data={people}
                horizontal
                renderItem={({item}) => (
                    <TouchableOpacity style={tw`rounded-xl px-2`} onPress={()=>{router.push({ pathname: "/productDetails", params:item})}}>
                        <View style={[tw`w-full flex flex-row items-center rounded-3xl`]}>
                            <TouchableOpacity style={tw`w-20 border-2 border-white flex flex-row rounded-3xl items-center`}>
                                <Image
                                style={[{aspectRatio:1,resizeMode:'cover'},tw` rounded-3xl bg-transparent w-full`]}
                                source={item.img}
                                />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
        
                )}
                contentContainerStyle={[{columnGap:1},tw`my-4`]}
            />
        </View>
        
        </>
    
  )
}
