import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import { ScrollView } from 'react-native';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';

const YELP_API_KEY =
  "KP2E-Y_QzCTjMwKcPx0uVZCpT4Y7Mzhuh-jyhNYLEOu0-DONGqmm8Xv-6-hoJEXR_gxFWB1ICJgJ_FLfey_sKrYSG-LaQ8w23m3DZl0MPwslL9QMOEu6baC-kugMYnYx"

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants)
  const [city, setCity] = React.useState("Glasgow");
  const getRestaurantFromYelp = () => {
    const yelpurl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;


    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };


    return fetch(yelpurl, apiOptions)
      .then((res) => res.json())
      .then(json => setRestaurantData(json.businesses))
  }
  
  useEffect(() => {
    getRestaurantFromYelp()
  }, [city])

  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView >
    </SafeAreaView>
  );
}