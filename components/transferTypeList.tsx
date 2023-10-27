import { StyleSheet,ActivityIndicator,StatusBar,ScrollView,TextInput,TouchableOpacity,FlatList,Image,View as view} from 'react-native';
import tw from 'twrnc'
// import { Link, Tabs } from 'expo-router';
import { Text, View, SafeAreaView } from './Themed';
import { Ionicons,MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons'
import { useRouter, Link } from 'expo-router';
import { useState,useEffect } from 'react';
import { Assets,transferTypes,assetArray,assetMap } from './data';
import Colors from '../constants/Colors';
import { styles as defaultStyle } from '../constants/Colors';


type param ={
    openSheet:()=> void;
    assetype:{type:string,ISO:string}
}

const transferTypeList = ({openSheet,assetype}:param) => {
    const router = useRouter()

    if(!transferTypeList.length){
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

    <View style={tw`w-full flex flex-row items-center justify-center px-4`}>
      <FlatList
        nestedScrollEnabled
            data={transferTypes}
            renderItem={({item}) => (
                    <TouchableOpacity onPress={()=>{router.push({ pathname: "/transferModal", params:{assetName:assetype.ISO,method:item.type}})}} style={[ !assetMap.get(assetype.ISO)?.methods.includes(item.name) ? styles.displayNon: styles.displayFlex,{...defaultStyle.IosBoxShadow,...defaultStyle.androidBoxShadow},tw`mx-2 bg-white my-2 py-2 rounded-3xl`]} >
                        <View style={[tw`w-full flex flex-row justify-between bg-transparent rounded-xl px-2.5 py-2`]}>

                            <View style={tw`flex flex-row bg-transparent`}>
                                <View style={tw`w-14 ml-2 mr-4 flex flex-row items-center justify-center rounded-xl bg-transparent`}>
                                    <Image
                                        style={[{aspectRatio:1,resizeMode:'cover'},tw`rounded-xl bg-transparent w-full`]}
                                        source={item.img}
                                    />
                                </View>
                                
                                <View style={tw`bg-transparent w-1/2`}>
                                    <Text numberOfLines={1} style={tw`font-bold text-sm`} darkColor='black'>{item.name}</Text>
                                    <Text numberOfLines={1} style={[{fontSize:14},tw`font-bold text-gray-500`]}>{item.description}</Text>
                                    <Text numberOfLines={1} style={tw`font-bold text-green-800 text-sm`}>{item.type}</Text>
                                </View> 

                            </View>

                            <View style={tw`px-2 ml-2 bg-transparent flex flex-row justify-center items-center`}>

                                <TouchableOpacity onPress={()=>{}} style={[{backgroundColor:Colors.light.vyreBlue},tw`rounded-xl`]}>
                                 <MaterialCommunityIcons style={tw`w-6 px-1 py-1 rounded-xl mx-1`} name="arrow-top-right" size={16} color="white" />
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

export default transferTypeList

const styles = StyleSheet.create({
    displayNon:{
        display:'none'
    },
    displayFlex:{
        display:'flex'
    }
})