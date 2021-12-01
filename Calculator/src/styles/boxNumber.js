import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    num: {
        fontSize: 30,
        textAlign: 'center',
        lineHeight: 90,
        color: 'white',
    },
    input: {
        height: 140,
        lineHeight: 140,
        width: '100%',
        fontSize: 60,
        backgroundColor: 'pink',
        textAlign: 'right',
        paddingRight: 20,
        marginBottom: 20
    },
    box: {
        flexDirection: 'column', 
        width: '30%', 
        height: 90,
        backgroundColor: '#607B8D',
        borderRadius: 100,
        margin: 4
    },
});

export default styles;