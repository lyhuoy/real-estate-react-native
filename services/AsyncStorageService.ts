import AsyncStorage from "@react-native-async-storage/async-storage";

export const AsyncStorageService = {
  setItem: async (key: string, value: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error(`Error setting item in AsyncStorage: ${error}`);
    }
  },

  getItem: async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error(`Error getting item from AsyncStorage: ${error}`);
      return null;
    }
  },

  removeItem: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from AsyncStorage: ${error}`);
    }
  },

  clear: async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error(`Error clearing AsyncStorage: ${error}`);
    }
  },
};
