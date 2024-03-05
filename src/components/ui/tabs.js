import { BodyText, H5 } from '@/ui/typography';

import { Bullet } from '@/ui/bullets';
import { Tabs } from 'flowbite-react';

const customTabsTheme = {
  tablist: {
    base: 'flex justify-center text-center font-poppins',
    styles: {
      horizontal:
        'mx-4 md:mx-16 lg:mx-0 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8',
      vertical: 'w-full lg:w-1/2 flex flex-col gap-8 lg:pr-8',
    },
    tabitem: {
      base: 'p-4 text-[20px] font-semibold text-cobalt focus:outline-none',
      styles: {
        horizontal: {
          base: 'text-center py-5 h-[80px] px-8',
          active: {
            on: 'active bg-cobalt rounded-[20px] text-white',
            off: 'bg-transparent border border-[#ccc] rounded-[20px] hover:cursor',
          },
        },
        vertical: {
          base: 'text-left py-8 px-8',
          active: {
            on: 'active bg-cobalt shadow-lg rounded-[20px] text-white',
            off: 'bg-transparent border border-[#ccc] rounded-[20px] hover:cursor',
          },
        },
      },
    },
  },
  tabpanel: 'py-0',
};

/**
 * @description - Adopted from Flowbite-react
 * @param {*} param0 - no required props for the template, but for a real world project we can use the data from a data file.
 * @returns
 */

export const HorizontalTabs = ({ children }) => {
  const data = [
    {
      title: 'Tab One',
      details:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Tab Two',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'Tab Three',
      details:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Tab Four',
      details:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];
  return (
    <Tabs
      style='horizontal'
      theme={customTabsTheme}>
      {data.map((tab, index) => (
        <Tabs.Item
          key={index}
          title={tab.title}>
          <BodyText className='mt-16 mb-12'>{tab.details}</BodyText>
        </Tabs.Item>
      ))}
      {/* end of tabs.item */}
    </Tabs>
  );
};

/**
 * @description - Adopted from Flowbite-react and customized so that the tabs are stacked vertically rather than horizontally.
 * @param {*} param0 - no required props for the template, but for a real world project we can use the data from a data file.
 * @returns
 */
export const VerticalTabs = ({ children }) => {
  const data = [
    {
      title: 'Tab One',
      details: [
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        'Ut enim ad minim veniam',
        'Excepteur sint occaecat cupidatat non proident',
        'Ut enim ad minim veniam',
      ],
    },
    {
      title: 'Tab Two',
      details: [
        'Lorem ipsum dolor sit amet',
        'Ut enim ad minim veniam',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        'Excepteur sint occaecat cupidatat non proident',
      ],
    },
    {
      title: 'Tab Three',
      details: [
        'Ut enim ad minim veniam',
        'Lorem ipsum dolor sit amet',
        'Excepteur sint occaecat cupidatat non proident',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      ],
    },
  ];
  return (
    <div className='lg:relative'>
      <Tabs
        style='vertical'
        theme={customTabsTheme}>
        {data.map((tab, index) => (
          <Tabs.Item
            key={index}
            title={tab.title}>
            <div className='w-full lg:w-[50%] lg:left-[50%] lg:top-0 lg:absolute mt-6 lg:mt-0 text-left py-12 px-4 md:p-10 bg-cobalt shadow-lg rounded-[20px] h-full'>
              <H5 className='mb-12 text-white'>{tab.title}</H5>
              <ul>
                {tab.details.map((item, index) => (
                  <Bullet
                    key={index}
                    className='mb-4 text-white'>
                    {item}
                  </Bullet>
                ))}
              </ul>
            </div>
          </Tabs.Item>
        ))}
        {/* end of tabs.item */}
      </Tabs>
    </div>
  );
};
