import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Flex } from "native-base";
import BasicInfoCard from "../components/BasicInfoCard";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

import { Text, Center, Box, View } from "native-base";

import { TouchableOpacity } from "react-native-gesture-handler";
import OrganizationCard from "../components/OrganizationCard";
import PullRequestCard from "../components/PullRequestCard";

const data= {
  id:123, 
  nickname: "example", 
  contributions_count: 12, 
  github_profile: "abc.com",
  organisations: {
    login: "login",
    avatar_url: "avatar_url",
    link:"link",
  },
  pull_requests: {
    title: "title",
    issue_url:"issue_url",
    repo_name:"repo_name",
    body:"body",
    CreatedAt:"CreatedAt"
  }
}

const UserScreen = () => {
  const [currentScreen, setScreen] = useState("basic_info");
  const navigation = useNavigation();

  const {
    params: { name },
  } = useRoute();

  // const [data, getRefreshedData] = useFetch(`users/${name}`);

  return (
    <Box rounded="lg" bg="gray.100">
      <Box
        pt="10"
        rounded="lg"
        px="4"
        mb="4"
        borderBottomWidth="1"
        borderColor="gray.500"
        bg="white"
      >
        <TouchableOpacity onPress={navigation.goBack}>
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
        <Center>
          <Text fontSize={25} pb="5" color="#00CCBB" px="5">
            User Information
          </Text>
        </Center>

        <Center>
          <Flex direction="row" mb="2.5">
            <TouchableOpacity onPress={() => setScreen("basic_info")}>
              <Text
                fontSize={16}
                color={currentScreen == "basic_info" ? "#00CCBB" : "gray.500"}
                px="5"
              >
                Basic Info
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setScreen("organisations")}>
              <Text
                fontSize={16}
                color={
                  currentScreen == "organisations" ? "#00CCBB" : "gray.500"
                }
                px="5"
              >
                Organisations
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setScreen("pull_requests")}>
              <Text
                fontSize={16}
                color={
                  currentScreen == "pull_requests" ? "#00CCBB" : "gray.500"
                }
                px="5"
              >
                Pull requests
              </Text>
            </TouchableOpacity>
          </Flex>
        </Center>
      </Box>

      <View>
        {currentScreen == "basic_info" ? (
          <BasicInfoCard
            key={data.id}
            name={data.nickname}
            profile={data.github_profile}
            contributions_count={data.contributions_count}
          />
        ) : currentScreen == "organisations" ? (
          <>
            <OrganizationCard
              key={data.id}
              organisations={data.organisations}
            />
          </>
        ) : (
          <PullRequestCard key={data.id} pull_requests={data.pull_requests} />
        )}
      </View>
    </Box>
  );
};

export default UserScreen;
