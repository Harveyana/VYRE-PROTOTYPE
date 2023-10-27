import { StyleSheet,StatusBar,ScrollView,TextInput,TouchableOpacity,Image,FlatList,ActivityIndicator} from 'react-native';
import tw from 'twrnc'
// import { Link, Tabs } from 'expo-router';
import { Text, View, SafeAreaView } from '../components/Themed';
import { Ionicons,Feather,FontAwesome } from '@expo/vector-icons'
import { useRouter,useLocalSearchParams } from 'expo-router';
import { useState,useRef } from 'react';
import Colors from '../constants/Colors';
import { styles as defaultStyle } from '../constants/Colors';
import { ActionsProvider,useActions } from '../hooks/actionsModule';
import { Countries } from '../components/data';


export default function Auth() {
  
  const {dispatch} = useActions()
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [password, setPassWord] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('Login');
  const [loader, setLoader] = useState(false);

  const initSignUp = async () => {
    setLoader(true);
  
    if (FirstName && email && LastName && password && country) {
      try {
        const response = await dispatch({
          type: 'CREATE_USER',
          payload: { email, password, FirstName, LastName, country },
        });
  
        if (response instanceof Error) {
          // Handle the error, e.g., show an alert
          console.error('Error during user creation:', response.message);
        } else {
          // User creation was successful
          console.log('User created:', response);
          setLoader(false);
        }
      } catch (error) {
        // Handle unexpected errors
        console.error('An error occurred:', error);
        setLoader(false);
      }
    } else {
      setLoader(false);
      alert('Please check the details');
    }
  };

  const initLogin = async()=>{
    setLoader(true);
    if (email && password){
      const response = await dispatch({
        type: 'LOGIN_USER',
        payload: { email, password },
      });

      if (response instanceof Error) {
        // Handle the error, e.g., show an alert
        console.error('Error during user creation:', response.message);
      } else {
        // User creation was successful
        console.log('User created:', response);
        setLoader(false);
      }

    }else{
      setLoader(false);
      alert('Please check the details');
    }
  }



  return (
    <SafeAreaView style={[{paddingTop:StatusBar.currentHeight},styles.container,tw`w-full`]}>
         <TouchableOpacity style={tw`w-full mt-6 flex flex-row rounded-xl justify-center items-center bg-transparent`}>
              <Image
                style={[{aspectRatio:1,resizeMode:'cover'},tw` rounded-xl bg-transparent w-2/5`]}
                source={require('../assets/images/Saly11.png')}
              />
          </TouchableOpacity>
          <Text style={tw`font-bold text-2xl text-gray-500 my-2`}>{'Login Or Register'}</Text>
          
        <ScrollView style={tw`w-full px-2 py-4 `}>

          {/* Register */}

          { state === 'SignUp' ? (<View style={[styles.IosBoxShadow,styles.androidBoxShadow,tw`w-full flex items-center justify-center rounded-3xl bg-white my-2 px-2 py-2 mb-8`]}>

            <View style={tw`w-full flex items-start justify-start px-4 bg-gray-100 rounded-xl my-2`}>
              <Text style={tw`font-bold text-sm text-gray-500 my-2`}>{'First Name'}</Text>
              <TextInput
                style={tw`bg-transparent w-4/5 h-10 text-lg mb-2`}
                placeholder="name"
                value={FirstName}
                onChangeText={setFirstName}
              /> 
            </View>
            
            <View style={tw`w-full flex items-start justify-start px-4 bg-gray-100 rounded-xl my-2`}>
              <Text style={tw`font-bold text-sm text-gray-500 my-2`}>{'Last Name'}</Text>
              <TextInput
                style={tw`bg-transparent w-4/5 h-10 text-lg mb-2`}
                placeholder="Last name"
                value={LastName}
                onChangeText={setLastName}
              /> 
            </View>

            <View style={tw`w-full flex items-start justify-start px-4 bg-gray-100 rounded-xl my-2`}>
              <Text style={tw`font-bold text-sm text-gray-500 my-2`}>{'Email'}</Text>
              <TextInput
                style={tw`bg-transparent w-4/5 h-10 text-lg mb-2`}
                placeholder="enter user email"
                value={email}
                onChangeText={setEmail}
              /> 
            </View>


            <View style={[{},tw`w-full flex items-start justify-center bg-transparent mx-2 px-2`]}>
            <Text style={tw`font-bold text-sm text-gray-500 my-2`}>{'Select country'}</Text>
                      <FlatList
                        data={Countries}
                        horizontal
                        renderItem={({item}:{name:string,currencyCode:string}) => (
                          <TouchableOpacity style={[styles.IosBoxShadow,styles.androidBoxShadow,tw`bg-white flex items-center justify-center rounded-2xl mx-1 py-1 my-2`]} onPress={()=>{setCountry(item.name)}}>
                            <View style={[tw`bg-transparent flex flex-row items-center justify-center rounded-xl px-2`]}>
                              <View style={tw`bg-transparent flex items-center justify-center`}>
                                <Text style={tw`font-bold text-xs text-gray-500`}>{item.name}</Text>
                              </View>
                              <Image
                                style={[{aspectRatio:1,resizeMode:'cover'},tw` rounded-xl bg-transparent w-8 mx-2`]}
                                source={item.imgUrl}
                              />
                            </View>
                          </TouchableOpacity>
                      
                        )}
                        contentContainerStyle={[{columnGap:7},tw`mt-2`]}
                      />
                          
            </View>

            <View style={tw`w-full flex items-start justify-start px-4 bg-gray-100 rounded-xl my-2`}>
              <Text style={tw`font-bold text-lg text-gray-500 my-2`}>{'Country'}</Text>
              <TextInput
                style={tw`bg-transparent w-4/5 h-10 text-xl mb-2`}
                value={country}
              /> 
            </View>

            <View style={tw`w-full flex items-start justify-start px-4 bg-gray-100 rounded-xl my-2`}>
              <Text style={tw`font-bold text-sm text-gray-500 my-2`}>{'Password'}</Text>
              <TextInput
                style={tw`bg-transparent w-4/5 h-10 text-lg mb-2`}
                secureTextEntry={true}
                placeholder="enter password"
                value={password}
                onChangeText={setPassWord}
              /> 
            </View>

            <View style={tw`w-full bg-transparent flex flex-row justify-around items-center`}>

              <TouchableOpacity style={[{backgroundColor:Colors.light.vyreGreen},styles.IosBoxShadow,styles.androidBoxShadow,tw`w-4/12 flex items-center justify-center rounded-2xl mx-1 py-3 px-3 my-2`]} onPress={()=>{setState('Login')}}>
                <View style={tw`bg-transparent flex items-center justify-center`}>
                  <Text style={tw`font-bold text-sm text-white`}>{'Login'}</Text>
                </View>
              </TouchableOpacity>


              <TouchableOpacity style={[{backgroundColor:Colors.light.vyreBlue},styles.IosBoxShadow,styles.androidBoxShadow,tw`w-1/2 flex items-center justify-center rounded-2xl mx-1 py-2 my-2`]} onPress={()=>{initSignUp()}}>
                <View style={tw`bg-transparent flex items-center justify-center`}>
                  { !loader ? (<Text style={tw`font-bold text-xl text-white`}>{'sign Up'}</Text>):
                  (<ActivityIndicator size={35} color={'white'}/>)}
                </View>
              </TouchableOpacity>

            </View>

          </View>):

          state === 'Login' ? (<View style={[styles.IosBoxShadow,styles.androidBoxShadow,tw`w-full flex items-center justify-center rounded-3xl bg-white mt-2 mb-4 px-2 py-2 `]}>

            <View style={tw`w-full flex items-start justify-start px-4 bg-gray-100 rounded-xl my-2`}>
              <Text style={tw`font-bold text-sm text-gray-500 my-2`}>{'Email'}</Text>
              <TextInput
                style={tw`bg-transparent w-4/5 h-10 text-lg mb-2`}
                placeholder="enter user email"
                value={email}
                onChangeText={setEmail}
              /> 
            </View>

            <View style={tw`w-full flex items-start justify-start px-4 bg-gray-100 rounded-xl my-2`}>
              <Text style={tw`font-bold text-sm text-gray-500 my-2`}>{'Password'}</Text>
              <TextInput
                style={tw`bg-transparent w-4/5 h-10 text-lg mb-2`}
                placeholder="enter password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassWord}
              /> 
            </View>

            <View style={tw`w-full bg-transparent flex flex-row justify-around items-center`}>
              <TouchableOpacity style={[{backgroundColor:Colors.light.vyreGreen},styles.IosBoxShadow,styles.androidBoxShadow,tw`w-4/12 flex items-center justify-center rounded-2xl mx-1 py-3 px-3 my-2`]} onPress={()=>{setState('SignUp')}}>
                <View style={tw`bg-transparent flex items-center justify-center`}>
                  <Text style={tw`font-bold text-sm text-white`}>{'Sign Up'}</Text>
                </View>
              </TouchableOpacity>


              <TouchableOpacity style={[{backgroundColor:Colors.light.vyreBlue},styles.IosBoxShadow,styles.androidBoxShadow,tw`w-1/2 flex items-center justify-center rounded-2xl mx-1 py-2 my-2`]} onPress={()=>{initLogin()}}>
                <View style={tw`bg-transparent flex items-center justify-center`}>
                  {!loader ? (<Text style={tw`font-bold text-xl text-white`}>{'Login'}</Text>):
                  (<ActivityIndicator size={32} color={'black'}/>)}
                </View>
              </TouchableOpacity>
            </View>
            

          </View>):<></>}

        </ScrollView>
        

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:Colors.light.background
  },
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