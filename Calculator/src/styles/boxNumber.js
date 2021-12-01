import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    num: {
        fontSize: 30,
        textAlign: 'center',
        lineHeight: 80,
        color: 'white',
        fontWeight: 'bold',
    },
    input: {
        height: 100,
        lineHeight: 100,
        width: '100%',
        fontSize: 50,
        color: '#5c1f8f',
        backgroundColor: '#f7749d', 
        textAlign: 'right',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    box: {
        flexDirection: 'column', 
        width: '30%', 
        height: 80,
        backgroundColor: '#ADB2D9',
        borderRadius: 100,
        margin: 4
    },
});

export default styles;