import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, TextInput, Image, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const SignInScreen = ({navigation}) => {
  return (

    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>

      

        <View style={{flexDirection: 'row', marginTop: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
            
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.secondary}}>
            
          </Text>
        </View>

        <View style={{marginTop: 70}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Welcome,
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>
            Sign in to continue
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="muhammadahmadarman786@gmail.com" style={STYLES.input} placeholderTextColor="#fff" />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Password*" placeholderTextColor="#fff"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          <View style={{marginTop: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: COLORS.dark, fontWeight: 'bold'}}>
              Forgot a Password?
            </Text>
          </TouchableOpacity>
          </View>
          

          <View style={STYLES.btnPrimary}>
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 18}}>
              Log In
            </Text>
          </View>
          
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={STYLES.line}></View>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={STYLES.btnSecondary}>
              <Image
                style={STYLES.btnImage}
                source={require('../../assests/facebook1.png')}
              />
              <Text style={{color: '#fff',fontWeight: 'bold', fontSize: 13}}>
                Continue with Facebook
              </Text>
              
            </View>
            <View style={{width: 10}}></View>
            <View style={STYLES.btnSecondary}>
              <Image
                style={STYLES.btnImage}
                source={require('../../assests/google.png')}
              />
              <Text style={{color: '#fff',fontWeight: 'bold', fontSize: 14}}>
                Continue with Google
              </Text>
              
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.light, fontWeight: 'bold'}}>
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: COLORS.pink, fontWeight: 'bold'}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        

      </ScrollView>
    </SafeAreaView>
  
  );
};

export default SignInScreen;

