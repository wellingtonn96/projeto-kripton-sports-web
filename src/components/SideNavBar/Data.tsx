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
  },
  {
    title: 'colaboradores',
    path: '#',
    icon: <FaIcons.FaUsers />,
    iconOpened: <IoIcons.IoIosArrowBack />,
    iconClosed: <IoIcons.IoIosArrowDown />,

    subNav: [
      {
        title: 'cadastrar colaborador',
        path: '/collaborators',
        icon: <FaIcons.FaRegCircle size={13} />,
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <FaIcons.FaRegCircle size={13} />,
      },
    ],
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
        icon: <FaIcons.FaRegCircle size={13} />,
        cName: 'sub-nav',
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <FaIcons.FaRegCircle size={13} />,
        cName: 'sub-nav',
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <FaIcons.FaRegCircle size={13} />,
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
        icon: <FaIcons.FaRegCircle size={13} />,
        cName: 'sub-nav',
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <FaIcons.FaRegCircle size={13} />,
        cName: 'sub-nav',
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <FaIcons.FaRegCircle size={13} />,
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
