import React from 'react';
import { View, StyleSheet, Modal, Text, Button} from 'react-native';
import {Formik} from 'formik';
import Screen from '../components/Screen';
import AppTextInput from './AppTextInput';
import colors from '../config/colors';
import {editTask} from '../store/actions/taskActions';
import {connect} from "react-redux";
import moment from 'moment';
import AppButton from './AppButton';

function ModalForm({visible = false, closeModal, item, editTask}) {
   
    const handleSubmit = (task) => {
        console.log(task)
        editTask(task)
        closeModal()
    };

  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={visible}                 
    >
        <Screen>
            <View style={styles.modalView}>
                <Formik
                    initialValues={{
                        id: item.id,
                        title: item.title,
                        description: item.description,
                        priority: item.priority,
                        time: moment().format('LL')
                    }}
                    onSubmit={(values) => handleSubmit(values)}
                >
                {({
                    values,
                    handleChange,
                    handleSubmit
                }) => (
                    <View>
                        <AppTextInput
                            name='title'
                            value={values.title}
                            onChangeText={handleChange('title')}
                        />
                        <AppTextInput
                            name='description'
                            placeholder='Description'
                            multiline
                            style={{marginTop: 10, height: 100}}
                            value={values.description}
                            onChangeText={handleChange('description')}
                        />
                        <View style={styles.buttonsContainer}>
                            <AppButton
                                text='Close' 
                                color= 'delete' 
                                onPress={closeModal}
                                width='45%'
                            />
                            <AppButton 
                                text='Submit' 
                                color= 'primary' 
                                onPress={handleSubmit}
                                width='45%'
                            />
                        </View>
                    </View>
                )}
                </Formik>
            </View>
        </Screen>
    </Modal>        
  );
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row'
    },
    modalView: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 10
      },
});

const mapStateToProps = (state) => {
    return {
        allTasks: state.tasksReducer
    }
};

export default connect(mapStateToProps, {editTask})(ModalForm);
