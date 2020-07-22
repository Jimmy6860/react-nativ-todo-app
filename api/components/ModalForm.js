import React from 'react';
import { View, StyleSheet, Modal, Text, Button} from 'react-native';
import {Formik} from 'formik';
import Screen from '../components/Screen';
import AppTextInput from './AppTextInput';
import colors from '../config/colors';
import {editTask} from '../store/actions/taskActions';
import {connect} from "react-redux";
import moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';
import AppButton from './AppButton';
import * as Yup from 'yup';
import ErrorMessage from './ErrorMessage';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    priority: Yup.string().required().label('Priority'),
  });

const priorities = [
    {label: 'high', value: 'high'},
    {label: 'medium', value: 'medium'},
    {label: 'low', value: 'low'},
  ];

function ModalForm({visible = false, closeModal, item, editTask}) {
   
    const handleSubmit = (task) => {
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
                    validationSchema={validationSchema} 
                >
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                    touched
                }) => (
                    <View>
                        <View style={styles.pickerContainer}>
                            <DropDownPicker
                                items={priorities}
                                defaultIndex={values.id}
                                containerStyle={{height: 40}}
                                onChangeItem={item => setFieldValue('priority', item.value)}
                                style={styles.picker}
                                placeholder={values.priority}
                            />
                        </View>
                        <AppTextInput
                            name='title'
                            value={values.title}
                            onChangeText={handleChange('title')}
                            placeholder='Title'
                            style={{marginTop: 10}}
                        />
                        <ErrorMessage error={errors['title']} visible={touched['title']}/>
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
      pickerContainer: {
        zIndex: 10,
      },
      picker: {
        borderColor: colors.grey,
        borderWidth: 0.5,
        zIndex: 20,
      },
});

const mapStateToProps = (state) => {
    return {
        allTasks: state.tasksReducer
    }
};

export default connect(mapStateToProps, {editTask})(ModalForm);
