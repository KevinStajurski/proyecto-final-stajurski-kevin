import React from 'react';
import { Alert, Modal, Text, Pressable, View } from 'react-native';
import styles from './MyModal.style'

const MyModal = ({ text, modalVisible, setModalVisible, buttonText }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{text}</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>{buttonText}</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

export default MyModal