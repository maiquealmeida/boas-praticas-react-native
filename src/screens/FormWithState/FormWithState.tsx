import { View } from 'react-native';
import { styles } from './style';
import { Card, Input, Text } from '@rneui/themed';
import { useRef, useState } from 'react';
import { IFormTestData } from '../../types/IFormTestData';

const INITIAL_STATE = {
  name: '',
  address: '',
  city: '',
  state: '',
  zipCode: ''
}

export function FormWithState() {
  const renderCount = useRef<number>(0);
  const [data, setData] = useState<IFormTestData>(INITIAL_STATE)

  const handleChange = (name: string, value: string) => {
    setData((prev) => ({ ...prev, [name]: value }))
  }

  renderCount.current = renderCount.current + 1;

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Form With Set State</Card.Title>
        <Card.Divider />
        <View style={styles.form}>
          <Input label="Nome" value={data.name} onChangeText={(text) => handleChange('name', text)} />
          <Input label="Endereço" onChangeText={(text) => handleChange('address', text)} />
          <Input label="Cidade" onChangeText={(text) => handleChange('city', text)} />
          <Input label="UF" onChangeText={(text) => handleChange('state', text)} />
          <Input label="CEP" onChangeText={(text) => handleChange('zipCode', text)} />
        </View>
      </Card>
      <Text>Render Count: {renderCount.current}</Text>
    </View>
  );
}