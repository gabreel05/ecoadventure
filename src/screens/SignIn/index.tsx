import React from 'react';
import { Layout, Button, Input } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { Image } from 'react-native';
import { Styles } from './styles';

type User = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const { handleSubmit, control } = useForm<User>();

  const onSubmit = handleSubmit(({ email, password }) => {
    navigation.navigate('Home', {
      email,
      password,
    });
  });

  return (
    <Layout style={Styles.container}>
      <Image source={require('../../assets/icon.png')} />

      <Controller
        control={control}
        defaultValue=""
        name="email"
        render={({ value, onChange, onBlur }) => (
          <Input
            autoCapitalize="none"
            keyboardType="email-address"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            placeholder="Email"
            style={Styles.input}
            textContentType="emailAddress"
            value={value}
          />
        )}
        rules={{ required: true }}
      />

      <Controller
        control={control}
        defaultValue=""
        name="password"
        render={({ value, onChange, onBlur }) => (
          <Input
            autoCapitalize="none"
            keyboardType="visible-password"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            placeholder="Password"
            style={Styles.input}
            textContentType="password"
            value={value}
          />
        )}
        rules={{ required: true }}
      />

      <Button onPress={onSubmit}>Sign In</Button>
    </Layout>
  );
};

export default SignIn;
