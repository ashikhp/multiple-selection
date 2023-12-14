// HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Keyboard, Alert } from 'react-native';

export default function HomeScreen({ navigation }) {
    const [selectedItems, setSelectedItems] = useState(
        [
            // {id:"1", label: 'Item 1' },{id:"2", label: 'Item 2' },{id:"3", label: 'Item 3' }, // edit
        ]
    );

    const openSelectionScreen = () => {
        navigation.navigate('Selection', {
            selectedItems,
            onItemsSelectedCallback: handleItemsSelected,
        });
    };
    useEffect(() => {
        const unsubscribeFocus = navigation.addListener('focus', () => {
        });

        const unsubscribeBlur = navigation.addListener('blur', () => {
            Keyboard.dismiss();
        });

        return () => {
            unsubscribeFocus();
            unsubscribeBlur();
        };
    }, [navigation]);

    const handleItemsSelected = (selected) => {
        setSelectedItems(selected);

    // Alert.alert("kk", JSON.stringify(arrayOfIds))

    };
    const arrayOfIds = selectedItems.map(item => item.id);

    // Alert.alert("kk", JSON.stringify(arrayOfIds))


    return (
        <View>
            <TextInput
                placeholder="Select items"
                onFocus={openSelectionScreen}
                value={selectedItems.map(item => item.label).join(', ')}
            />
        </View>
    );
}
