import React from 'React';
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableHighlight,
    Image
} from 'react-native';

const Contact = ({item, onPress}) => {
    const fullName= `${item.name.first} ${item.name.last}`;
    return(
        <TouchableHighlight
            onPress={onPress}
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
    }
})