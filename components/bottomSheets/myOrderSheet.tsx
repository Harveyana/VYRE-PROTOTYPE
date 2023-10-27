import { StyleSheet,ActivityIndicator,Button,ScrollView,TextInput,TouchableOpacity,Image,} from 'react-native';
import tw from 'twrnc'
import { Text, View, SafeAreaView } from '../Themed';
import { Ionicons,Feather,FontAwesome } from '@expo/vector-icons'
import { useState,useEffect,useRef } from 'react';
import { useActions} from '../../hooks/actionsModule';
import { useLocalAuth } from '../../hooks/useLocalAuth';
import Colors from '../../constants/Colors';
import {styles} from '../../constants/Colors'
import { MonoText,Nunito,Textlight } from '../StyledText';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import AuthBottomSheet from './authBottomSheet'
import { useNavigation } from '@react-navigation/native';
import { dispatchActions,allActions } from '../dataTypes';


type order = {
  exchangePair: string;
  orderType:string;
  base:string;
  quote:string;
  price:number;
  amount:number;
  baseImg:any;
  quoteImg:any;
  percentageProcess:number
  closeOrder:()=> void
}

export default function myOrdersheet({closeOrder,...item}:order) {
  const sheetRef = useRef<BottomSheetMethods>(null);

  const{dispatch,state}= useActions()
  const navigation = useNavigation();
  const [isLoading, setLoader] = useState(false)
  const [OrderState, setOrderState] = useState('active')
  const [action, setAction] = useState<any>('SUSPEND_ORDER')

  
  const showTabBar = () => {
    navigation.setOptions({
      tabBarStyle: { display: 'flex', backgroundColor:Colors.light.vyreBlue, height:70 }
    });
  };

  const hideTabBar = () => {
    navigation.setOptions({
      tabBarStyle: { display: 'none' },
    });
  };

  const openBottomSheet = (action:string) => {
    setAction(action)
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
    <SafeAreaView style={[{backgroundColor:Colors.light.background,flex:1},tw`w-full px-2 py-2`]}>
      
      {OrderState == 'active'?(<ScrollView style={tw`w-full px-2`}>
        <View style={tw`flex flex-row items-center justify-between mb-2`}>

          <View style={tw`flex flex-row `}>
            <TouchableOpacity style={[{borderRadius:50},tw`w-16 border-2 mr-2 flex flex-row items-center`]}>
              <Image
                style={[{aspectRatio:1,resizeMode:'cover',borderRadius:50},tw`bg-transparent w-full`]}
                source={item.baseImg}
              />
            </TouchableOpacity>

            <TouchableOpacity style={[{marginLeft:-30,borderRadius:50},tw`w-16 border-2 mr-2 flex flex-row items-center`]}>
              <Image
                style={[{aspectRatio:1,resizeMode:'cover',borderRadius:50},tw` bg-transparent w-full`]}
                source={item.quoteImg}
              />
            </TouchableOpacity>
          </View>

          <View style={tw`flex items-center justify-center`}>
            <Nunito style={[{fontSize:40,fontWeight:'bold',textTransform:'capitalize'},tw``]}>{item.orderType}</Nunito>

            <Text style={tw`font-bold text-center text-lg`} darkColor='black'>{item.exchangePair}</Text>
          </View>

        </View>
        <View style={tw`h-0.5 bg-gray-300 mx-4`}></View>

        <View style={[{...styles.IosBoxShadow,...styles.androidBoxShadow},tw`w-full bg-white rounded-2xl flex items-center justify-center mt-2 my-2 px-2`]}>

          <View style={[{...styles.IosBoxShadow,...styles.androidBoxShadow},tw`w-full bg-white rounded-xl flex flex-row justify-between items-center px-2 py-2 mt-2`]}>

            <Nunito style={tw`font-bold text-center mx-2 text-lg`} darkColor='black'>{' Processed Amount'}</Nunito>
            <View style={[{...styles.IosBoxShadow,...styles.androidBoxShadow},{backgroundColor:Colors.light.vyreGreen},tw`flex flex-row rounded-2xl`]}>
              <Text style={[{},tw`font-bold text-white text-center mx-2 text-lg`]}>{item.percentageProcess}{'%'}</Text>
            </View>

          </View>

          <View style={tw`w-full bg-transparent my-2 flex flex-row justify-center items-center`}>
            <Text style={tw`font-bold text-center mx-2 text-lg`} darkColor='black'>{'Price'}</Text>
            <View style={tw`w-3/5 bg-gray-100 h-12 flex flex-row items-center px-2 rounded-xl`}>
              <TextInput
                style={tw`bg-transparent mr-2 text-black w-8/12 h-full font-bold text-xl`}
                textAlign='right'
                placeholder="enter Amount"
                keyboardType="numeric"
                // readOnly
                value={`${item.price}`}
                inputMode='numeric'
              />
              <Text style={tw`font-bold text-center mx-2 text-lg`} darkColor='black'>{item.quote}</Text>

            </View>
          </View>

          <View style={tw`w-full bg-transparent my-2 flex flex-row justify-center items-center`}>
            <Text style={tw`font-bold text-center mx-2 text-lg`} darkColor='black'>{'Amount'}</Text>
            <View style={tw`w-3/5 bg-gray-100 h-12 flex flex-row items-center px-4 rounded-xl`}>
              <TextInput
                style={tw`bg-transparent mr-2 text-black w-8/12 h-full font-bold text-xl`}
                textAlign='right'
                placeholder="enter Amount"
                keyboardType="numeric"
                value={`${item.amount}`}
                // readOnly
                inputMode='numeric'
              />
              <Text style={tw`font-bold text-center text-lg`} darkColor='black'>{item.base}</Text>

            </View>
          </View>


        </View>
        
        <View style={[,tw`w-full flex flex-row justify-between items-center px-2 py-2`]}>
          <TouchableOpacity onPress={()=>{openBottomSheet('DELETE_ORDER');}} style={[{backgroundColor:'black'},tw`mt-2 w-2/6 px-4 py-2.5 rounded-2xl flex items-center justify-center`]}>
            <Text style={tw`font-bold text-center text-white text-sm`}>{'Delete'}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{openBottomSheet('SUSPEND_ORDER')}} style={[{backgroundColor:Colors.light.vyreGreen},tw`mt-2 w-3/5 px-4 py-2 rounded-2xl flex items-center justify-center`]}>
            <Text style={tw`font-bold text-center text-white text-lg`}>{'Suspend Order'}</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>):

      OrderState == 'loading' ? (<ActivityIndicator size={42} color={'black'}/>): 

       (<View style={tw`w-full flex items-center justify-center mt-16`}>
            
            <TouchableOpacity style={tw`w-1/2 mr-2 flex flex-row items-center`}>
              <Image
                style={[{aspectRatio:1,resizeMode:'cover'},tw`bg-transparent w-full`]}
                source={require('../../assets/images/tick.png')}
              />
            </TouchableOpacity>
            
            <View style={[,tw`w-full mt-4 flex flex-row justify-center items-center px-2 py-2`]}>
              <TouchableOpacity onPress={()=>{closeOrder(); setOrderState('active')}} style={[{backgroundColor:Colors.light.vyreGreen},tw`mt-2 w-4/5 px-4 py-2 rounded-2xl flex items-center justify-center`]}>
                <Text style={tw`font-bold text-center text-white text-lg`}>{'Close'}</Text>
              </TouchableOpacity>
            </View>
      </View>)}

      <BottomSheet ref={sheetRef} animationType='spring' height={'70%'}>
          <AuthBottomSheet action={action} isLoading={isLoading} initAuth={init}/>
      </BottomSheet>

    </SafeAreaView>
  );
}