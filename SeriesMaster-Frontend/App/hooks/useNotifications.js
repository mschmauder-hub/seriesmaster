import { useEffect } from "react";
import registerForPushNotifications from "../notifications/register";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function useNotifications(
  notificationReceived,
  responseReceived
) {
  useEffect(() => {
    registerForPushNotifications();

    const notificationListener = Notifications.addNotificationReceivedListener(
      notificationReceived
    );

    const responseListener = Notifications.addNotificationResponseReceivedListener(
      responseReceived
    );

    return () => {
      Notifications.removeNotificationSubscription(responseListener);
      Notifications.removeNotificationSubscription(notificationListener);
    };
  }, []);
}
