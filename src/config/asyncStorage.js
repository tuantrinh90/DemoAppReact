import { AsyncStorage } from 'react-native';

export const setData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log(error);
    }
}

export const getData = async key => {
    let value = null;

    try {
        value = await AsyncStorage.getItem(key);
    } catch (error) {
        console.log(error);
    }

    return value;
}


export const removeData = async key => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log(error);
    }
}

