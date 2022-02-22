import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import React from 'react'


const foods = [

    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "£13.50",
        image: "https://goop-img.com/wp-content/uploads/2020/03/Goop0846-1-1024x780.jpg"
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing Indian dish with tenderloin chicken off the ",
        price: "£19.20",
        image: "https://cdn.tasteatlas.com/images/recipes/d91e7282400a4aa793ebd97c53e3be2a.jpg"
    },

    {
        title: "Chilaquiles",
        description: "Chilaquiles with cheese and sacue. ",
        price: "£14.50",
        image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-05-How-To-Chilaquiles%2FJoeLingeman_2019-04-22_PHOTO_Kitchn65454_HT_Chilaquiles"
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "£13.50",
        image: "https://goop-img.com/wp-content/uploads/2020/03/Goop0846-1-1024x780.jpg"
    },
];

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "600"

    }

})

export default function MenuItems() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider width={0.5} orientation="vertical"/>
                </View>
                
            ))}
        </ScrollView>
    )
}

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>

)

const FoodImage = (props) => (
    <View>
        <Image source={{ uri: props.food.image }}
            style={{ width: 100, height: 100, borderRadius: 8 }} />

    </View>
)


