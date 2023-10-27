import { ActivityIndicator, StyleSheet,StatusBar,ScrollView,TextInput,TouchableOpacity,FlatList,Image } from 'react-native';
import tw from 'twrnc'
import { Text, View, SafeAreaView } from '../components/Themed';
import { Ionicons,FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router';
import Colors from '../constants/Colors';

type btns = {
    name:string;
    icon: any;
    colour:string
    url:string
}

const data:btns[] = [
        { name:'send',
          icon:require('../assets/images/send.png'),
          colour:Colors.light.VyreYellow,
          url:'sendAsset'
        },
        { name:'recieve',
          icon:require('../assets/images/receive.png'),
          colour:Colors.light.vyreGreen,
          url:'sendAsset'
        },
        { name:'p2p',
          icon:require('../assets/images/peer-to-peerDark.png'),
          colour:Colors.light.VyreLemon,
          url:'exchange'
        },
        { name:'Utilities',
          icon:require('../assets/images/bill.png'),
          colour:Colors.light.vyreBlue,
          url:'exchange'
        }
    ]
const slideBtns = () => {

  const router = useRouter()

  return (
    <View style={[{},tw`bg-transparent relative pt-2 mx-2`]}>
            <FlatList
                data={data}
                horizontal
                renderItem={({item}) => (
                    <TouchableOpacity style={[styles.IosBoxShadow,styles.androidBoxShadow,tw`bg-white rounded-3xl mb-2`]} onPress={()=>{router.push(`/${item.url}`)}}>
                        <View style={[tw`w-24 bg-transparent flex items-center rounded-xl mt-2 px-2 py-1 mx-1`]}>
                            <View style={[{backgroundColor:item.colour},tw`w-12 flex flex-row rounded-xl justify-center items-center px-2 py-2`]}>
                                <Image
                                    style={[{aspectRatio:1,resizeMode:'cover'},tw` w-full `]}
                                    source={item.icon}
                                />
                            </View>
                            <View style={tw`bg-transparent py-2`}>
                                <Text numberOfLines={1} style={tw`font-bold text-gray-500`}>{item.name}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
        
                )}
                contentContainerStyle={[{columnGap:16},tw`mt-4`]}
            />
            
    </View>
  )
}

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

export default slideBtns

