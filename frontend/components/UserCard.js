import { Linking } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Text, Flex, Box } from "native-base";

const UserCard = ({ name, profile }) => {
  const navigation = useNavigation();

  return (
    <Box
      rounded="lg"
      bg="gray.200"
      m="2"
      p="4"
      borderBottomWidth="1"
      shadow="6"
      borderColor="gray.400"
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("UserScreen", { name })}
      >
        <Text fontWeight="medium" fontSize={20} color="#0c4a6e" py="1">
          {name}
        </Text>
      </TouchableOpacity>
      <Flex direction="row" mb="2.5" mt="1.5">
        <Text fontSize={15} color="#78716c" bold>
          Github Link:
        </Text>
        <Text
          fontSize={15}
          color="gray.400"
          onPress={() => Linking.openURL(`${profile}`)}
        >
          {profile}
        </Text>
      </Flex>
    </Box>
  );
};

export default UserCard;
