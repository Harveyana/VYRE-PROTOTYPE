import { StyleSheet } from "react-native";

const vyreBlue = '#1D3160';
const vyreGreen = '#43D9B8';
const vyreWhite = '#FFFEFE';
const dimWhite = '#F3F2ED';
const VyreYellow = '#DAA520';
const VyreLemon = '#D6DA20';
const VyreDeepBlue = '#112044';

export default {
  light: {
    text: '#000',
    background: dimWhite,
    tint: vyreWhite,
    tabIconDefault: '#989090',
    tabIconSelected: vyreWhite,
    TabBar: vyreBlue,
    vyreGreen:vyreGreen,
    vyreBlue: vyreBlue,
    VyreYellow:VyreYellow,
    VyreLemon: VyreLemon,
    VyreDeepBlue: VyreDeepBlue

  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: vyreGreen,
    tabIconDefault: '#989090',
    tabIconSelected: vyreWhite,
    TabBar: vyreBlue
  },
};

export const styles = StyleSheet.create({
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

