import { StyleSheet } from 'react-native';
import tw from 'twrnc'
import { Nunito } from '../StyledText';
import { Text, View } from '../Themed';

type transaction = {
  type:string;
  assetName:string;
  amount:number;
  assetSymbol:string;
  description:string;
  date:string;
  img:any
}

export default function transactionSheet({type,assetName,amount,assetSymbol,description,date,img}:transaction) {
  return (
    <View style={[styles.container,tw`px-4`]}>
      <View style={tw`w-full flex items-start mb-2`}>

        <View style={tw`w-full flex flex-row items-center justify-between`}>
          <Nunito style={[{fontSize:30,textTransform:'capitalize'},tw`font-bold mb-2`]}>{type}</Nunito>
          <Text style={tw`text-3xl`}>{type === 'send'? '-':'+'}{amount}</Text>
        </View>

        <View>
          <Text style={tw`text-xl`}>{assetName}</Text>
          <Text style={tw` text-xl`}>{assetSymbol}</Text>
        </View>

      </View>

      <View style={tw`h-0.5 bg-gray-300 mx-4`}></View>

      <Text style={tw`mt-2 text-sm`}>{description}</Text>
      <Text style={tw`font-bold text-lg`}>{date}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
