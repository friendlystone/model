import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
  Text,
} from 'react-native';

const Drawer = createDrawerNavigator();

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dayNames = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
const date = new Date();

export default class HomeScreen extends React.Component {

    state = {
        search: '',
      };
    
    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return (
            <View> 
                <View style = {{ backgroundColor: '#526aa8', paddingBottom: 10, paddingTop: 50 }}> 
                    <View style = {{ flexDirection:'row', justifyContent: 'space-between', padding: 5}}>
                        <TouchableOpacity 
                            style = { styles.drawerIconStyle }
                        >
                            <Image style = { styles.userIconStyle }
                                source = { require('../assets/doublelines.png') }
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style = { styles.userIconStyle }
                                source = { require('../assets/circle.png') }
                            />
                        </TouchableOpacity>
                    </View>

                    <View style = {{ flex: 1, paddingBottom: 35, margin: 5 }}>
                        <View style = {{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', width: 320, height: 32, alignSelf: 'center', borderRadius: 30, paddingBottom: 10 }}>
                           
                            <Text style = {{ color: '#526aa8',  fontWeight: 'bold', textAlign: 'center', marginLeft: 130, marginTop: 2, fontSize: 18 }} >
                                Search
                            </Text>
                            <TouchableOpacity>
                                <Image
                                    style = { styles.searchIconStyle }
                                    source = { require('../assets/search.png') }
                                /> 
                            </TouchableOpacity>
        
                        </View>
                    </View>

                    <View>
                        <Text style = {{ color: 'white', fontWeight: 'bold', marginLeft: 10, marginBottom: 15, fontSize: 20}}>
                            { monthNames[date.getMonth()] + ' ' + date.getFullYear()  }
                        </Text>
                    

                    <View style = { styles.calendarComponents }>
                                
                                <Text 
                                    style = { styles.dateContainers }
                                >
                                    { 26 + '\n ' + dayNames[(date.getDay())%10-1] }
                                </Text>

                                <Text 
                                    style = { styles.dateContainers }
                                >
                                    { 27 + '\n ' + dayNames[(date.getDay())%10] }
                                </Text>

                                <Text 
                                    style = { styles.dateContainers }
                                >
                                    { 28 + '\n ' + dayNames[(date.getDay())%10+1] }
                                </Text>

                                <Text 
                                    style = { styles.dateContainers }
                                >
                                    { 29 + '\n ' + dayNames[(date.getDay())%10+2] }
                                </Text> 
                    </View>
                    </View>
                </View>
                <View style = {{ backgroundColor: 'lightgrey', width: 350, height: 70, alignSelf: 'center', borderRadius: 10, paddingBottom: 15, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style = {{ alignSelf: 'flex-start', color: 'grey', paddingTop: 5, paddingRight: 10, paddingLeft: 10, fontWeight: 'bold', fontSize: 18, paddingLeft: 19, flexDirection: 'column' }}>
                        New Task
                        <Text style = {{ fontWeight: 'normal', fontSize: 12, color: '#787878' }}>
                            {'\n'}Lorem ipsum dolor sit amet, consectetur {'\n'}adipiscing elit. Praesent a tristique ipsum.  
                        </Text>
                    </Text>
                    <TouchableOpacity style = {{ alignSelf: 'flex-end' }}>
                        <Image style = {{ width: 65, height: 65, tintColor: '#526aa8', margin: -10, marginRight: 2}}
                            source = { require('../assets/circlee.png') }
                        />
                    </TouchableOpacity>
                </View>
                <View style = {{ paddingTop: 25 }}>
                        <View style = {{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 5, alignItems: 'center'}}>
                            <View style = {{ marginBottom: 5, }} >
                                <Image style = {{ width: 40, height: 40, alignSelf: 'flex-end', paddingTop: 20 }}
                                    source = { require('../assets/users.png') }
                                />
                                <Text style = {{ color: 'lightgrey', textAlign: 'center' }}>
                                    Name
                                </Text>
                            </View>
                             <View style = {{ backgroundColor: 'lightgrey', width: 250, height: 70, alignSelf: 'center', borderRadius: 10, paddingBottom: 10 }}>

                             </View>
                        </View>
                        <View style = {{ flexDirection:'row', justifyContent: 'space-evenly', padding: 5, alignItems: 'center'}}>
                            <View style = {{ marginBottom: 5 }}>
                                <Image style = {{ width: 40, height: 40, alignSelf: 'flex-end', paddingTop: 20 }}
                                    source = { require('../assets/users.png') }
                                />
                                <Text style = {{ color: 'lightgrey', textAlign: 'center' }}>
                                    Name
                                </Text>
                            </View>
                             <View style = {{ backgroundColor: 'lightgrey', width: 250, height: 70, alignSelf: 'center', borderRadius: 10, paddingBottom: 10 }}>

                             </View>
                        </View>
                        <View style = {{ flexDirection:'row', justifyContent: 'space-evenly', padding: 5, alignItems: 'center'}}>
                             <View style = {{ marginBottom: 5 }}>
                                <Image style = {{ width: 40, height: 40, alignSelf: 'flex-end', margin: -2, marginTop: 5, paddingTop: 5 }}
                                    source = { require('../assets/users.png') }
                                />
                                <Text style = {{ color: 'lightgrey', textAlign: 'center' }}>
                                    Name
                                </Text>
                            </View>
                             <View style = {{ backgroundColor: 'lightgrey', width: 250, height: 70, alignSelf: 'center', borderRadius: 10, paddingBottom: 10 }}>

                             </View>
                        </View>
                        <View style = {{ flexDirection:'row', justifyContent: 'space-evenly', padding: 5, alignItems: 'center'}}>
                            <View style = {{ marginBottom: 5 }}>
                                <Image style = {{ width: 40, height: 40, alignSelf: 'flex-end', paddingTop: 20 }}
                                    source = { require('../assets/users.png') }
                                />
                                <Text style = {{ color: 'lightgrey', textAlign: 'center' }}>
                                    Name
                                </Text>
                            </View>
                             <View style = {{ backgroundColor: 'lightgrey', width: 250, height: 70, alignSelf: 'center', borderRadius: 10, paddingBottom: 10 }}>

                             </View>
                        </View>
                </View>
            </View>
        );
    }
  }
  
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    calendarComponents: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 5
    },
    userButtonStyle: {
        marginBottom: 30
    },
    userIconStyle: {
        width: 30,
        height: 30,
        margin: 5,
        marginRight: 20,
        resizeMode: 'stretch',
        alignSelf: 'flex-end',
        tintColor: 'white',
    },
    searchIconStyle: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
        alignSelf: 'flex-end',
        tintColor: '#526aa8',
        alignItems: 'center',
        margin: -8,
        marginTop: 0,
        marginRight: 10,
    },
    drawerIconStyle: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
        alignSelf: 'flex-start',
        margin: 5,
        marginLeft: 35
    },
    middleThing: {
        borderWidth: 1, 
        borderRadius: 10,
    },
    inputContainerThingy: {
        borderWidth: 1, 
        borderRadius: 10,
        textDecorationColor: '#526aa8'   
    },
    aBar: {
        padding: 12,
        borderRadius: 10,
        backgroundColor: 'transparent',
        textDecorationColor: '#526aa8'
    },
    dateContainers: {
        borderTopWidth:1,
        borderColor: '#526aa8',
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        width: 70,
        height: 70,
        resizeMode: 'stretch',
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#526aa8',
        borderRadius: 10,
        fontWeight: 'bold',
        backgroundColor: 'white',
        fontSize: 22,
        paddingRight: 4,
        paddingTop: 5
    }
})