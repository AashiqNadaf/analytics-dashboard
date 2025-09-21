import React, { memo } from 'react';
import { useThemeStore } from '../../../Store/themeStore';
import { ReactComponent as DarkNoProfile } from '../../../Icons/DarkNoProfile.svg';
import { ReactComponent as LightNoProfile } from '../../../Icons/LightNoProfile.svg';
import Icon from '../../../Components/Common/Icon';

const TableSkeleton: React.FC = () => {
  const { theme } = useThemeStore();

  const SkeletonRow = () => (
    <tr style={{ backgroundColor: theme.background }}>
      <td style={{ padding: '12px', borderColor: theme.border }}>
        <div
          style={{
            width: '80px',
            height: '16px',
            backgroundColor: theme.itemActiveBg,
            borderRadius: '4px',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        />
      </td>
      <td style={{ padding: '12px', borderColor: theme.border }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.itemActiveBg,
              animation: 'pulse 1.5s ease-in-out infinite',
            }}
          >
            <Icon
              lightThemeIcon={DarkNoProfile}
              darkThemeIcon={LightNoProfile}
              className="w-8 h-8 opacity-50"
            />
          </div>
          <div
            style={{
              width: '100px',
              height: '16px',
              backgroundColor: theme.itemActiveBg,
              borderRadius: '4px',
              animation: 'pulse 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </td>
      <td style={{ padding: '12px', borderColor: theme.border }}>
        <div
          style={{
            width: '120px',
            height: '16px',
            backgroundColor: theme.itemActiveBg,
            borderRadius: '4px',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        />
      </td>
      <td style={{ padding: '12px', borderColor: theme.border }}>
        <div
          style={{
            width: '150px',
            height: '16px',
            backgroundColor: theme.itemActiveBg,
            borderRadius: '4px',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        />
      </td>
      <td style={{ padding: '12px', borderColor: theme.border }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: theme.itemActiveBg,
              borderRadius: '4px',
              animation: 'pulse 1.5s ease-in-out infinite',
            }}
          />
          <div
            style={{
              width: '80px',
              height: '16px',
              backgroundColor: theme.itemActiveBg,
              borderRadius: '4px',
              animation: 'pulse 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </td>
      <td style={{ padding: '12px', borderColor: theme.border }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '6px',
              height: '6px',
              backgroundColor: theme.itemActiveBg,
              borderRadius: '50%',
              animation: 'pulse 1.5s ease-in-out infinite',
            }}
          />
          <div
            style={{
              width: '60px',
              height: '16px',
              backgroundColor: theme.itemActiveBg,
              borderRadius: '4px',
              animation: 'pulse 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </td>
    </tr>
  );

  return (
    <div
      className="rounded-lg overflow-hidden"
      style={
        {
          backgroundColor: theme.background,
          border: `1px solid ${theme.border}`,
          '--border-color': theme.border,
          '--background-color': theme.background,
          '--text-color': theme.text,
          '--primary-color': theme.primary,
        } as React.CSSProperties
      }
    >
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}
      </style>
      <table className="w-full">
        <thead>
          <tr style={{ backgroundColor: theme.background }}>
            <th
              style={{
                padding: '12px',
                textAlign: 'left',
                backgroundColor: theme.background,
                color: theme.secondaryText,
                border: 'none',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '16px',
                  backgroundColor: theme.itemActiveBg,
                  borderRadius: '4px',
                  animation: 'pulse 1.5s ease-in-out infinite',
                }}
              />
            </th>
            <th
              style={{
                padding: '12px',
                textAlign: 'left',
                backgroundColor: theme.background,
                color: theme.secondaryText,
                border: 'none',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '16px',
                  backgroundColor: theme.itemActiveBg,
                  borderRadius: '4px',
                  animation: 'pulse 1.5s ease-in-out infinite',
                }}
              />
            </th>
            <th
              style={{
                padding: '12px',
                textAlign: 'left',
                backgroundColor: theme.background,
                color: theme.secondaryText,
                border: 'none',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '16px',
                  backgroundColor: theme.itemActiveBg,
                  borderRadius: '4px',
                  animation: 'pulse 1.5s ease-in-out infinite',
                }}
              />
            </th>
            <th
              style={{
                padding: '12px',
                textAlign: 'left',
                backgroundColor: theme.background,
                color: theme.secondaryText,
                border: 'none',
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '16px',
                  backgroundColor: theme.itemActiveBg,
                  borderRadius: '4px',
                  animation: 'pulse 1.5s ease-in-out infinite',
                }}
              />
            </th>
            <th
              style={{
                padding: '12px',
                textAlign: 'left',
                backgroundColor: theme.background,
                color: theme.secondaryText,
                border: 'none',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '16px',
                  backgroundColor: theme.itemActiveBg,
                  borderRadius: '4px',
                  animation: 'pulse 1.5s ease-in-out infinite',
                }}
              />
            </th>
            <th
              style={{
                padding: '12px',
                textAlign: 'left',
                backgroundColor: theme.background,
                color: theme.secondaryText,
                border: 'none',
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '16px',
                  backgroundColor: theme.itemActiveBg,
                  borderRadius: '4px',
                  animation: 'pulse 1.5s ease-in-out infinite',
                }}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonRow key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(TableSkeleton);
