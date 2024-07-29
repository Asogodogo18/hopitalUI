import ActivityItem from "../../componant/activityItem";
import FakeActitvity from "../../fakeData/fakeActivity";
import React from "react";
import Styles from "../../componant/activityItem/style";
import SymptomItem from "../../componant/symptomItem";
import dashboardStyles from "./style";
import { FakeDoctor } from "../../fakeData/fakeDoctor";
import { fakeSymptom } from "../../fakeData/fakeSymptom";

import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Home = () => {
  return (
    <ScrollView contentContainerStyle={{}}>
      {/* debut de header */}
      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.userName}>CHEICK ABBA</Text>
        <Image
          source={require("../../../assets/12.jpg")}
          style={dashboardStyles.userImg}
        />
      </View>
      {/* fin */}
      {/* la liste des activites */}
      <FlatList
        horizontal={true}
        data={FakeActitvity}
        style={Styles.scrollable}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <ActivityItem item={item} />;
        }}
      />
      {/* fin de la liste des activite */}
      {/* liste des symptomes debut */}
      <View style={dashboardStyles.title}>
        <Text style={dashboardStyles.titleBold}>Qui symptomes avez vous ?</Text>
      </View>
      <FlatList
        horizontal={true}
        data={fakeSymptom}
        style={Styles.scrollable}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <SymptomItem item={item} />;
        }}
      />
      {/* liste des symptomes fin */}
      {/* Docteur Liste */}
      <View style={dashboardStyles.title_space_between}>
        <Text style={dashboardStyles.titleBold}>Qui symptomes avez vous ?</Text>
        <TouchableOpacity>
          <Text style={dashboardStyles.link}>Afficher Tout</Text>
        </TouchableOpacity>
      </View>
      <View style={dashboardStyles.doctorsContainer}>
        {FakeDoctor.map((item, index) => {
          return (
            <TouchableOpacity key={item.id} style={dashboardStyles.docotrsCard}>
              <Image source={{uri:`${item.img}`}} style={dashboardStyles.docotImg}/>
              <View style={dashboardStyles.dictorsInfo}>
              <Text style={dashboardStyles.dictorsName}>{item.fullname}</Text>
              <Text style={dashboardStyles.dictorsSpec}>{item.speciality}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      {/* fin Docteur Liste */}
    </ScrollView>
  );
};

export default Home;
