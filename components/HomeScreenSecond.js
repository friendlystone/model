import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Button,
  Alert 
} from 'react-native';

const Drawer = createDrawerNavigator();

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dayNames = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
const date = new Date();

export default class HomeScreen extends React.Component {

    render() {
        
        return (
            <View> 
                <View style = {{ backgroundColor: '#D3D3D3', paddingBottom: 0, paddingTop: 35 }}> 
                    <View style = {{ flexDirection:'row', justifyContent: 'space-between', padding: 5}}>
                        <TouchableOpacity>
                            <Image style = { styles.drawerIconStyle }
                                source = { require('../assets/menu.jpg') }
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style = { styles.userIconStyle }
                                source = { require('../assets/circle.png') }
                            />
                        </TouchableOpacity>
                    </View>

                    <Text style = {{ color: '#526aa8', fontSize: 30, fontWeight: 'bold', marginLeft: 40, paddingBottom: 20 }}>
                        Hello, Geo 
                    </Text>

                    <Text style = {{ color: '#526aa8', fontSize: 30, fontWeight: 'bold', marginLeft: 40, paddingBottom: 6 }}>
                        5 {' '} 
                        <Text style = {{ color: 'grey', fontSize: 30, fontWeight: '100', marginLeft: -5}}>
                            Pending Tasks
                        </Text>
                    </Text>

                    <View style = {{ flex: 1, paddingBottom: 35, margin: 5 }}>
                        <View style = {{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', width: 450, height: 50, alignSelf: 'center', borderRadius: 30, paddingBottom: 10 }}>
                           
                            <Text style = {{ color: '#526aa8',  fontWeight: 'bold', textAlign: 'center', marginLeft: 180, marginTop: 4, fontSize: 28 }} >
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
                </View>
                <View style = {{ flexDirection: 'column', alignContent: 'center' }}>
                    <View style = {{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style = {{ color: 'grey', fontSize: 30, fontWeight: 'bold', marginLeft: 37, marginTop: 15 }}>
                            Projects
                        </Text>
                        <Image
                            style = { styles.plusIcon }
                            source = { require('../assets/plusicon.png') }
                        />
                    </View>
                </View>
                <View>
                    <View style = {{ flexDirection: 'row', width: 800, justifyContent: 'space-evenly' }}>
                    <Text 
                                    style = { styles.dateContainers }
                                >
                                     <View style = {{ flexDirection: 'row', justifyContent: 'space-between', fontSize: 25 }}>
                                        <Text style = {{ fontSize: '20', marginTop: 10 }}>
                                            20{' '}
                                            <Text style = {{ fontWeight: '100', fontSize: '20' }}>
                                                Tasks
                                            </Text>
                                        </Text>
                                        <Image
                                            style = { styles.phoneIcon }
                                            source = { require('../assets/home.png')}
                                        />
                                   </View>
                                   <Text style = {{}}>
                                        Dashboard     
                                   </Text>
                                   
                                    <View style = {{ flexDirection: 'row' }}>
                                        <Image
                                            style = { styles.newUsersIcon }
                                            source = { require('../assets/users.png')}
                                        />
                                        <Image
                                            style = { styles.newsUsersIcon }
                                            source = { require('../assets/users.png')}
                                        />
                                    </View>
                                </Text>

                                <Text 
                                    style = { styles.dateContainerss }
                                >
                                     <View style = {{ flexDirection: 'row', justifyContent: 'space-between', fontSize: 25 }}>
                                        <Text style = {{ fontSize: '20', marginTop: 10 }}>
                                            10{' '}
                                            <Text style = {{ fontWeight: '100', fontSize: '20' }}>
                                                Tasks
                                            </Text>
                                        </Text>
                                        <Image
                                            style = { styles.phoneIcon }
                                            source = { require('../assets/iphone.png')}
                                        />
                                   </View>
                                   <Text style = {{}}>
                                        App Design     
                                   </Text>
                                   
                                    <View style = {{ flexDirection: 'row' }}>
                                        <Image
                                            style = { styles.newUsersIcon }
                                            source = { require('../assets/users.png')}
                                        />
                                        <Image
                                            style = { styles.newsUsersIcon }
                                            source = { require('../assets/users.png')}
                                        />
                                    </View>
                                </Text>

                                <Text 
                                    style = { styles.dateContainersss }
                                >
                                     <View style = {{ flexDirection: 'row', justifyContent: 'space-between', fontSize: 25 }}>
                                        <Text style = {{ fontSize: '20', marginTop: 10 }}>
                                            10{' '}
                                            <Text style = {{ fontWeight: '100', fontSize: '20' }}>
                                                Tasks
                                            </Text>
                                        </Text>
                                        <Image
                                            style = { styles.phoneIcon }
                                            source = { require('../assets/iphone.png')}
                                        />
                                   </View>
                                   <Text style = {{}}>
                                        App Design     
                                   </Text>
                                   
                                    <View style = {{ flexDirection: 'row' }}>
                                        <Image
                                            style = { styles.newUsersIcon }
                                            source = { require('../assets/users.png')}
                                        />
                                        <Image
                                            style = { styles.newsUsersIcon }
                                            source = { require('../assets/users.png')}
                                        />
                                    </View>
                                </Text>
                    </View>
                </View>

                <View>
                    <View style = {{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style = {{ color: 'grey', fontSize: 30, fontWeight: 'bold', marginLeft: 37, marginTop: 15 }}>
                            Personal Task
                        </Text>
                        <Image
                            style = { styles.plusIcon }
                            source = { require('../assets/plusicon.png') }
                        />
                    </View>
                </View>

                <View style = {{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, alignItems: 'center', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Text style = {{ fontSize: 25, fontWeight: 'bold', marginLeft: 90, color: 'grey', textDecorationLine: 'underline', textDecorationColor: 'orange' }}>
                            Today
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style = {{ fontSize: 25, fontWeight: 'bold', color: 'lightgrey' }}>
                            Week   
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style = {{ fontSize: 25, fontWeight: 'bold', marginRight: 50, color: 'lightgrey' }}>
                            Month
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style = {{ marginTop: 20 }}>
                    <View style = {{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 5, alignItems: 'center'}}>
                            <View style = {{ marginBottom: 5}} >
                                <Image style = {{ width: 20, height: 20, alignSelf: 'flex-end', paddingTop: 20, marginRight: -15, marginTop: 10, tintColor: '#526aa8' }}
                                    source = { require('../assets/users.png') }
                                />
                                <Text style = {{ color: 'lightgrey', textAlign: 'center', marginRight: -30, fontSize: 15 }}>
                                    9:20 pm
                                </Text>
                            </View>
                            <View style = {{ backgroundColor: '#DCDCDC', width: 360, height: 70, alignSelf: 'center', borderRadius: 10, paddingBottom: 10, justifyContent: 'flex-start' }}>
                                    <Text style = {{ fontSize: 18, color: 'grey', marginLeft: 10, marginTop: 2, textAlign: 'left', fontWeight: 'bold'  }}>
                                        Lorem Ipsum
                                    </Text>
                                    <Text style = {{ fontSize: 15, color: '#C0C0C0', marginLeft: 10, textAlign: 'left' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    </Text>
                            </View>
                            
                        </View> 
                        <View style = {{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 5, alignItems: 'center'}}>
                            <View style = {{ marginBottom: 5}} >
                                <Image style = {{ width: 20, height: 20, alignSelf: 'flex-end', paddingTop: 20, marginRight: -15, marginTop: 10, tintColor: '#526aa8' }}
                                    source = { require('../assets/users.png') }
                                />
                                <Text style = {{ color: 'lightgrey', textAlign: 'center', marginRight: -30, fontSize: 15 }}>
                                    9:20 pm
                                </Text>
                            </View>
                            <View style = {{ backgroundColor: '#DCDCDC', width: 360, height: 70, alignSelf: 'center', borderRadius: 10, paddingBottom: 10, justifyContent: 'flex-start' }}>
                                    <Text style = {{ fontSize: 18, color: 'grey', marginLeft: 10, marginTop: 2, textAlign: 'left', fontWeight: 'bold'  }}>
                                        Lorem Ipsum
                                    </Text>
                                    <Text style = {{ fontSize: 15, color: '#C0C0C0', marginLeft: 10, textAlign: 'left' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    </Text>
                            </View>
                            
                        </View>
                        <View style = {{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 5, alignItems: 'center'}}>
                            <View style = {{ marginBottom: 5}} >
                                <Image style = {{ width: 20, height: 20, alignSelf: 'flex-end', paddingTop: 20, marginRight: -15, marginTop: 10, tintColor: '#526aa8' }}
                                    source = { require('../assets/users.png') }
                                />
                                <Text style = {{ color: 'lightgrey', textAlign: 'center', marginRight: -30, fontSize: 15 }}>
                                    9:20 pm
                                </Text>
                            </View>
                            <View style = {{ backgroundColor: '#DCDCDC', width: 360, height: 70, alignSelf: 'center', borderRadius: 10, paddingBottom: 10, justifyContent: 'flex-start' }}>
                                    <Text style = {{ fontSize: 18, color: 'grey', marginLeft: 10, marginTop: 2, textAlign: 'left', fontWeight: 'bold'  }}>
                                        Lorem Ipsum
                                    </Text>
                                    <Text style = {{ fontSize: 15, color: '#C0C0C0', marginLeft: 10, textAlign: 'left' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    </Text>
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
    item: {
        padding: 6,
        fontSize: 40,
        height: 80,
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: '#3bbca6'
    },
    containers: {
        flex: 1,
        paddingTop: 10,
        height: 100,
        textAlign: 'center',
        flexDirection: 'column'
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
        width: 40,
        height: 40,
        margin: 5,
        marginRight: 20,
        resizeMode: 'stretch',
        alignSelf: 'flex-end',
        tintColor: '#526aa8',
    },
    searchIconStyle: {
        width: 40,
        height: 40,
        resizeMode: 'stretch',
        alignSelf: 'flex-end',
        tintColor: '#526aa8',
        alignItems: 'center',
        margin: -15,
        marginTop: 3,
        marginRight: 10,
    },
    plusIcon: {
        width: 60,
        height: 60,
        resizeMode: 'stretch',
        alignSelf: 'flex-end',
        tintColor: 'grey',
        alignItems: 'center',
        marginTop: 2,
        marginRight: 8
    },
    phoneIcon: {
        width: 40,
        height: 40,
        resizeMode: 'stretch',
        alignSelf: 'flex-end',
        tintColor: 'white',
        marginTop: 12,
        marginLeft: 30
    },   
    newUsersIcon:{
        width: 30,
        height: 30,
        resizeMode: 'stretch',
        alignSelf: 'flex-start',
        marginTop: 50,
        marginLeft: -25,
        marginRight: 5
    }, 
    newsUsersIcon:{
        width: 30,
        height: 30,
        resizeMode: 'stretch',
        alignSelf: 'flex-start',
        marginTop: 50,
        marginLeft: 20,
        marginRight: 50
    }, 
    drawerIconStyle: {
        width: 80,
        height: 80,
        resizeMode: 'stretch',
        alignSelf: 'flex-start',
        margin: 5,
        marginLeft: 15,
        tintColor: '#526aa8'
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
        width: 250,
        height: 180,
        textAlign: 'center',
        color: 'white',
        borderRadius: 30,
        fontWeight: 'bold',
        backgroundColor: '#526aa8',
        fontSize: 28,
        margin: 5,
        marginLeft: 40
    },
    dateContainerss: {
        borderTopWidth:1,
        borderColor: '#39bda8',
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        width: 250,
        height: 180,
        textAlign: 'center',
        color: 'white',
        borderRadius: 30,
        fontWeight: 'bold',
        backgroundColor: '#39bda8',
        fontSize: 28,
        margin: 5,
        marginLeft: 10
    },
    dateContainersss: {
        borderTopWidth:1,
        borderColor: '#eabe00',
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        width: 250,
        height: 180,
        textAlign: 'center',
        color: 'white',
        borderRadius: 30,
        fontWeight: 'bold',
        backgroundColor: '#eabe00',
        fontSize: 28,
        margin: 5,
        marginLeft: 10,
        marginRight: 100
    }

})