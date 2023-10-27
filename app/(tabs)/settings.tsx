import { StyleSheet,StatusBar,ScrollView,TextInput,TouchableOpacity,Image} from 'react-native';
import tw from 'twrnc'
// import { Link, Tabs } from 'expo-router';
import { Text, View, SafeAreaView } from '../../components/Themed';
import { Ionicons,SimpleLineIcons,FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router';
// import CartList from '../../components/AssetList';
import { ActionsProvider,useActions } from '../../hooks/actionsModule';
import { styles as defaultStyle } from '../../constants/Colors';
import Colors from '../../constants/Colors';


export default function profile() {
  const router = useRouter()
  const {state} = useActions()

  return (
    <SafeAreaView style={[styles.container, {marginTop: StatusBar.currentHeight},tw``]} darkColor="black">
        
        
      <ScrollView style={[tw`w-full px-2`]}>
        <View style={tw`w-full flex flex-row items-center justify-center mt-32`}>
          <Image
            style={[{aspectRatio:1,resizeMode:'contain'},tw`rounded-3xl opacity-75 h-72 w-4/5`]}
            source={require('../../assets/images/Saly6.png')}
          />
        </View>
        <View style={tw`w-full px-4 flex items-center justify-center `}>
        <TouchableOpacity style={[{...defaultStyle.IosBoxShadow,...defaultStyle.androidBoxShadow},tw`w-full bg-white my-2 px-4 py-2 rounded-3xl`]} onPress={()=>{}}>
                        <View style={[tw`w-full flex flex-row justify-between bg-transparent rounded-xl px-2.5 py-2`]}>

                            <View style={tw`flex flex-row bg-transparent`}>
                                
                                <View style={tw`bg-transparent`}>
                                    <Text numberOfLines={1} style={tw`font-bold text-lg`} darkColor='black'>{'Assets'}</Text>
                                </View> 

                            </View>

                            <View style={tw`px-2 ml-2 bg-transparent flex flex-row justify-center items-center`}>

                                <TouchableOpacity onPress={()=>{}} style={[{backgroundColor:Colors.light.vyreBlue},tw`rounded-xl`]}>
                                 <Ionicons style={tw`w-6 px-1 py-1 rounded-xl mx-1`} name="arrow-forward" size={16} color="white" />
                                </TouchableOpacity>

                            </View>
        
                        </View>
        </TouchableOpacity>

        <TouchableOpacity style={[{...defaultStyle.IosBoxShadow,...defaultStyle.androidBoxShadow},tw`w-full bg-white my-2 px-4 py-2 rounded-3xl`]} onPress={()=>{}}>
                        <View style={[tw`w-full flex flex-row justify-between bg-transparent rounded-xl px-2.5 py-2`]}>

                            <View style={tw`flex flex-row bg-transparent`}>
                                
                                <View style={tw`bg-transparent`}>
                                    <Text numberOfLines={1} style={tw`font-bold text-lg`} darkColor='black'>{'Currency'}</Text>
                                </View> 

                            </View>

                            <View style={tw`px-2 ml-2 bg-transparent flex flex-row justify-center items-center`}>

                                <TouchableOpacity onPress={()=>{}} style={[{backgroundColor:Colors.light.vyreBlue},tw`rounded-xl`]}>
                                 <Ionicons style={tw`w-6 px-1 py-1 rounded-xl mx-1`} name="arrow-forward" size={16} color="white" />
                                </TouchableOpacity>

                            </View>
        
                        </View>
        </TouchableOpacity>

        <TouchableOpacity style={[{...defaultStyle.IosBoxShadow,...defaultStyle.androidBoxShadow},tw`w-full bg-white my-2 px-4 py-2 rounded-3xl`]} onPress={()=>{}}>
                        <View style={[tw`w-full flex flex-row justify-between bg-transparent rounded-xl px-2.5 py-2`]}>

                            <View style={tw`flex flex-row bg-transparent`}>
                                
                                <View style={tw`bg-transparent ml-4`}>
                                    <Text numberOfLines={1} style={tw`font-bold text-lg`} darkColor='black'>{'Country'}</Text>
                                </View> 

                            </View>

                            <View style={tw`px-2 ml-2 bg-transparent flex flex-row justify-center items-center`}>

                                <TouchableOpacity onPress={()=>{}} style={[{backgroundColor:Colors.light.vyreBlue},tw`rounded-xl`]}>
                                 <Ionicons style={tw`w-6 px-1 py-1 rounded-xl mx-1`} name="arrow-forward" size={16} color="white" />
                                </TouchableOpacity>

                            </View>
        
                        </View>
        </TouchableOpacity>


        <TouchableOpacity style={[{...defaultStyle.IosBoxShadow,...defaultStyle.androidBoxShadow},tw`w-full bg-white my-2 px-4 py-2 rounded-3xl`]} onPress={()=>{}}>
                        <View style={[tw`w-full flex flex-row justify-between bg-transparent rounded-xl px-2.5 py-2`]}>

                            <View style={tw`flex flex-row bg-transparent`}>
                                
                                <View style={tw`bg-transparent ml-4`}>
                                    <Text numberOfLines={1} style={tw`font-bold text-lg`} darkColor='black'>{'Beneficiaries'}</Text>
                                </View> 

                            </View>

                            <View style={tw`px-2 ml-2 bg-transparent flex flex-row justify-center items-center`}>

                                <TouchableOpacity onPress={()=>{}} style={[{backgroundColor:Colors.light.vyreBlue},tw`rounded-xl`]}>
                                 <Ionicons style={tw`w-6 px-1 py-1 rounded-xl mx-1`} name="arrow-forward" size={16} color="white" />
                                </TouchableOpacity>

                            </View>
        
                        </View>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll:{
    alignItems:'center',
    justifyContent:'center'
  }
});