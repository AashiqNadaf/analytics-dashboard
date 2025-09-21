import { memo, useState, useEffect } from 'react';
import NavListItem from '../../../Common/NavListItem';
import NavListItemSkeleton from '../../../Common/NavListItemSkeleton';
import UserAvatar from '../../../Common/UserAvatar';
import { useThemeStore } from '../../../../Store/themeStore';
import { CONTACTS_TITLE, DUMMY_CONTACTS } from './constants';
import type { Contact } from './interface';

const Contacts = () => {
  const { theme } = useThemeStore();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContacts = async () => {
      setIsLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 3000));

      setContacts(DUMMY_CONTACTS);
      setIsLoading(false);
    };

    loadContacts();
  }, []);

  return (
    <div className="w-full h-auto flex flex-col gap-2">
      <span
        className="w-full h-[36px] text-sm font-600 flex items-center"
        style={{ color: theme.text }}
      >
        {CONTACTS_TITLE}
      </span>
      {isLoading
        ? Array.from({ length: 3 }).map((_, index) => (
            <NavListItemSkeleton key={index} />
          ))
        : contacts.map((contact) => (
            <NavListItem
              key={contact.id}
              icon={
                <UserAvatar
                  userProfile={contact.userProfile}
                  size={24}
                  className="flex-shrink-0"
                />
              }
              title={contact.name}
              time=""
            />
          ))}
    </div>
  );
};

export default memo(Contacts);
