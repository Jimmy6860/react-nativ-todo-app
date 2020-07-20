import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import Screen from '../components/Screen';
import {Formik} from 'formik';
import AppTextInput from '../components/AppTextInput';
import {addTask} from '../store/actions/taskAction';
import {connect} from "react-redux";
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import moment from 'moment';

function AddScreen({addTask}) {

  const handleSubmit = (task) => {
    addTask(task)
    console.log(task)
  };

  return (
    <Screen style={styles.container}>
        <Formik
            initialValues={{
                id: 9,
                title: '',
                description: '',
                priority: 'low',
                time: moment().format('LL')
            }}
            onSubmit={(values) => handleSubmit(values)}
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            resetForm
          }) => (
              <View>
                <AppTextInput
                    name='title'
                    placeholder='Title'
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
                <AppButton 
                  onPress={handleSubmit} 
                  text='Submit'
                  color= 'primary'
                  />
              </View>
          )}
        </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    color: 'black',
    height: 100,
    width: '100%'
  },
  container: {
      padding: 10
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