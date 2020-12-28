import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { IconType } from 'react-icons/lib';

export interface ISideBarData {
  title: string;
  path: string;
  icon: React.ReactElement<IconType>;
  iconClosed?: React.ReactElement<IconType>;
  iconOpened?: React.ReactElement<IconType>;
  subNav?: ISubNavData[] | undefined;
}

export interface ISubNavData {
  title: string;
  path: string;
  icon: React.ReactElement<IconType>;
  cName?: string;
}

export const SideBarData: ISideBarData[] = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Reports',
    path: '/dashboard',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowUpSFill />,
    iconOpened: <RiIcons.RiArrowDownSFill />,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Products',
    path: '/dashboard',
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: 'Messages',
    path: '/dashboard',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Support',
    path: '/dashboard',
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
