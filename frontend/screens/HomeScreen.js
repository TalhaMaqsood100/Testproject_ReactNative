import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "native-base";
import { Center, Heading, Box } from "native-base";
import UserCard from "../components/UserCard";

const list= require('../data.json')

const HomeScreen = () => {

  return (
    <SafeAreaView>
      <Center>
        <Heading fontWeight="medium" color="#00CCBB" py="4" bold italic>
          GitHub Users
        </Heading>
      </Center>
      <Box
        shadow="2"
        rounded="lg"
        w={{ base: "full", md: "full", lg: "lg" }}
        _light={{ bg: "coolGray.100" }}
        _dark={{ bg: "gray.700" }}
      >
        <ScrollView>
          {list?.map((user) => (
            <UserCard
              key={user.id}
              name={user.nickname}
              profile={user.github_profile}
            />
          ))}
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;
