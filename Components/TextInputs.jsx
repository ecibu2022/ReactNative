import React from 'react'
import { View, TextInput } from 'react-native';

function TextInputs() {
    return (
        <View>
            <TextInput
                style={{
                    height: 40,
                    margin: 10,
                    backgroundColor: '#ffffff',
                    width: 350,
                    padding: 15,
                    borderColor: '#000000',
                    borderRadius: 12
                }}
                placeholder="Password" secureTextEntry
            />
        </View>
    )
}

export default TextInputs