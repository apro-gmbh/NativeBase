import React from 'react';
import { ScrollView } from 'native-base';
import { View } from 'react-native-web';
export const Example = () => {
  return (
    <ScrollView
      px={90}
      _contentContainerStyle={{ bg: 'lime.300', px: '44px', w: '100%' }}
      // style={{ backgroundColor: 'blue' }}
      height={400}
    >
      {/* <VStack>
        {[
          'one',
          'two',
          'three',
          'four',
          'five',
          'six',
          'seven',
          'eight',
          'nine',
          'ten',
          'eleven',
        ].map((val) => (
          <Center rounded="lg" p={7} bg="primary.400" my={5} mb={3}>
            {val}
          </Center>
        ))}
      </VStack> */}
      <View onClick={() => alert('hello')}>This is demo view</View>
    </ScrollView>
  );
};
