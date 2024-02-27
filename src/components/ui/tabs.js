/**
 * this file contains two components for tabs - horizontal and vertical
 * Utilizes Flowbite-react
 *
 *
 */

import { BodyText, H5 } from '@/ui/typography';

import { Bullet } from '@/ui/bullets';
import Image from 'next/image';
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
      base: 'p-4 text-sm font-normal text-white focus:outline-none',
      styles: {
        horizontal: {
          base: 'text-center py-5 h-[106px] px-8',
          active: {
            on: 'active bg-new-cobalt rounded-[20px] border border-[#ccc]',
            off: 'bg-transparent border border-new-cobalt rounded-[20px] hover:cursor',
          },
        },
        vertical: {
          base: 'text-left py-8 px-8 text-[20px] font-semibold',
          active: {
            on: 'active bg-new-cobalt-05 shadow-lg rounded-[20px] ',
            off: 'bg-transparent border border-[#ccc] rounded-[20px] hover:cursor',
          },
        },
      },
    },
  },
  tabpanel: 'py-0',
};

// Flowbite - This component uses the Flowbite Tabs - Vertical - What we do section
export const VerticalTabs = ({ children }) => {
  const data = [
    {
      title: 'Business process and strategy',
      details: [
        'CRM and business software ecosystems',
        'Federal and provincial grants, funding applications, and expertise',
        'Software and cloud systems implementation',
        'eLearning and training for new process, systems, and software',
      ],
    },
    {
      title: 'Software development and deployment',
      details: [
        'Full-stack engineering',
        'Bespoke solutions, integrations, and middleware',
        'Web apps',
        'User interface and experience (UX/UI)',
        'Security, testing, and quality assurance process',
        'Website and application maintenance',
        'Marketing integrations checks and protocols',
      ],
    },
    {
      title: 'Marketing, communications, and design',
      details: [
        'Analytics, optimization, and spend attribution',
        'Intelligent website design and development',
        'Branding, brand research, and content strategy ',
        'Tactical content and SEO campaigns',
        'User interface and experience (UX/UI)',
      ],
    },
  ];
  return (
    <Tabs.Group
      style='vertical'
      theme={customTabsTheme}>
      {data.map((tab, index) => (
        <Tabs.Item
          key={index}
          title={tab.title}>
          <div className='w-full lg:w-1/2 lg:ml-[50%] mt-6 lg:-mt-[484px] xl:-mt-[358px] 2xl:-mt-[395px] text-left py-12 px-4 md:p-10  bg-new-cobalt-05 shadow-lg rounded-[20px] lg:min-h-[410px] xl:min-h-[386px]'>
            <H5 className='mb-12'>{tab.title}</H5>
            <ul>
              {tab.details.map((item, index) => (
                <Bullet
                  key={index}
                  className='mb-4'>
                  {item}
                </Bullet>
              ))}
            </ul>
          </div>
        </Tabs.Item>
      ))}
      {/* end of tabs.item */}
    </Tabs.Group>
  );
};

// Flowbite - This component uses the Flowbite Tabs - Horizontal - for Software implementation section
export const HorizontalTabs = ({ children }) => {
  const data = [
    {
      title: 'Business process and strategy',
      details: [
        'CRM and business software ecosystems',
        'Federal and provincial grants, funding applications, and expertise',
        'Software and cloud systems implementation',
        'eLearning and training for new process, systems, and software',
      ],
    },
    {
      title: 'Software development and deployment',
      details: [
        'Full-stack engineering',
        'Bespoke solutions, integrations, and middleware',
        'Web apps',
      ],
    },
    {
      title: 'Marketing, communications, and design',
      details: [
        'Analytics, optimization, and spend attribution',
        'Intelligent website design and development',
        'Branding, brand research, and content strategy ',
      ],
    },
  ];
  return (
    <Tabs.Group
      style='horizontal'
      theme={customTabsTheme}>
      {data.map((tab, index) => (
        <Tabs.Item
          key={index}
          title={tab.title}>
          <BodyText className='mt-16 mb-12 font-normal text-white'>
            {tab.details}
          </BodyText>
        </Tabs.Item>
      ))}
      {/* end of tabs.item */}
    </Tabs.Group>
  );
};
