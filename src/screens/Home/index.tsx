import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { Styles } from './styles';
import { useRoute } from '@react-navigation/native';

interface Params {
  email: string;
  password: string;
}

const Home: React.FC = () => {
  const route = useRoute();

  const params = route.params as Params;

  return (
    <Layout style={Styles.container}>
      <Text>{params.email}</Text>
      <Text>{params.password}</Text>
    </Layout>
  );
};

export default Home;
