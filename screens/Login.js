import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
} from 'react-native';

import axios from 'axios';

import TextInput from './shared/TextInput';
import Button from './shared/Button';

import { LOGO } from '../utils/Icons'
import { colors } from '../utils/Styles'

export default class App extends Component {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: 'white',
    },
  };

  constructor(props) {
      super(props);
      this.state = {
          email: '',
          password: '',
          isLoggingin: false,
      };
  }
    render() {
        return (
            <>
            <ScrollView>
              <StatusBar barStyle="dark-content" />
              <SafeAreaView>
                  <View style={styles.constainer}>
                      <View style={styles.iconWrapper}>
                          <Image style={styles.icon} source={LOGO}></Image>
                          <Text style={styles.iconTxt}>Hello</Text>
                      </View>
                      <View style={styles.wrapper} >
                          <View style={styles.wrapperInput}>
                              <TextInput
                                  txtLabel='this is label'
                                  style={{marginTop: 60}}
                                  txt={this.state.email}
                                  txtHint='Please write email address.'
                                  placeHolderTextColor={colors.blueyGray}
                                  onTextChagned={(text) => {
                                      this.onTextChanged('EMAIL', text);
                                  }} 
                              />
                              <TextInput
                                  style={{marginTop: 8}}
                                  txt={this.state.password}
                                  txtHint='Please write password.'
                                  placeHolderTextColor={colors.blueyGray}
                                  onTextChagned={(text) => {
                                      this.onTextChanged('PASSWORD', text);
                                  }}
                                  isPassword
                              />
                          </View>
                          <View style={styles.viewBtnWrapper}>
                            <Button
                              containerStyle={{ flex: 1 }}
                              onPress={() => {
                                this.props.navigation.navigate('Signup');
                              }}
                              style={styles.btnSignup}
                              textStyle={styles.txtSignup}
                              >Sign Up</Button>
                              <View style={{ width: 8 }} />
                            <Button
                              containerStyle={{ flex: 1 }}
                              isLoading={this.state.isLoggingin}
                              onPress={() => {
                                this.setState({
                                  isLoggingin: true
                                });
                                axios.post('http://192.168.0.136:9001/api/login', {
                                  email: this.state.email,
                                  password: this.state.password
                                }).then( async () => {
                                  await AsyncStorage.setItem('userToken', 'abc');
                                  this.props.navigation.navigate('Main');
                                  console.log(`code:` + res.data.code);
                                  console.log(`message:` + res.data.message);
                                  console.log(`token:` + res.data.token);
                                  alert(res.data.message);
                                  this.setState({isLoggingin: false});
                                }).catch ((err) => {
                                  console.log(err);
                                });
                              }}
                              style={styles.btnLogin}
                              textStyle={styles.txtLogin}
                              >Login</Button>
                          </View>
                      <TouchableOpacity
                          style={styles.touchForgotPw}
                      >
                          <Text style={styles.txtForgotPw}>Forgot password?</Text>
                      </TouchableOpacity>
                      <View style={styles.btnLoginOther}>

                      </View>
                      <Text style={styles.txtCopyright}>Copyright by platcube.com</Text>
                      </View>
                  </View>
              </SafeAreaView>
            </ScrollView>
            </>
        );
    };

    onTextChanged = (type, text) => {
        switch(type) {
            case 'EMAIL':
                this.setState({
                    email: text,
                });
            break;
            case 'PASSWORD':
                this.setState({
                    password: text,
                });
            break;
        }
    }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  },
  iconWrapper: {
    position: 'absolute',
    top: 144,
    left: 40,

    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  icon: {
    width: 36,
    height: 68,
    marginLeft: 4,
  },
  iconTxt: {
    fontSize: 20,
    color: colors.dusk,
    marginTop: 16,
    fontWeight: 'bold',
  },
  wrapper: {
    marginTop: 260,
    width: '78%',
    height: 300,
    alignSelf: 'center',

    flexDirection: 'column',
    alignItems: 'center',
  },
  wrapperInput: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start', 
    
  },
  input: {
    alignSelf: 'stretch',
    color: colors.dusk,
    fontSize: 16,
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.paleGray,
  },
  viewBtnWrapper: {
    alignSelf: 'stretch',
    marginTop: 14,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnSignup: {
    backgroundColor: 'transparent',
    borderRadius: 4,
    borderWidth: 1,
    height: '100%',
    width: '100%',
    borderColor: colors.dodgerBlue,

    alignItems: 'center',
    justifyContent: 'center',
  },
  txtSignup: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.dodgerBlue,
  },
  btnLogin: {
    backgroundColor: colors.dodgerBlue,
    borderColor: colors.dodgerBlue,
    borderRadius: 4,
    borderWidth: 1,
    height: 60,
    shadowColor: colors.dodgerBlue,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtLogin: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  touchForgotPw: {
    marginTop: 20,
  },
  txtForgotPw: {
    fontSize: 12,
    color: colors.dodgerBlue,
    textDecorationLine: 'underline',
  },
  btnLoginOther: {
    flexDirection: 'row',
    alignItems: 'center',

    width: 24,
    height: 24,
    marginLeft: 4,
  },

  txtCopyright: {
    marginTop: 80,
    fontSize: 12,
    color: colors.cloudyBlue,
  },
});

