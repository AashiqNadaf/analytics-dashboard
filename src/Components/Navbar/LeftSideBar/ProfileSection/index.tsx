import { memo } from 'react';
import { useUserStore } from '../../../../Store/userStore';
import { GUEST_NAME } from './constant';
import Icon from '../../../Common/Icon';
import { ReactComponent as LightNoProfileIcon } from '../../../../Icons/LightNoProfile.svg';
import { ReactComponent as DarkNoProfileIcon } from '../../../../Icons/DarkNoProfile.svg';
import { useThemeStore } from '../../../../Store/themeStore';
const ProfileSection = () => {
  const { user } = useUserStore();
  const { theme } = useThemeStore();
  return (
    <div className="flex flex-row w-full h-8 p-1 gap-2 items-center">
      {user?.avatar ? (
        <img src={user.avatar} alt="profile" className="w-6 h-6 rounded-full" />
      ) : (
        <Icon
          lightThemeIcon={DarkNoProfileIcon}
          darkThemeIcon={LightNoProfileIcon}
          className="w-6 h-6 rounded-full"
        />
      )}
      <span className="text-sm font-400" style={{ color: theme.text }}>{user?.name || GUEST_NAME}</span>
    </div>
  );
};

export default memo(ProfileSection);
