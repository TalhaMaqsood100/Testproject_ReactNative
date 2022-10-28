import { Linking } from "react-native";
import React from "react";
import { Text, Box, Center } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const PullRequestCard = ({ pull_requests }) => {
  return (
    <ScrollView>
      {pull_requests.length > 0 ? (
        pull_requests?.map((pull_request, index) => (
          <Box
            key={index}
            rounded="lg"
            m="2"
            p="4"
            borderBottomWidth="1"
            borderColor="#78716c"
          >
            <Text fontSize={20} color="#78716c" bold>
              {pull_request.title}
            </Text>
            <Text
              fontSize={15}
              color="blue.600"
              onPress={() => Linking.openURL(`${pull_request.issue_url}`)}
            >
              {pull_request.issue_url}
            </Text>
            <Text fontSize={15} color="#e11d48">
              {pull_request.repo_name}
            </Text>
            <Text fontSize={15} color="#78716c">
              {pull_request.body}
            </Text>
            <Text>{pull_request.CreatedAt}</Text>
          </Box>
        ))
      ) : (
        <Center>
          <Text>No Pull Request</Text>
        </Center>
      )}
    </ScrollView>
  );
};

export default PullRequestCard;
