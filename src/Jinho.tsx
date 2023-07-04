import React from 'react';
// @ts-ignore
import { Box, Text } from 'ink';

export const Jinho = () => {
  return (
    <Box
      width={'28'}
      paddingTop={1}
      paddingBottom={1}
      paddingLeft={2}
      paddingRight={2}
      margin={2}
      flexDirection="column"
      borderColor={'#EEEEEE'}
      borderStyle={'round'}
    >
      <Box marginBottom={1} alignItems="center">
        <Text bold color={'#EEEEEE'}>
          Hello there 👋
        </Text>
      </Box>
      <Box marginBottom={1} alignItems="center">
        <Text color={'#EEEEEE'}>
          I'm{' '}
          <Text color={'#068FFF'} bold>
            Jeon Jinho
          </Text>
          , a Frontend Developer that loves to code and build products with a
          delightful user experience.
        </Text>
      </Box>
      <Box alignItems="center">
        <Text color={'#EEEEEE'}>
          Checkout my github!{' '}
          <Text underline>https://github.com/Jinho1011</Text>
        </Text>
      </Box>
    </Box>
  );
};
