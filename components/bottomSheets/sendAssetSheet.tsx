
import { Text, View } from '../Themed';
import { useEffect,useRef,useState} from 'react';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import { StyleSheet,StatusBar,ScrollView,TextInput,ActivityIndicator,TouchableOpacity,Image} from 'react-native';
import { Ionicons,SimpleLineIcons,FontAwesome } from '@expo/vector-icons'
import tw from 'twrnc'
// import NewAssetList from '../newAssetList';
import TransferTypeList from '../transferTypeList';
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { useLocalAuth } from '../../hooks/useLocalAuth';
import { useActions} from '../../hooks/actionsModule';
import AuthBottomSheet from './authBottomSheet'
import { wallet } from '../data';

type param = {
  closeSheet:()=>void,
  assetype:{type:string,ISO:string}
}

export default function sendAssetSheet({closeSheet,assetype}:param) {

  const sheetRef = useRef<BottomSheetMethods>(null);

  const{dispatch,state}= useActions()
  const navigation = useNavigation();
  const [isLoading, setLoader] = useState(false)
  const [OrderState, setOrderState] = useState('active')

  const showTabBar = () => {
    navigation.setOptions({
      tabBarStyle: { display: 'flex', backgroundColor:Colors.light.vyreBlue, height:70  },
    });
  };

  const hideTabBar = () => {
    navigation.setOptions({
      tabBarStyle: { display: 'none' },
    });
  };

  const openBottomSheet = () => {
    hideTabBar()
    sheetRef.current?.open();
  };

  const closeBottomSheet = () => {
    showTabBar()
    sheetRef.current?.close();
  };


  const init = async(action:string)=>{
    setLoader(true)

    try {
     const response = await useLocalAuth()

      if(response?.success){
        setLoader(false)
        closeBottomSheet()
        setOrderState('loading')
        const result = dispatch({type:'CREATE_WALLET'})
        setOrderState('finished')
      } else{
        console.log(response)
      }

    } catch (error) {
      
    }
    
  }


  return (<>
          <View style={tw`px-4`}>
            <TouchableOpacity onPress={() => { } } style={tw`flex flex-row items-center justify-between`}>
              <Text style={[{ fontFamily: 'normal' }, tw`font-extrabold text-2xl`]}>
                Select transfer type
              </Text>

              <TouchableOpacity onPress={()=>{closeSheet(); setOrderState('active')}} style={[tw`rounded-xl`]}>
                <Ionicons style={tw`px-1 py-1 rounded-xl mx-1`} name="close" size={28} color="black" />
              </TouchableOpacity>

            </TouchableOpacity>
            <Text>
              where are you sending asset to?
            </Text>
            <View style={tw` h-0.5 bg-gray-300 mt-2`}></View>

          </View>
          <ScrollView>
            <TransferTypeList assetype={assetype} openSheet={openBottomSheet} />
          </ScrollView>

          

          <BottomSheet ref={sheetRef} animationType='spring' height={'70%'}>
              <AuthBottomSheet action={'CREATE_WALLET'} isLoading={isLoading} initAuth={init}/>
          </BottomSheet>
  
  </>
              
                  
  );
}


