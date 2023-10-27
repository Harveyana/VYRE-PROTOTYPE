
import { Text, View } from '../Themed';
import { useEffect,useRef,useState} from 'react';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import { StyleSheet,StatusBar,ScrollView,TextInput,TouchableOpacity,ActivityIndicator,Image} from 'react-native';
import tw from 'twrnc'
import { Ionicons,SimpleLineIcons,FontAwesome } from '@expo/vector-icons'
import NewAssetList from '../newAssetList';
import * as LocalAuthentication from 'expo-local-authentication';
import { useActions} from '../../hooks/actionsModule';
import { useLocalAuth } from '../../hooks/useLocalAuth';

type param = {
  isLoading:boolean;
  initAuth:(action:string)=> void,
  action:string
}

export default function createAssetBottomSheet({isLoading,initAuth,action}:param) {
  // const [isLoading, setLoader] = useState(false)
  // const {dispatch} = useActions()

  // const checker = async()=>{
  //     setLoader(true)

  //     const response = await useLocalAuth()
  //     if(response?.success){
  //       // do this
  //     }else{console.log(response)
  //     }
  // }

  return (
        <>
          <View style={[{flex:1},tw`px-4 flex justify-center items-center`]}>
            <TouchableOpacity onPress={()=>{initAuth(action)}}>
              <Ionicons style={tw`w-full px-1 py-1 rounded-3xl mx-1`} name="finger-print" size={220} color="black" />
            </TouchableOpacity>

            {isLoading ? (<ActivityIndicator size={32} color={'black'}/>): 
            (<View style={tw` h-0.5 bg-gray-300 mt-2`}></View>)}

            <Text style={tw`text-xl`}>
             Let's Confirm its You, Click to authenticate
            </Text>      
          </View>

          {/* <ScrollView>
            <NewAssetList/>
          </ScrollView> */}
  
        </>
              
                  
  );
}


