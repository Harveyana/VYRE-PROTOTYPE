import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}

export function Nunito(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Nunito_400Regular' }]} />;
}

export function Textlight(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'NunitoLight' }]} />;
}
