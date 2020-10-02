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

export function useNotifications(notificationReceived, responseReceived) {
  useEffect(() => {
    registerForPushNotifications();
    let notificationListener;
    let responseListener;

    if (notificationReceived) {
      notificationListener = Notifications.addNotificationReceivedListener(
        notificationReceived
      );
    }

    if (responseReceived) {
      responseListener = Notifications.addNotificationResponseReceivedListener(
        responseReceived
      );
    }

    return () => {
      Notifications.removeNotificationSubscription(responseListener);
      Notifications.removeNotificationSubscription(notificationListener);
    };
  }, []);
}
