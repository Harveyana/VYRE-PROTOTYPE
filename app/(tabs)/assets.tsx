import { StyleSheet,StatusBar,ScrollView,TextInput,TouchableOpacity,Image} from 'react-native';
import tw from 'twrnc'
// import { Link, Tabs } from 'expo-router';
import { Text, View, SafeAreaView } from '../../components/Themed';
import { Ionicons,SimpleLineIcons,FontAwesome } from '@expo/vector-icons'
import { useEffect,useRef,useCallback, useState} from 'react';
import Colors from '../../constants/Colors';

import { useRouter } from 'expo-router';
import AssetList from '../../components/AssetList';
import { ActionsProvider,useActions } from '../../hooks/actionsModule';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import CreateAssetbottomSheet from '../../components/bottomSheets/createAssetbottomSheet';


export default function cart() {
  const router = useRouter()
  const {state} = useActions()
  const sheetRef = useRef<BottomSheetMethods>(null);

  const closeSheet =()=>{
    sheetRef.current?.close()
  }

  return (
    
    <SafeAreaView style={[styles.container,tw`w-full`]}>
        <View style={[{backgroundColor:Colors.light.TabBar,paddingTop:StatusBar.currentHeight,flex:1},tw`w-full`]}>
          <View style={tw`bg-transparent pt-2 flex flex-row justify-between mx-4 mb-4`}>
            
            <TouchableOpacity onPress={()=>{sheetRef.current?.open()}} style={[{backgroundColor:Colors.light.background},tw`px-3 flex rounded-2xl justify-center items-center`]}>
              <Text style={[{fontSize:14},tw``]}>
                Add asset
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={tw`w-10 border border-white flex flex-row rounded-xl justify-center items-center bg-transparent`}>
              <Image
                style={[{aspectRatio:1,resizeMode:'cover'},tw` rounded-xl bg-transparent w-full`]}
                source={require('../../assets/images/people/lady.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={tw`flex flex-row items-center justify-center bg-transparent`}>
              <TouchableOpacity style={tw` flex rounded-xl justify-center items-center bg-transparent`}>
                <Text style={[{fontFamily:'normal'},tw`text-white font-extrabold text-2xl`]}>
                    $ {'2,5476.60'}
                </Text>
                <Text style={[{fontSize:8},tw`text-gray-100`]}>
                  Available Balance
                </Text>
              </TouchableOpacity>
          </View>
          <View style={[{backgroundColor:Colors.light.background,flex:1,borderTopRightRadius: 30},tw`mt-4 pb-2`]}>

            <View style={tw`flex flex-row justify-center items-center bg-transparent mx-2 my-3`}>
              <TouchableOpacity style={[{backgroundColor:Colors.light.vyreGreen},tw`mx-2 rounded-xl flex flex-row justify-center items-center px-2 py-2`]} onPress={()=>{}}>
                <Text style={[{fontSize:14},tw`text-gray-100`]}>
                  fiat
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[{backgroundColor:Colors.light.vyreGreen},tw`mx-2 rounded-xl flex flex-row justify-center items-center px-2 py-2`]} onPress={()=>{}}>
                <Text style={[{fontSize:14},tw`text-gray-100`]}>
                  crypto
                </Text>
              </TouchableOpacity>
            </View>
            <View style={tw` h-0.5 bg-gray-300 mx-4`}></View>

            <ScrollView nestedScrollEnabled style={tw`w-full px-2`}>
              <AssetList/>
            </ScrollView>

            <View style={tw`bg-transparent w-full flex flex-row items-center justify-center px-4`}>
              <TouchableOpacity onPress={()=>{sheetRef.current?.open()}} style={[{backgroundColor:Colors.light.vyreGreen},tw`w-1/2 flex flex-row items-center justify-center my-2 px-2 py-2 rounded-xl`]}>
                <Text style={[{fontSize:18},tw`font-bold text-white`]}>
                  Add assets
                </Text>
              </TouchableOpacity>
            </View>


            <BottomSheet closeOnDragDown={false} closeOnBackdropPress={false} ref={sheetRef} animationType='spring' height={'70%'}>
              <CreateAssetbottomSheet closeSheet={closeSheet}/>
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