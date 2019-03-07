import React from 'React';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Contact from './Contact';
import { contacts } from '../Data';

class NewContact extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                data={contacts}
                renderItem={({item}) => <View><Contact item={item} onPress={this.handlePress} /></View>}
                keyExtractor={(item) => item.email}
                />
            </View>
        )
    }

    handlePress() {
        return null;
    }
}

export default NewContact;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})