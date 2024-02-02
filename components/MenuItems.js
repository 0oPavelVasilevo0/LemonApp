import React, { useState } from 'react';

import { View, Text, ScrollView, StyleSheet, SectionList, Pressable, FlatList } from 'react-native';

const menuItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
            { name: 'Hummus', price: '$5.00' },
            { name: 'Moutabal', price: '$5.00' },
            { name: 'Falafel', price: '$7.50' },
            { name: 'Marinated Olives', price: '$5.00' },
            { name: 'Kofta', price: '$5.00' },
            { name: 'Eggplant Salad', price: '$8.50' },
        ],
    },
    {
        title: 'Main Dishes',
        data: [
            { name: 'Lentil Burger', price: '$10.00' },
            { name: 'Smoked Salmon', price: '$14.00' },
            { name: 'Kofta Burger', price: '$11.00' },
            { name: 'Turkish Kebab', price: '$15.50' },
        ],
    },
    {
        title: 'Sides',
        data: [
            { name: 'Fries', price: '$3.00', id: '11K' },
            { name: 'Buttered Rice', price: '$3.00' },
            { name: 'Bread Sticks', price: '$3.00' },
            { name: 'Pita Pocket', price: '$3.00' },
            { name: 'Lentil Soup', price: '$3.75' },
            { name: 'Greek Salad', price: '$6.00' },
            { name: 'Rice Pilaf', price: '$4.00' },
        ],
    },
    {
        title: 'Desserts',
        data: [
            { name: 'Baklava', price: '$3.00' },
            { name: 'Tartufo', price: '$3.00' },
            { name: 'Tiramisu', price: '$5.00' },
            { name: 'Panna Cotta', price: '$5.00' },
        ],
    },
];

const Item = ({ name, price }) => (
    <View style={menuStyles.innerContainer}>
        <Text style={menuStyles.itemText}>{name}</Text>
        <Text style={menuStyles.itemText}>{price}</Text>
    </View>
);

const Separator = () => <View style={menuStyles.separator} />;

{/*const Footer = () => (
  <Text style={menuStyles.footerText}>
    All Rights Reserved by Little Lemon 2022
  </Text>
);*/}

const MenuItems = () => {
    const [showMenu, setShowMenu] = useState(false);

    const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

    const renderSectionHeader = ({ section: { title } }) => (
        <Text style={menuStyles.sectionHeader}>{title} </Text>
    );

    return (
        <View style={menuStyles.container}>
            {/* <ScrollView
        horizontal={false}
        indicatorStyle={'white'}
        style={menuStyles.innerContainer}>*/}

            {!showMenu && (
                <Text style={menuStyles.infoSection}>
                    Little Lemon is a charming neighborhood bistro that serves simple food
                    and classic cocktails in a lively but casual environment. View our
                    menu to explore our cuisine with daily specials!
                </Text>
            )}
            <Pressable
                style={menuStyles.button}
                onPress={() => setShowMenu(prevState => !prevState)}>
                <Text style={menuStyles.buttonText}>
                    {showMenu ? 'Home' : 'View Menu'}
                </Text>
            </Pressable>
            {showMenu && (
                <SectionList
                    keyExtractor={(item, index) => item + index}
                    sections={menuItemsToDisplay}
                    renderItem={renderItem}
                    renderSectionHeader={renderSectionHeader}
                    // ListFooterComponent={Footer}
                    ItemSeparatorComponent={Separator}></SectionList>
            )}

            {/* <SectionList
        keyExtractor={(item, index) => item + index}
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      //   ListFooterComponent={Footer} 
        ItemSeparatorComponent={Separator}>
      </SectionList>*/}

            {/* <Text style={menuStyles.headerText}>View Menu</Text>
        <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}></FlatList>*/}

            {/*</ScrollView>*/}
        </View>
    );
};

const menuStyles = StyleSheet.create({
    container: {
        // flex: 0.75,
        flex: 1,
    },
    innerContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        // backgroundColor: 'black',
        backgroundColor: '#333333',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sectionHeader: {
        backgroundColor: '#F4CE14',
        color: '#333333',
        fontSize: 34,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: '#EDEFEE',
    },
    // headerText: {
    //   color: 'white',
    //   // backgroundColor: 'black',
    //   backgroundColor: '#333333',
    //   paddingVertical: 20,
    //   fontSize: 30,
    //   flexWrap: 'wrap',
    //   textAlign: 'center',
    // },

    // footerText: {
    //   backgroundColor: '#EE9972',
    //   color: '#EDEFEE',
    //   fontSize: 20,
    //   flexWrap: 'wrap',
    //   textAlign: 'center',
    // },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 40,
        backgroundColor: '#EDEFEE',
        borderColor: '#EDEFEE',
        borderWidth: 2,
        borderRadius: 12
    },
    buttonText: {
        color: '#333333',
        textAlign: 'center',
        fontSize: 32,
    },
    infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    },

    itemText: {
        color: '#F4CE14',
        fontSize: 20,
    },
});

export default MenuItems;
