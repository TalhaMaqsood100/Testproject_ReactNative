import { Linking } from "react-native";
import React from "react";
import { Text, Flex, Center, Box, View } from "native-base";
const BasicInfoCard = ({ name, profile, contributions_count }) => {
  return (
    <View>
      <Box rounded="lg" my="1" mx="2" pt="1" px="4" pb="6">
        <Center>
          <Text fontWeight="medium" fontSize={25} color="#0284c7">
            Basic Info
          </Text>
        </Center>
        <Flex direction="row" mb="1" mt="1">
          <Text fontSize={18} color="#78716c" bold>
            Name:
          </Text>
          <Text fontSize={18} pl="2" color="gray.400">
            {name}
          </Text>
        </Flex>
        <Flex direction="row" mb="1" mt="1">
          <Text fontSize={14} color="#78716c" bold>
            Github Profile Link:
          </Text>
          <Text
            fontSize={14}
            pl="2"
            color="#0ea5e9"
            onPress={() => Linking.openURL(`${profile}`)}
          >
            {profile}
          </Text>
        </Flex>
        <Flex direction="row" mb="1" mt="1">
          <Text fontSize={18} color="#78716c" bold>
            Contributions Count:
          </Text>
          <Text fontSize={18} pl="2" color="red.400">
            {contributions_count}
          </Text>
        </Flex>
      </Box>
    </View>
  );
};

export default BasicInfoCard;
