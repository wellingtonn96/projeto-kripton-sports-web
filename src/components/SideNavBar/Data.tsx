import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import { IconType } from 'react-icons/lib';

export interface ISideNavBarData {
  title: string;
  path: string;
  icon: React.ReactElement<IconType>;
  iconOpened: React.ReactElement<IconType>;
  iconClosed: React.ReactElement<IconType>;
  subNav?: ISubNavData[];
}

interface ISubNavData {
  title: string;
  path: string;
  icon: React.ReactElement<IconType>;
  cName?: string;
}

export const SideNavBarData: ISideNavBarData[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillDashboard />,
    iconOpened: <IoIcons.IoIosArrowBack />,
    iconClosed: <IoIcons.IoIosArrowDown />,

    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'colaboradores',
    path: '/collaborators',
    icon: <FaIcons.FaUsers />,
    iconOpened: <IoIcons.IoIosArrowBack />,
    iconClosed: <IoIcons.IoIosArrowDown />,
  },
  {
    title: 'PDV',
    path: '/dashboard',
    icon: <FaIcons.FaTh />,
    iconOpened: <IoIcons.IoIosArrowBack />,
    iconClosed: <IoIcons.IoIosArrowDown />,
  },
  {
    title: 'Produtos',
    path: '/dashboard',
    icon: <FaIcons.FaBarcode />,
    iconOpened: <IoIcons.IoIosArrowBack />,
    iconClosed: <IoIcons.IoIosArrowDown />,
  },
  {
    title: 'Categorias',
    path: '/dashboard',
    icon: <FaIcons.FaFolder />,
    iconOpened: <IoIcons.IoIosArrowBack />,
    iconClosed: <IoIcons.IoIosArrowDown />,
  },
  {
    title: 'Vendas',
    path: '/dashboard',
    icon: <FaIcons.FaShoppingCart />,
    iconOpened: <IoIcons.IoIosArrowBack />,
    iconClosed: <IoIcons.IoIosArrowDown />,

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
    title: 'Compras',
    path: '/dashboard',
    icon: <FaIcons.FaPlus />,
    iconOpened: <IoIcons.IoIosArrowBack />,
    iconClosed: <IoIcons.IoIosArrowDown />,
  },
  {
    title: 'Cartões',
    path: '/dashboard',
    icon: <FaIcons.FaCreditCard />,
    iconOpened: <IoIcons.IoIosArrowBack />,
    iconClosed: <IoIcons.IoIosArrowDown />,

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
    title: 'Pessoas',
    path: '/dashboard',
    icon: <FaIcons.FaUsers />,
    iconOpened: <IoIcons.IoIosArrowBack />,
    iconClosed: <IoIcons.IoIosArrowDown />,
  },
  {
    title: 'Configurações',
    path: '/dashboard',
    icon: <FiIcons.FiSettings />,
    iconOpened: <IoIcons.IoIosArrowBack />,
    iconClosed: <IoIcons.IoIosArrowDown />,
  },
  {
    title: 'Relatórios',
    path: '/dashboard',
    icon: <FaIcons.FaChartBar />,
    iconOpened: <IoIcons.IoIosArrowBack />,
    iconClosed: <IoIcons.IoIosArrowDown />,
  },
];
