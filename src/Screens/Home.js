import { StyleSheet, Text, View, Image, Pressable, Dimensions, useWindowDimensions, Modal } from 'react-native'
import React, { useState } from 'react';
import * as Progress from 'react-native-progress';
import { Picker, DatePicker } from 'react-native-wheel-pick-2';

const w = Dimensions.get('screen').width;
const Home = () => {
    const { height, width, fontScale } = useWindowDimensions()
    const [modal, setModal] = useState(false)


    const NumberPickerModal = () => {
        return (
            <Modal
                visible={modal}
                onRequestClose={() => setModal(false)}
                transparent={true}
                animationType='slide'
            >
                <View style={{ width: width, alignItems: 'center', flex: 1, backgroundColor: 'rgba(000, 000, 000, 0.3)' }}>
                    <View style={{
                        width: width,
                        backgroundColor: '#fff',
                        bottom: 0,
                        position: 'absolute',
                        borderRadius: 30
                    }}>
                        <View style={styles.graybar}></View>
                        <Text style={{ color: '#000', paddingLeft: 20, fontSize: 16, fontWeight: '600', marginBottom: 20 }}>Your Prediction is Under</Text>
                        <Text style={{ color: 'gray', paddingLeft: 20, fontSize: 12, marginBottom: 20 }}>Entry tickets</Text>
                        <View style={{ alignItems: 'center' }}>
                            <Picker
                                style={{ backgroundColor: '#fff', width: width - 40, height: 150 }}
                                textColor={"#000"}
                                selectedValue='14'
                                textSize={30}
                                selectBackgroundColor='#8080801A'
                                isShowSelectLine={false}
                               // selectLineSize={18}
                               
                                pickerData={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']}
                                onValueChange={value => { console.log(value) }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', padding: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ color: '#ccc', fontSize: 12 }}>You can win</Text>
                                <Text style={{ color: '#03A67F', fontSize: 14, fontWeight: '600' }}>$2000</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: 'gray', fontSize: 12, paddingHorizontal: 5 }}>Total</Text>
                                <Image source={require('../Assets/dollar.png')} style={{ width: 16, height: 16 }} />
                                <Text style={{ color: '#000', fontSize: 14, fontWeight: '600', fontSize: 12, paddingHorizontal: 5 }}>5</Text>
                            </View>
                        </View>
                        <View>
                            <Pressable onPress={()=> setModal(false)} style={{ backgroundColor: '#6231AD', marginHorizontal: 30, marginVertical: 20,borderRadius:50 }}>
                                <Text style={{ color: "#fff", padding: 12, fontSize: 14, textAlign: 'center', fontWeight: '600' }}>Submit my prediction</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Today’s Games</Text>
            <View style={styles.mainDataContainer}>
                {/* Top Data Container */}
                <View style={styles.rowContainer}>
                    <View style={styles.info1}>
                        <View style={styles.infochiled1}>
                            <Text style={styles.DataTextTitle}>UNDER OR OVER</Text>
                            <Image source={require('../Assets/information.png')} style={{ width: 16, height: 16 }} />
                        </View>
                        <View style={styles.infochiled1}>
                            <Text style={[styles.DataTextTitle, { fontWeight: '400', fontSize: 12 }]}>Starting in</Text>
                            <Image source={require('../Assets/time.png')} style={{ width: 16, height: 16 }} />
                            <Text style={[styles.DataTextTitle, { fontWeight: '400' }]}>03:23:12</Text>
                        </View>
                    </View>
                    <View style={[styles.infochiled1, { flexDirection: 'column', alignItems: 'flex-start' }]}>
                        <Text style={[styles.DataTextTitle, { marginBottom: 0, marginTop: 0 }]}>Bitcoin price will be under</Text>
                        <Text style={[styles.DataTextTitle, { marginTop: 0, color: '#fff' }]}>$24,524 at 7 a ET on 22nd Jan’21</Text>
                    </View>
                </View>
                {/* middle Container */}
                <View style={styles.middleContainer}>
                    <View style={styles.childMiddleContainer}>
                        <View>
                            <Text style={styles.catText}>PRIZE POOL</Text>
                            <Text style={[styles.catText, { color: '#000' }]}>$12,000</Text>
                        </View>
                        <View>
                            <Text style={styles.catText}>UNDER</Text>
                            <Text style={[styles.catText, { color: '#000' }]}>3.25x</Text>
                        </View>
                        <View>
                            <Text style={styles.catText}>OVER</Text>
                            <Text style={[styles.catText, { color: '#000' }]}>1.25x</Text></View>
                        <View>
                            <Text style={styles.catText}>ENTER FEES</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end' }}>
                                <Text style={[styles.catText, { color: '#000' }]}>1.25x</Text>
                                <Image source={require('../Assets/dollar.png')} style={{ width: 16, height: 16, marginLeft: 10 }} />
                            </View>
                        </View>
                    </View>
                    <Text style={{ fontWeight: '600', fontSize: 14, marginVertical: 10 }}>What’s your prediction?</Text>
                    <View style={styles.btnContainer}>
                        <Pressable style={styles.btn}>
                            <Image source={require('../Assets/down-arrow.png')} style={{ width: 16, height: 16, marginRight: 10 }} />
                            <Text style={{ color: '#fff', fontSize: 14, fontWeight: '600' }}>Under</Text>
                        </Pressable>
                        <Pressable onPress={() => setModal(true)} style={[styles.btn, { backgroundColor: '#6231AD' }]}>
                            <Image source={require('../Assets/up-arrow.png')} style={{ width: 16, height: 16, marginRight: 10 }} />
                            <Text style={{ color: '#fff', fontSize: 14, fontWeight: '600' }}>Over</Text>
                        </Pressable>
                    </View>
                </View>
                {/* Bottom Data Container */}
                <View style={styles.bottomContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={styles.bottomContainerChild}>
                            <Image source={require('../Assets/profile.png')} style={{ width: 16, height: 16, marginRight: 10 }} />
                            <Text style={{ fontWeight: '600', fontSize: 14, marginVertical: 10 }}>355 Players</Text>
                        </View>
                        <View style={styles.bottomContainerChild}>
                            <Image source={require('../Assets/mountain-graph.png')} style={{ width: 16, height: 16, marginRight: 10 }} />
                            <Text style={{ fontWeight: '600', fontSize: 14, marginVertical: 10 }}>View chart</Text>
                        </View>
                    </View>
                    {/* Progress Bar */}
                    <View style={{ alignItems: 'center', paddingTop: 10 }}>
                        <Progress.Bar borderRadius={10} height={15} borderWidth={0} color='#FE4190' unfilledColor='#2DABAD' progress={0.7} width={width - 50} />
                    </View>
                    <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={styles.catText}>232 predicted under</Text>
                        <Text style={styles.catText}>123 predicted over</Text>
                    </View>
                </View>
            </View>
            {NumberPickerModal()}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerText: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 21,
        color: 'black',
        margin: 10
    },
    mainDataContainer: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 5,
    },
    info1: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rowContainer: {
        backgroundColor: '#743ccc',
    },
    DataTextTitle: {
        color: '#D2BAF5',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 21,
        margin: 10,

    },
    infochiled1: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    childMiddleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    middleContainer: {
        backgroundColor: '#fff',
        padding: 20
    },
    catText: {
        fontSize: 12,
        color: '#B5C0C8',
        fontWeight: '500',
        lineHeight: 25
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#452C55',
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 48
    },
    bottomContainer: {
        backgroundColor: '#F6F3FA',

    },
    bottomContainerChild: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    graybar: {
        backgroundColor: '#B5C0C8',
        width: 50,
        height: 5,
        borderRadius: 10,
        margin: 20,
        alignSelf: 'center'
    }
})