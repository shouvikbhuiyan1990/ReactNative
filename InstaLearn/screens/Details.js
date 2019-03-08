import React from 'React';
import {View, Text, StyleSheet} from 'react-native';

import Header from '../components/Header';

class Details extends React.Component {
    render() {
        const item = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Header {...item} />
            </View>
        )
    }
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})