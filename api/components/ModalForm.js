import React, {useState} from 'react';
import { View, StyleSheet, Modal, Text, Button} from 'react-native';

function ModalForm({visible = false, closeModal, item}) {
   

  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={visible}                 
    >
        <View style={styles.modalView}>
  <Text>{item.title}</Text>
  <Button title='close' onPress={closeModal}/>
</View>
    </Modal>        
  );
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default ModalForm;

{/* <Modal
animationType="fade"
transparent={true}
visible={modalVisible}                 
>
<View style={styles.modalView}>
  <Text>{item.title}</Text>
  <Button onPress={() => setModalVisible(false)} title='close'/>
</View>
</Modal> */}