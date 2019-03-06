import React from 'React';
import {View, Text, StyleSheet} from 'react-native';

class Me extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>NewContact Text</Text>
            </View>
        )
    }
}

export default Me;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})