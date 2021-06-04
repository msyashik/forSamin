import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from "../constants";

const Home = ({ navigation }) => {
  // Dummy Datas

  const initialCurrentLocation = {
    streetName: "RichCars",
    gps: {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    },
  };

  const categoryData = [
    {
      id: 1,
      name: "Rolls-Royce",
      icon: icons.rolls,
    },
    {
      id: 2,
      name: "Ferrari",
      icon: icons.ferrari,
    },
    {
      id: 3,
      name: "BMW",
      icon: icons.bmw,
    },
    {
      id: 4,
      name: "Lamborghini",
      icon: icons.lam,
    },
  ];

  // price rating
  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  const restaurantData = [
    {
      id: 1,
      name: "Ferrari F-60",
      rating: 4.8,
      categories: [5, 7],
      priceRating: affordable,
      photo: images.ferrarif60america,
      duration: "Hot Deal",
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
      courier: {
        avatar: images.avatar_1,
        name: "Amy",
      },
      menu: [
        {
          menuId: 1,
          name: "Rolls-Royce",
          photo: images.pag,
          description: "The Ultimate Driving Experience",
          calories: 200,
          price: 10,
        },
        {
          menuId: 2,
          name: "Rolls-Royce",
          photo: images.hanssey,
          description: "The Ultimate Driving Experience",
          calories: 250,
          price: 15,
        },
        {
          menuId: 3,
          name: "Rolls-Royce",
          photo: images.zenvo,
          description: "The Ultimate Driving Experience",
          calories: 194,
          price: 8,
        },
      ],
    },
    {
      id: 2,
      name: "Laferri",
      rating: 4.8,
      categories: [2, 4, 6],
      priceRating: expensive,
      photo: images.ferrariLaferri,
      duration: "15 - 20 min",
      location: {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
      },
      courier: {
        avatar: images.avatar_2,
        name: "Jackson",
      },
      menu: [
        {
          menuId: 4,
          name: "Ferrari P87",
          photo: images.koen1,
          description: "The Ultimate Driving Experience",
          calories: 250,
          price: 15,
        },
        {
          menuId: 5,
          name: "Lamborghini F91",
          photo: images.koen2,
          description: "The Ultimate Driving Experience",
          calories: 250,
          price: 20,
        },
        {
          menuId: 6,
          name: "BMW X7",
          photo: images.koen1,
          description: "The Ultimate Driving Experience",
          calories: 100,
          price: 10,
        },
        {
          menuId: 7,
          name: "Battista",
          photo: images.koen2,
          description: "The Ultimate Driving Experience",
          calories: 100,
          price: 10,
        },
      ],
    },
    {
      id: 3,
      name: "Pininfarina Battista",
      rating: 4.8,
      categories: [3],
      priceRating: expensive,
      photo: images.hanssey,
      duration: "20 - 25 min",
      location: {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
      },
      courier: {
        avatar: images.avatar_3,
        name: "James",
      },
      menu: [
        {
          menuId: 8,
          name: "Lamborghini",
          photo: images.pag,
          description: "The Ultimate Driving Experience",
          calories: 100,
          price: 20,
        },
      ],
    },
    {
      id: 4,
      name: "BMW",
      rating: 4.8,
      categories: [8],
      priceRating: expensive,
      photo: images.battista,
      duration: "10 - 15 min",
      location: {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
      },
      courier: {
        avatar: images.avatar_4,
        name: "Ahmad",
      },
      menu: [
        {
          menuId: 9,
          name: "Pag",
          photo: images.battista,
          description: "The Ultimate Driving Experience",
          calories: 100,
          price: 50,
        },
      ],
    },
    {
      id: 5,
      name: "Rolls-Royce F1",
      rating: 4.8,
      categories: [1, 2],
      priceRating: affordable,
      photo: images.zenvo,
      duration: "15 - 20 min",
      location: {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
      },
      courier: {
        avatar: images.avatar_4,
        name: "Muthu",
      },
      menu: [
        {
          menuId: 10,
          name: "Ferrari",
          photo: images.zenvo,
          description: "The Ultimate Driving Experience",
          calories: 200,
          price: 5,
        },
        {
          menuId: 11,
          name: "Rolls-Royce",
          photo: images.hanssey,
          description: "The Ultimate Driving Experience",
          calories: 300,
          price: 8,
        },
        {
          menuId: 12,
          name: "Rolls-Royce",
          photo: images.pag,
          description: "The Ultimate Driving Experience",
          calories: 300,
          price: 8,
        },
        {
          menuId: 13,
          name: "Ferrari",
          photo: images.pag,
          description: "The Ultimate Driving Experience",
          calories: 300,
          price: 8,
        },
      ],
    },
    {
      id: 6,
      name: "BMW",
      rating: 4.9,
      categories: [9, 10],
      priceRating: affordable,
      photo: images.battista,
      duration: "35 - 40 min",
      location: {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
      },
      courier: {
        avatar: images.avatar_1,
        name: "Jessie",
      },
      menu: [
        {
          menuId: 12,
          name: "Ferrari",
          photo: images.battista,
          description: "The Ultimate Driving Experience",
          calories: 100,
          price: 2,
        },
        {
          menuId: 13,
          name: "Lamborghini",
          photo: images.battista,
          description: "The Ultimate Driving Experience",
          calories: 100,
          price: 3,
        },
        {
          menuId: 14,
          name: "Ferrari",
          photo: images.battista,
          description: "The Ultimate Driving Experience",
          calories: 300,
          price: 20,
        },
      ],
    },
  ];

  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [car, setcar] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation
  );

  function onSelectCategory(category) {
    //filter restaurant
    let CarList = restaurantData.filter((a) =>
      a.categories.includes(category.id)
    );

    setcar(CarList);

    setSelectedCategory(category);
  }

  function getCategoryNameById(id) {
    let category = categories.filter((a) => a.id == id);

    if (category.length > 0) return category[0].name;

    return "";
  }

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", height: 50 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
        ></TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              backgroundColor: COLORS.lightGray3,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
            }}
          ></View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: "center",
          }}
        ></TouchableOpacity>
      </View>
    );
  }

  function renderMainCategories() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(item)}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGray,
            }}
          >
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>

          <Text
            style={{
              marginTop: SIZES.padding,
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              ...FONTS.body5,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ padding: SIZES.padding * 2 }}>
        <Text style={{ ...FONTS.h1 }}>Rich</Text>
        <Text style={{ ...FONTS.h1 }}>Deals</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
        />
      </View>
    );
  }

  function renderCarList() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{ marginBottom: SIZES.padding * 2 }}
        onPress={() =>
          navigation.navigate("Restaurant", {
            item,
            currentLocation,
          })
        }
      >
        {/* Image */}
        <View
          style={{
            marginBottom: SIZES.padding,
          }}
        >
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 200,
              borderRadius: SIZES.radius,
            }}
          />

          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 50,
              width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              ...styles.shadow,
            }}
          >
            <Text style={{ ...FONTS.h4 }}>HOT DEAL</Text>
          </View>
        </View>

        {/* Restaurant Info */}
        <Text style={{ ...FONTS.body2 }}>{item.name}</Text>
      </TouchableOpacity>
    );

    return (
      <FlatList
        data={car}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}
      {renderCarList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
