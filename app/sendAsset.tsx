import { StyleSheet,StatusBar,ScrollView,TextInput,TouchableOpacity,Image} from 'react-native';
import tw from 'twrnc'
// import { Link, Tabs } from 'expo-router';
import { Text, View, SafeAreaView } from '../components/Themed';
import { Ionicons,SimpleLineIcons,FontAwesome } from '@expo/vector-icons'
import { useEffect,useRef,useCallback, useState} from 'react';
import Colors from '../constants/Colors';

import { useRouter } from 'expo-router';
import SendAssetList from '../components/sendAssetList';
import { ActionsProvider,useActions } from '../hooks/actionsModule';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import SendAssetSheet from '../components/bottomSheets/sendAssetSheet';
import { wallet } from '../components/data';


export default function cart() {
  const router = useRouter()
  const {state} = useActions()
  const sheetRef = useRef<BottomSheetMethods>(null);
  const [assetype, setAssetype] = useState({type:'fiat',ISO:'NGN'})

  const closeSheet =()=>{
    sheetRef.current?.close()
  }

  const openSheet = ()=>{
    sheetRef.current?.open()
  }

  const init = (asset:wallet)=>{
    setAssetype({type:asset.type,ISO:asset.abb})
    openSheet()
  }

  return (
    
    <SafeAreaView style={[styles.container,tw`w-full`]}>
        <View style={[{backgroundColor:Colors.light.TabBar,paddingTop:StatusBar.currentHeight,flex:1},tw`w-full`]}>
          <View style={tw`bg-transparent pt-2 flex flex-row justify-between mx-4 mb-4`}>
            
            <TouchableOpacity onPress={()=>(router.back())} style={[{backgroundColor:Colors.light.background},tw`px-3 flex rounded-2xl justify-center items-center`]}>
              <Ionicons style={tw`w-6 px-1 py-1 rounded-xl mx-1`} name="arrow-back" size={20} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={tw`w-10 border border-white flex flex-row rounded-xl justify-center items-center bg-transparent`}>
              <Image
                style={[{aspectRatio:1,resizeMode:'cover'},tw` rounded-xl bg-transparent w-full`]}
                source={require('../assets/images/people/lady.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={tw`flex flex-row items-center justify-center bg-transparent`}>
              <TouchableOpacity style={tw` flex rounded-xl justify-center items-center bg-transparent`}>
                <Text style={[{fontFamily:'normal'},tw`text-white font-extrabold text-3xl`]}>
                    {'Send Asset'}
                </Text>
                <Text style={[{fontSize:12},tw`text-gray-100`]}>
                  Select asset to send
                </Text>
              </TouchableOpacity>
          </View>
          <View style={[{backgroundColor:Colors.light.background,flex:1,borderTopRightRadius: 30},tw`mt-4 pb-2`]}>

            <View style={tw`flex flex-row justify-center items-center bg-transparent mx-2 my-3`}>
              <TouchableOpacity style={[{backgroundColor:Colors.light.vyreGreen},tw`mx-2 rounded-xl flex flex-row justify-center items-center px-2 py-2`]} onPress={()=>{router.push('/newArrivalProducts')}}>
                <Text style={[{fontSize:14},tw`text-gray-100`]}>
                  fiat
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[{backgroundColor:Colors.light.vyreGreen},tw`mx-2 rounded-xl flex flex-row justify-center items-center px-2 py-2`]} onPress={()=>{router.push('/newArrivalProducts')}}>
                <Text style={[{fontSize:14},tw`text-gray-100`]}>
                  crypto
                </Text>
              </TouchableOpacity>
            </View>
            <View style={tw` h-0.5 bg-gray-300 mx-4`}></View>

            <ScrollView nestedScrollEnabled style={tw`w-full px-2`}>
              <SendAssetList setAsset={init}/>
            </ScrollView>

            <BottomSheet ref={sheetRef} animationType='spring' height={'70%'}>
              <SendAssetSheet assetype={assetype} closeSheet={closeSheet}/>
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
  }
});