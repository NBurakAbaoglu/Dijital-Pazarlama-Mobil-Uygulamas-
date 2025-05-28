import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthCheckScreen from './screens/AuthCheckScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';
import SettingsScreen from './screens/SettingScreen';
import BildirimAyarları from './screens/BildirimAyarları';
import BildirimGeçmişi from './screens/BildirimGeçmişi';
import Gizlilik from './screens/Gizlilik';
import KameraIzni from './screens/Kameraİzni';
import HesapBilgileri from './screens/HesapBilgileri';
import SifreDegistir from './screens/ŞifreDeğiştir';
import VeriAnaliziEkrani from './screens/VeriAnaliziEkrani';
import Sikayet from './screens/Sikayet';
import HedefSayfasi from './screens/HedefSayfasi';
import Kampanya from './screens/Kampanya';
import StrategySummary from './screens/StrategySummary';
import PaymentInfoScreen from './screens/PaymentInfoScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthCheck" screenOptions={{ headerShown: false }}>
        {/* Giriş kontrolü */}
        <Stack.Screen name="AuthCheck" component={AuthCheckScreen} options={{ headerShown: false }} />
        
        <Stack.Screen name="Giris" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Kayıt Ol' }} />
        <Stack.Screen name="AnaSayfa" component={HomeScreen} options={{ title: 'Ana Sayfa' }} />

        <Stack.Screen name="Ayarlar" component={SettingsScreen} options={{ title: 'Ayarlar' }} />
        <Stack.Screen name="Bildirimler" component={BildirimAyarları} options={{ title: 'Bildirim Ayarları' }} />
        <Stack.Screen name="BildirimGeçmişi" component={BildirimGeçmişi} options={{ headerShown: false }} />
        <Stack.Screen name="Gizlilik" component={Gizlilik} options={{ title: 'Gizlilik' }} />
        <Stack.Screen name="Kamera" component={KameraIzni} options={{ title: 'Kamera' }} />
        <Stack.Screen name="HesapBilgileri" component={HesapBilgileri} options={{ title: 'Hesap Bilgileri' }} />
        <Stack.Screen name="ŞifreDeğiştir" component={SifreDegistir} options={{ title: 'Şifre Değiştir' }} />
        <Stack.Screen name="VeriAnaliziEkrani" component={VeriAnaliziEkrani} options={{ title: 'Veri Analizi' }} />
        <Stack.Screen name="Sikayet" component={Sikayet} options={{ title: 'Şikayet' }} />
        <Stack.Screen name="HedefSayfasi" component={HedefSayfasi} options={{ title: 'Hedef Sayfası' }} />
        <Stack.Screen name="Kampanya" component={Kampanya} options={{ title: 'Kampanya' }} />
        <Stack.Screen name="StrategySummary" component={StrategySummary} options={{ title: 'Strateji Özeti' }} />
        <Stack.Screen
          name="PaymentInfo"
          component={PaymentInfoScreen}
          options={{
            title: 'Kredi Kartı Bilgileri',
            headerStyle: { backgroundColor: '#1a1a1a' },
            headerTintColor: '#00ff99',
          }}
        />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
