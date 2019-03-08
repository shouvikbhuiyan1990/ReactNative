import React from 'React';
import {ScrollView, StyleSheet} from 'react-native';

import Header from '../components/Header';
import Actions from '../components/Actions';

class Details extends React.Component {
    render() {
        const item = this.props.navigation.state.params;
        return (
            <ScrollView style={styles.container}>
                <Header {...item} />
                <Actions {...item}/>
            </ScrollView>
        )
    }
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})