import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons'
import { Link, Tabs } from 'expo-router';
import React,{ useEffect, useState } from 'react';

import { Text, View, SafeAreaView } from '../../components/Themed';

import tw from 'twrnc';
import { Pressable, useColorScheme,Image} from 'react-native';
import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props?: {
  name?: React.ComponentProps<typeof Feather>['name'];
  Ioniconame?: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
  size: number;
  type?:string
}) {
  if(props?.type == 'ionicons'){
    return <Ionicons style={{ marginBottom: -3 }} name={props.Ioniconame} size={props.size} color={props.color} />;
  }
  return <Feather style={{ marginBottom: -3 }} {...props} />;
}



export default function TabLayout() {
  const colorScheme = useColorScheme();


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tabIconSelected,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        headerShown:false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle:{
          position:'relative',
          backgroundColor: Colors[colorScheme ?? 'light'].TabBar,
          height:70          
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color,focused }) => <TabBarIcon name="home" size={focused ? 23 :16} color={color} />
        }}
      />

      <Tabs.Screen
        name="assets"
        options={{
          title: 'assets',
          tabBarIcon: ({ color,focused}) => <TabBarIcon type='ionicons' Ioniconame="ios-wallet" size={focused ? 23 :16} color={color} />,
        }}
      />

      <Tabs.Screen
        name="exchange"
        options={{
          title: 'exchange',
          tabBarIcon: ({ color,focused}) =>( 
            <View style={[{backgroundColor:focused ? color : '#989090'},tw`w-12 flex flex-row border-2 rounded-3xl justify-center items-center px-1 py-1`]}>
              <Image
                style={[{aspectRatio:1,resizeMode:'cover'},tw` w-full `]}
                source={require('../../assets/images/peer-to-peer.png')}
              />
            </View>
          
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          tabBarIcon: ({ color,focused }) => <TabBarIcon name="user" size={focused ? 23 :16} color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="settings"
        options={{
          title: 'settings',
          tabBarIcon: ({ color,focused }) => <TabBarIcon name="settings" size={focused ? 23 :16} color={color} />,
        }}
      />
      
    </Tabs>
  );
}
