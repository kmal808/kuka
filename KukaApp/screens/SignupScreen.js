import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import {
  Button,
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import { AuthHeader } from '../components/AuthHeader';
import { View } from 'react-native';
import { Formik } from 'formik';

export const SignupScreen = () => {
  const styles = useStyleSheet(themedStyles);
  const [inProgress, setInProgress] = useState(false);
  const [message, setMessage] = useState();

  const createUser = async (email, password) => {
    try {
      setMessage(null);
      setInProgress(true);

      // After the user creates an account, they are automatically signed in.
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setMessage(error.message);
      console.log(error);
      setInProgress(false);
    }
  };

  return (
    <Layout style={styles.container}>
      <AuthHeader
        titleText="Sign Up"
        leadText="Add your email and password to create an account."
      />
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async values => {
          await createUser(values.email, values.password);
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.bodyContainer}>
            <Input
              label="EMAIL"
              autoCapitalize="none"
              placeholder="you@email.com"
              style={styles.formField}
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <Input
              label="PASSWORD"
              placeholder="Password"
              style={styles.formField}
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
            />
            <Button
              style={styles.formField}
              onPress={handleSubmit}
              disabled={inProgress}
            >
              CREATE ACCOUNT
            </Button>

            {/*TODO: Fix styling of this error message*/}
            {message && <Text>{message}</Text>}
          </View>
        )}
      </Formik>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-1',
    flex: 1,
  },
  bodyContainer: {
    padding: 24,
    justifyContent: 'space-between',
  },
  formField: {
    marginTop: 10,
  },
  signInButton: {},
});
