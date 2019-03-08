import React from 'React';
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableHighlight,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Capitalize} from '../Helper/capitalize';

const Contact = ({item, onPress}) => {
    const fullName= `${Capitalize(item.name.first)} ${Capitalize(item.name.last)}`;
    return(
        <TouchableHighlight
            onPress={onPress}
            underlayColor={'rgba(154, 154, 154, 0.25)'}
        >
            <View style={styles.row}>
                <Image
                    style={styles.thumbnail}
                    source={{uri: item.picture.thumbnail}}
                />
                <View>
                    <Text>
                        {fullName}
                    </Text>
                    <Text>
                        {item.email}
                    </Text>
                </View>
                <View style={styles.iconContainer}>
                    <Icon 
                        name="ios-arrow-forward"
                        size={25}
                        style={styles.icon}
                    />
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default Contact;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        flex: 1
    },
    thumbnail: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    iconContainer: {
        flex: 1
    },
    icon: {
        alignSelf: 'flex-end'
    }
})