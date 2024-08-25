import { Alert, Platform } from 'react-native';

interface AlertOption {
    text?: string;
    onPress?: () => void;
    style?: 'default' | 'cancel' | 'destructive';
}

type AlertPolyfill = (
    title?: string,
    description?: string,
    options?: AlertOption[],
    extra?: any
) => void;

const alertPolyfill: AlertPolyfill = (title, description, options = []) => {
    const result = window.confirm([title, description].filter(Boolean).join('\n'));
    
    if (result) {
        const confirmOption = options.find(({ style }) => style !== 'cancel');
        confirmOption && confirmOption.onPress && confirmOption.onPress();
    } else {
        const cancelOption = options.find(({ style }) => style === 'cancel');
        cancelOption && cancelOption.onPress && cancelOption.onPress();
    }
};

const alert = Platform.OS === 'web' ? alertPolyfill : Alert.alert;

export default alert;
