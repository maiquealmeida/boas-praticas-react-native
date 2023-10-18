import { View } from 'react-native';
import { styles } from './style';
import { Button, Card, Input, Text } from '@rneui/themed';
import { useEffect, useRef, useState } from 'react';
import { IFormTestData } from '../../types/IFormTestData';
import { useForm } from 'react-hook-form';

export function FormWithReactHookForm() {
  const renderCount = useRef<number>(0);
  const { register, setValue, handleSubmit } = useForm<IFormTestData>();

  const onSubmit = (data: IFormTestData) => {
    console.log('Data submited: ', data)
  }

  useEffect(() => {
    register('name')
    register('address')
    register('city')
    register('state')
    register('zipCode')
  }, [register])

  renderCount.current = renderCount.current + 1;

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Form with React Hook Form</Card.Title>
        <Card.Divider />
        <View style={styles.form}>
          <Input label="Nome" onChangeText={(text) => setValue('name', text)} />
          <Input label="Endereço" onChangeText={(text) => setValue('address', text)} />
          <Input label="Cidade" onChangeText={(text) => setValue('city', text)} />
          <Input label="UF" onChangeText={(text) => setValue('state', text)} />
          <Input label="CEP" onChangeText={(text) => setValue('zipCode', text)} />
          <Button onPress={handleSubmit(onSubmit)}> Enviar</Button>
        </View>
      </Card>
      <Text>Render Count: {renderCount.current}</Text>
    </View>
  );
}