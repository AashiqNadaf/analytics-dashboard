import { ReactComponent as BugIcon } from "../../../../Icons/NotificationBugIcon.svg";
import { ReactComponent as UserRegistrationIcon } from "../../../../Icons/NotificationUserRegisterationIcon.svg";
import { ReactComponent as UserSpecificIcon } from "../../../../Icons/NotificationProfileSpecificIcon.svg";
import type { NotificationType } from "./interface";
export const getNotificationIcon = (type: NotificationType) => {
  switch (type) {
    case 'bug':
      return <BugIcon />;
    case 'user_registration':
      return <UserRegistrationIcon />;
    case 'user_specific':
      return <UserSpecificIcon />;
  }
};
