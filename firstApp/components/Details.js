import React from 'React';
import {View, Text, StyleSheet} from 'react-native';

class Details extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>NewContact Text</Text>
            </View>
        )
    }
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})