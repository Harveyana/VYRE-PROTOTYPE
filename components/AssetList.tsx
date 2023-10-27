import { StyleSheet,ActivityIndicator,StatusBar,ScrollView,TextInput,TouchableOpacity,FlatList,Image,View as view} from 'react-native';
import tw from 'twrnc'
// import { Link, Tabs } from 'expo-router';
import { Text, View, SafeAreaView } from './Themed';
import { Ionicons,SimpleLineIcons,FontAwesome } from '@expo/vector-icons'
import { useRouter, Link } from 'expo-router';
import { useState,useEffect } from 'react';
import { useActions} from '../hooks/actionsModule';
import { wallets } from './data';
import Colors from '../constants/Colors';
import { styles as defaultStyle } from '../constants/Colors';


const AssetList = () => {
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

    <View style={tw`w-full pb-4 flex flex-row items-center justify-center px-4`}>
      <FlatList
        nestedScrollEnabled
            data={wallets}
            renderItem={({item}) => (
                    <TouchableOpacity style={[{...defaultStyle.IosBoxShadow,...defaultStyle.androidBoxShadow},tw`w-full bg-white my-2 py-2 rounded-3xl`]} onPress={()=>{router.push({ pathname: "/wallet", params:item})}}>
                        <View style={[tw`w-full flex flex-row justify-between bg-transparent rounded-xl px-2.5 py-2`]}>

                            <View style={tw`flex flex-row bg-transparent`}>
                                <View style={tw`w-14 ml-2 mr-4 flex flex-row items-center justify-center rounded-xl bg-transparent`}>
                                    <Image
                                        style={[{aspectRatio:1,resizeMode:'cover'},tw`rounded-xl bg-transparent w-full`]}
                                        source={item.img}
                                    />
                                </View>
                                
                                <View style={tw`bg-transparent`}>
                                    <Text numberOfLines={1} style={tw`font-bold text-sm`} darkColor='black'>{item.abb}</Text>
                                    <Text numberOfLines={1} style={[{fontSize:10},tw`font-bold text-gray-500`]}>{item.name}</Text>
                                    <Text style={tw`font-bold text-green-800 text-sm`}>{item.symbol}{item.amount}</Text>
                                </View> 

                            </View>

                            <View style={tw`px-2 ml-2 bg-transparent flex flex-row justify-center items-center`}>

                                <TouchableOpacity onPress={()=>{}} style={[{backgroundColor:Colors.light.vyreBlue},tw`rounded-xl`]}>
                                 <Ionicons style={tw`w-6 px-1 py-1 rounded-xl mx-1`} name="arrow-forward" size={16} color="white" />
                                </TouchableOpacity>

                            </View>
                    
                
                        </View>
                    </TouchableOpacity>
                
    
            )}
            contentContainerStyle={[{columnGap:16},tw`mt-4`]}
        />
    </View>
  )
}

export default AssetList

const styles = StyleSheet.create({})