import { Notifications } from "expo";
import { postExpoTokens } from "../api/expoTokens";
import * as Permissions from "expo-permissions";

const registerForPushNotifications = async () => {
  const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  if (!permission.granted) return;
  const pushToken = await Notifications.getExpoPushTokenAsync();
  postExpoTokens(pushToken);
};

export default registerForPushNotifications;
