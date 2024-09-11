import * as React from 'react';
import { Outlet } from "react-router-dom";
import '../App.css';

//FLUENTUI
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';

const navStyles: Partial<INavStyles> = { root: 
  { 
    height: 185,
    width: 208,
 } };
///

const navLinkGroups: INavLinkGroup[] = [
  {
    name: 'Creation Tools',
    links: [
      {
        key: 'Person Tool',
        name: 'PersonTool',
        url: '/',
      },
      {
        key: 'Location Tool',
        name: 'LocationTool',
        url: '/LocationTool',
      },
    ],
  },
];

export const NavFabricDemoAppExample: React.FunctionComponent = () => {
  return (
    <div>
      <Nav groups={navLinkGroups}/>
    </div>
  );
};

const Layout = () => {
    return (
      <>
        <NavFabricDemoAppExample />  

        <Outlet />
      </>
    );
}

export default Layout;