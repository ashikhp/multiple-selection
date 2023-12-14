// SelectionScreen.js
import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, Button,Alert } from 'react-native';

export default function SelectionScreen({ route, navigation }) {
  const { selectedItems: initialSelectedItems, onItemsSelectedCallback } = route.params;

  const [selectedItems, setSelectedItems] = useState([...initialSelectedItems]);
  const data = [
    { id: '1', label: 'Item 1' },
    { id: '2', label: 'Item 2' },
    { id: '3', label: 'Item 3' },
  ];

  const toggleSelection = (itemId) => {
    const index = selectedItems.findIndex((item) => item.id === itemId);

    if (index === -1) {
      const selectedItem = data.find((item) => item.id === itemId);
      setSelectedItems([...selectedItems, selectedItem]);
    } else {
      const updatedSelection = [...selectedItems];
      updatedSelection.splice(index, 1);
      setSelectedItems(updatedSelection);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => toggleSelection(item.id)}>
         <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16 }}>

        <Text>{item.label}</Text>
        <Text>{selectedItems.some(selectedItem => selectedItem.id === item.id) ? ' ✓' : ''}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleDonePress = () => {
    onItemsSelectedCallback(selectedItems);
    navigation.goBack();
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Button title="Done" onPress={handleDonePress} />
    </View>
  );
}
