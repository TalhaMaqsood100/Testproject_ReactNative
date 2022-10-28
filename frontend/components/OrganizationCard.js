import { Linking } from "react-native";
import React from "react";
import { Text, Box, Center } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const OrganizationCard = ({ organisations }) => {
  return (
    <ScrollView>
      {organisations.length > 0 ? (
        organisations?.map((organisation, index) => (
          <Box
            key={index}
            rounded="lg"
            m="2"
            p="4"
            borderBottomWidth="1"
            borderColor="#78716c"
          >
            <Text fontSize={20} color="#78716c" bold>
              {organisation.login}
            </Text>
            <Text
              fontSize={15}
              color="#78716c"
              onPress={() => Linking.openURL(`${organisation.avatar_url}`)}
            >
              {organisation.avatar_url}
            </Text>
            <Text
              color="blue.600"
              onPress={() => Linking.openURL(`${organisation.link}`)}
            >
              {organisation.link}
            </Text>
            <Text>This is what we're going to have in the near future</Text>
            <Text>We have to have this for a month in about two weeks of the world</Text>
            <Text></Text>
          </Box>
        ))
      ) : (
        <Center>
          <Text>No Organization</Text>
        </Center>
      )}
    </ScrollView>
  );
};

export default OrganizationCard;
