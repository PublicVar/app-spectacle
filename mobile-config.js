
App.info({
  id: 'com.clea.simplon.reunion',
  name: 'Journal de la Ligne D...',
  description: 'Cette application vous permet de vous avertir quand le spectacle de votre enfant va commencer.',
  author: 'Simplon Réunion',
  email: 'nludovic@simplon.co',
  website: 'http://simplonreunion.co'
});
// Set up resources such as icons and launch screens.
App.icons({
    'iphone': 'mobile/icons/ios/res/icon-60.png',
    'iphone_2x':'mobile/icons/ios/res/icon-60@2x.png', 
    'iphone_3x':'mobile/icons/ios/res/icon-60@3x.png',
    'ipad':'mobile/icons/ios/res/icon-76.png',
    'ipad_2x':'mobile/icons/ios/res/icon-76@2x.png', 
    'ipad_pro':'mobile/icons/ios/res/icon-60@3x.png', 
    'ios_settings':'mobile/icons/ios/res/icon-small.png', 
    'ios_settings_2x':'mobile/icons/ios/res/icon-small@2x.png', 
    'ios_settings_3x':'mobile/icons/ios/res/icon-small@3x.png', 
    'ios_spotlight':'mobile/icons/ios/res/icon-40.png', 
    'ios_spotlight_2x':'mobile/icons/ios/res/icon-40@2x.png', 
    'android_mdpi':'mobile/icons/android/res/drawable-mdpi/icon.png', 
    'android_hdpi':'mobile/icons/android/res/drawable-hdpi/icon.png', 
    'android_xhdpi':'mobile/icons/android/res/drawable-xhdpi/icon.png', 
    'android_xxhdpi':'mobile/icons/android/res/drawable-xxhdpiicon.png', 
    'android_xxxhdpi':'mobile/icons/android/res/drawable-xxhdpiicon.png',
});
App.launchScreens({
    'iphone_2x':'mobile/splash/ios/res/Default@2x~iphone.png', 
    'iphone5':'mobile/splash/ios/res/Default-568h@2x~iphone.png',
    'iphone6':'mobile/splash/ios/res/Default-667h@2x~iphone.png', 
    'iphone6p_portrait':'mobile/splash/ios/res/Default-Portrait-736h@3x.png',
    'iphone6p_landscape':'mobile/splash/ios/res/Default-Landscape-736h@3x.png', 
    'ipad_portrait':'mobile/splash/ios/res/Default-Portrait~ipad.png',
    'ipad_portrait_2x':'mobile/splash/ios/res/Default-Portrait@2x~ipad.png', 
    'ipad_landscape':'mobile/splash/ios/res/Default-Landscape~ipad.png', 
    'ipad_landscape_2x':'mobile/splash/ios/res/Default-Landscape@2x~ipad.png',
    'android_mdpi_portrait':'mobile/splash/android/res-notlong-port-mdpi/default.png', 
    'android_mdpi_landscape':'mobile/splash/android/res-notlong-land-mdpi/default.png',
    'android_hdpi_portrait':'mobile/splash/android/res-notlong-port-hdpi/default.png', 
    'android_hdpi_landscape':'mobile/splash/android/res-notlong-land-hdpi/default.png',
    'android_xhdpi_portrait':'mobile/splash/android/res-notlong-port-xhdpi/default.png', 
    'android_xhdpi_landscape':'mobile/splash/android/res-notlong-land-xhdpi/default.png', 
    'android_xxhdpi_portrait':'mobile/splash/android/res-notlong-port-xxhdpi/default.png',
    'android_xxhdpi_landscape':'mobile/splash/android/res-notlong-land-xxhdpi/default.png' 

});

// Set PhoneGap/Cordova preferences.
App.setPreference('BackgroundColor', '0xffffffff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');

App.configurePlugin('phonegap-plugin-push', {
  SENDER_ID: 154129027718
});