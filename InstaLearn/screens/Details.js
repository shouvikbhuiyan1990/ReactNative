import React from 'React';
import {View, Text, StyleSheet} from 'react-native';

import Header from '../components/Header';

class Details extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{JSON.stringify(this.props.navigation.state.params)}</Text>
                <Header />
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