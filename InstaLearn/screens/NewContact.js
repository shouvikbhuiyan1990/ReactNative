import React from 'React';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Contact from './Contact';
import { contacts } from '../Data';

class NewContact extends React.Component {
    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                data={contacts}
                renderItem={({item}) => <View><Contact item={item} onPress={()=>this.handlePress(item)} /></View>}
                keyExtractor={(item) => item.email}
                />
            </View>
        )
    }

    handlePress( item ) {
        this.props.navigation.navigate('Details', item);
    }
}

export default NewContact;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})