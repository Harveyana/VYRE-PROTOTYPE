import { StyleSheet,ActivityIndicator,StatusBar,ScrollView,TextInput,TouchableOpacity,FlatList,Image,View as view} from 'react-native';
import tw from 'twrnc'
import { Text, View, SafeAreaView } from './Themed';
import { Ionicons,Feather,FontAwesome } from '@expo/vector-icons'
import { useRouter, Link } from 'expo-router';
import { useState,useEffect,useRef } from 'react';
import { useActions} from '../hooks/actionsModule';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import AuthBottomSheet from './bottomSheets/authBottomSheet'
import { wallets } from './data';
import Colors from '../constants/Colors';
import { dispatchActions } from './dataTypes';
import { Nunito } from './StyledText';
import {exchangePairs} from './data'
import { useLocalAuth } from '../hooks/useLocalAuth';
import { useNavigation } from '@react-navigation/native';



type pair = {name:string;baseImg:any;quoteImg:any;base:string;quote:string}

const addOrdersTab = () => {
    const sheetRef = useRef<BottomSheetMethods>(null);

   const navigation = useNavigation();
    const {state,dispatch} = useActions()
    const [pair, setPair] = useState<pair>()
    const [isLoading, setLoader] = useState(false)
   const [OrderState, setOrderState] = useState('active')
    const [orderType, setOrderType] = useState('Buy')
    const [Amount, setAmount] = useState('9000');
    const [Price, setPrice] = useState('1200');



    const showTabBar = () => {
        navigation.setOptions({
          tabBarStyle: { display: 'flex', backgroundColor:Colors.light.vyreBlue }
        });
      };
    
      const hideTabBar = () => {
        navigation.setOptions({
          tabBarStyle: { display: 'none' },
        });
      };
    
      const openBottomSheet = (action:string) => {
        // setAction(action)
        hideTabBar()
        sheetRef.current?.open();
      };
    
      const closeBottomSheet = () => {
        showTabBar()
        sheetRef.current?.close();
      };

      const init = async(action:dispatchActions|any)=>{
        setLoader(true)
    
        try {
         const response = await useLocalAuth()
    
          if(response?.success){
            setLoader(false)
            closeBottomSheet()
            setOrderState('loading')
            const result = dispatch({type:action})
            setOrderState('finished')
          } else{
            console.log(response)
          }
    
        } catch (error) {
          
        }
        
      }


  return (
        <SafeAreaView style={[{flex:1},tw`w-full px-2`]}>

            <View style={tw`flex flex-row items-center justify-between mb-2 px-2`}>

                <View style={tw`flex flex-row `}>
                    <TouchableOpacity style={[{borderRadius:50},tw`w-16 border-2 mr-2 flex flex-row items-center`]}>
                        <Image
                        style={[{aspectRatio:1,resizeMode:'cover',borderRadius:50},tw`bg-transparent w-full`]}
                        source={pair?.baseImg ?? require('../assets/images/assets/unitedstates.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={[{marginLeft:-30,borderRadius:50},tw`w-16 border-2 mr-2 flex flex-row items-center`]}>
                        <Image
                        style={[{aspectRatio:1,resizeMode:'cover',borderRadius:50},tw` bg-transparent w-full`]}
                        source={pair?.quoteImg ?? require('../assets/images/assets/nigeria.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={tw`flex items-center justify-center`}>
                    <Nunito style={[{fontSize:40,fontWeight:'bold',textTransform:'capitalize'},tw``]}>{orderType}</Nunito>

                    <Text style={tw`font-bold text-center text-lg`} darkColor='black'>{pair?.name ?? 'USD/NGN'}</Text>
                </View>

            </View>

            <View style={tw` h-0.5 bg-gray-300 mx-4`}></View>

            {OrderState == 'active'?(<ScrollView style={tw`w-full px-2`}>
                <View style={[{},tw`w-full bg-transparent mt-4 mx-2 px-2`]}>
                    <FlatList
                        data={exchangePairs}
                        horizontal
                        renderItem={({item}) => (
                        <TouchableOpacity onPress={()=>{setPair(item)}} style={[styles.IosBoxShadow,styles.androidBoxShadow,tw`bg-white rounded-2xl mx-1 mb-2`]} >
                            <View style={[tw`bg-transparent flex items-center rounded-xl px-1 py-1 mx-1`]}>
                            <View style={tw`bg-transparent py-1`}>
                                <Text numberOfLines={1} style={tw`font-bold text-xs text-gray-500`}>{item?.name}</Text>
                            </View>
                            </View>
                        </TouchableOpacity>
                    
                        )}
                        contentContainerStyle={[{columnGap:7},tw`mt-2`]}
                    />
                        
                </View>

                <View style={tw`w-full flex flex-row justify-start items-center mt-2 px-1`}>
                    <Text style={[{fontFamily:'normal'},tw`font-extrabold text-2xl`]}>
                        OrderType:
                    </Text>
                    <View style={tw`flex flex-row justify-center items-center mx-2`}>
                        <TouchableOpacity onPress={()=>{setOrderType('Buy')}} style={[{backgroundColor:Colors.light.vyreGreen},styles.IosBoxShadow,styles.androidBoxShadow,tw`rounded-2xl mx-1 mb-2`]} >
                            <View style={[tw`bg-transparent flex items-center rounded-xl px-3 py-1 mx-1`]}>
                                <View style={tw`bg-transparent py-1`}>
                                    <Text numberOfLines={1} style={tw`font-bold text-sm text-white`}>{'Buy'}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{setOrderType('Sell')}} style={[{backgroundColor:Colors.light.vyreBlue},styles.IosBoxShadow,styles.androidBoxShadow,tw`rounded-2xl mx-1 mb-2`]} >
                            <View style={[tw`bg-transparent flex items-center rounded-xl px-3 py-1 mx-1`]}>
                                <View style={tw`bg-transparent py-1`}>
                                    <Text numberOfLines={1} style={tw`font-bold text-sm text-white`}>{'Sell'}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={tw`w-full bg-white rounded-2xl my-4 py-4 px-2 flex border flex-row justify-center items-center`}>
                    <Text style={tw`font-bold text-center mx-4 text-lg`} darkColor='black'>{'Price'}</Text>
                    <View style={tw`w-3/5 bg-gray-100 h-12 flex flex-row items-center px-2 rounded-xl`}>
                        <TextInput
                            style={tw`bg-transparent w-9/12 h-full font-bold text-xl`}
                            textAlign='right'
                            placeholder="enter price"
                            keyboardType="numeric"
                            value={Price}
                            inputMode='numeric'
                            onChangeText={setPrice}
                        />
                        <Text style={tw`font-bold text-center mx-2 text-lg`} darkColor='black'>{pair?.quote ?? 'NGN'}</Text>
                    </View>
                </View>
                <Text style={tw`text-center mx-2 text-xs`} darkColor='black'>{`Price you are willing to ${orderType} at`}</Text>

                <View style={tw`w-full bg-white rounded-2xl my-4 py-4 px-2 flex border flex-row justify-center items-center`}>
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
                        <Text style={tw`font-bold text-center mx-2 text-lg`} darkColor='black'>{pair?.base ?? 'USD'}</Text>
                    </View>
                </View>
                <Text style={tw`text-center mx-2 text-xs`} darkColor='black'>{`Amount you want to ${orderType}`}</Text>

                <View style={[,tw`w-full flex flex-row justify-between items-center px-2 py-2`]}>
                    <TouchableOpacity onPress={()=>{}} style={[{backgroundColor:'black'},tw`mt-2 w-2/6 px-4 py-2.5 rounded-2xl flex items-center justify-center`]}>
                        <Text style={tw`font-bold text-center text-white text-sm`}>{'Cancel'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{openBottomSheet('CREATE_ORDER')}} style={[{backgroundColor:Colors.light.vyreGreen},tw`mt-2 w-3/5 px-4 py-2 rounded-2xl flex items-center justify-center`]}>
                        <Text style={tw`font-bold text-center text-white text-lg`}>{'Confirm Order'}</Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>):

            OrderState == 'loading' ? (<ActivityIndicator size={42} color={'black'}/>):

            (<View style={tw`w-full flex items-center justify-center mt-16`}>
            
                    <TouchableOpacity style={tw`w-1/2 mr-2 flex flex-row items-center`}>
                    <Image
                        style={[{aspectRatio:1,resizeMode:'cover'},tw`bg-transparent w-full`]}
                        source={require('../assets/images/tick.png')}
                    />
                    </TouchableOpacity>
                    
                    <View style={[,tw`w-full mt-4 flex flex-row justify-center items-center px-2 py-2`]}>
                    <TouchableOpacity onPress={()=>{setOrderState('active')}} style={[{backgroundColor:Colors.light.vyreGreen},tw`mt-2 w-4/5 px-4 py-2 rounded-2xl flex items-center justify-center`]}>
                        <Text style={tw`font-bold text-center text-white text-lg`}>{'Close'}</Text>
                    </TouchableOpacity>
                    </View>
            </View>)}


            <BottomSheet ref={sheetRef} animationType='spring' height={'70%'}>
                <AuthBottomSheet action={'CREATE_ORDER'} isLoading={isLoading} initAuth={init}/>
            </BottomSheet>

        </SafeAreaView>
  )
}

export default addOrdersTab

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