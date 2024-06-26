import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'your.app.id',
  appName: 'Get IMEI App',
  webDir: 'dist', // Adjust this to match your actual web assets directory name
  android: {
    permissions: [
      'android.permission.READ_PHONE_STATE',
    ],
  },
};

export default config;
