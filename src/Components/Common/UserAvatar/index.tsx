import { memo } from 'react';
import { Avatar } from 'antd';
import Icon from '../Icon';
import { ReactComponent as LightNoProfile } from '../../../Icons/LightNoProfile.svg';
import { ReactComponent as DarkNoProfile } from '../../../Icons/DarkNoProfile.svg';
import type { UserAvatarProps } from './interface';

const UserAvatar: React.FC<UserAvatarProps> = ({
  userProfile,
  size = 32,
  className = 'flex-shrink-0',
}) => {
  return (
    <Avatar
      src={userProfile}
      size={size}
      className={className}
      onError={() => true}
    >
      <Icon
        lightThemeIcon={DarkNoProfile}
        darkThemeIcon={LightNoProfile}
        className="w-8 h-8"
      />
    </Avatar>
  );
};

export default memo(UserAvatar);
