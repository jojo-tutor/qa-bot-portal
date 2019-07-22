import React from 'react';
import upperFirst from 'lodash/upperFirst';
import { useRouter } from 'next/router';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Link from 'next/link';

const mainMenus = [
  {
    id: 'dashboard',
    href: '/',
    icon: DashboardIcon,
  },
  {
    id: 'users',
    icon: PeopleIcon,
  },
  {
    id: 'companies',
    icon: BarChartIcon,
  },
  {
    id: 'questions',
    icon: LayersIcon,
  },
];

const secondaryMenus = [
  {
    id: 'settings',
    icon: AssignmentIcon,
  },
  {
    id: 'last-quarter',
    label: 'Last quarter',
    icon: AssignmentIcon,
  },
  {
    id: 'year-end',
    label: 'Year-end sale',
    icon: AssignmentIcon,
  },
];


const MenuItems = ({ items }) => {
  const router = useRouter();

  return items.map((item) => {
    const {
      id, label = upperFirst(id), href = `/${id}`, icon: Icon,
    } = item;
    const selected = router.pathname === href;

    return (
      <Link key={id} href={href}>
        <ListItem button selected={selected}>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={label} />
        </ListItem>
      </Link>
    );
  });
};

export const MainMenuItems = () => (
  <div>
    <MenuItems items={mainMenus} />
  </div>
);

export const SecondaryMenuItems = () => (
  <div>
    <ListSubheader inset>App Settings</ListSubheader>
    <MenuItems items={secondaryMenus} />
  </div>
);
