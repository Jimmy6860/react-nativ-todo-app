import React from 'react';
import { View, StyleSheet, Keyboard, TouchableOpacity} from 'react-native';
import Screen from '../components/Screen';
import {Formik} from 'formik';
import AppTextInput from '../components/AppTextInput';
import {addTask} from '../store/actions/taskActions';
import {connect} from "react-redux";
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import moment from 'moment';
import * as Yup from 'yup';
import DropDownPicker from 'react-native-dropdown-picker';
import ErrorMessage from '../components/ErrorMessage';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  priority: Yup.string().required().label('Priority'),
});

const priorities = [
  {label: 'high', value: 'high'},
  {label: 'medium', value: 'medium'},
  {label: 'low', value: 'low'},
];

function AddScreen({addTask}) {

  const handleSubmit = (task, {resetForm}) => {
    addTask(task)
    resetForm()
  };

  return (
    <Screen style={styles.container}>
        <Formik
            initialValues={{
                id: Math.random() * 1000000,
                title: '',
                description: '',
                priority: '',
                time: moment().format('LL')
            }}
            onSubmit={(values, resetForm) => handleSubmit(values, resetForm)}
            validationSchema={validationSchema} 
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            resetForm,
            setFieldValue
          }) => (
              <View>
                <View style={styles.pickerContainer}>
                  <DropDownPicker
                      items={priorities}
                      defaultIndex={values.id}
                      containerStyle={{height: 40}}
                      onChangeItem={item => setFieldValue('priority', item.value)}
                      style={styles.picker}
                      placeholder={'Priority'}
                  />
                </View>
                <ErrorMessage error={errors['priority']} visible={touched['priority']}/>
                <AppTextInput
                    name='title'
                    placeholder='Title'
                    value={values.title}
                    onChangeText={handleChange('title')}
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
                <AppButton 
                  onPress={handleSubmit} 
                  text='Submit'
                  color= 'primary'
                  />
              </View>
          )}
        </Formik>
        <TouchableOpacity onPress={Keyboard.dismiss} style={styles.hideKeyboard}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    zIndex: 10,
  },
  picker: {
    borderColor: colors.grey,
    borderWidth: 0.5,
    zIndex: 20,
  },
  button: {
    backgroundColor: colors.primary,
    color: 'black',
    height: 100,
    width: '100%'
  },
  container: {
      padding: 10
  },
  hideKeyboard: {
    flex: 1
  },
  info: {
    flexDirection: 'row'
  },
  textInput: {
      backgroundColor: 'black',
      height: 50,
      width: '100%'
  }
});

const mapStateToProps = (state) => {
  return {
    allTasks: state.tasksReducer
  }
};

export default connect(mapStateToProps, {addTask})(AddScreen);