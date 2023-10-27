import * as LocalAuthentication from 'expo-local-authentication';

export const useLocalAuth = async() => {
  const isEnrolled = await LocalAuthentication.isEnrolledAsync()

  if(isEnrolled){
    const response = await LocalAuthentication.authenticateAsync();
    return response
  }
  
};