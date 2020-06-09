// ------------------------------------------------
// PLEASE DO NOT EDIT. FORK IF YOU NEED TO MODIFY.
// ------------------------------------------------

import React from "react";
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import HeaderContainer from "carbon-components-react/lib/components/UIShell/HeaderContainer";
import {
  Content,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
} from "carbon-components-react/lib/components/UIShell";
import {
  Dashboard32,
  ChartRadar32,
  Portfolio32,
  Industry32,
  TextMining32,
  Report32,
  HeatMap32,
  DataRefinery32,
  Model32,
  SaveModel32,
  FlaggingTaxi32,
  WatsonHealthCrossReference32,
  UserProfileAlt32,
  Event32,
  Product32,
  Settings32,
} from "@carbon/icons-react";
import { withRouter } from "react-router";
import routes from "../../js/Routes";
import { Link } from "react-router-dom";

const NevigationArray = [
  { iconName: Dashboard32, name: "Dashboard", url: routes.dashboard },
  { iconName: ChartRadar32, name: "Rough", url: routes.rough },
  { iconName: Portfolio32, name: "Office", url: routes.office },
  { iconName: Industry32, name: "Factory", url: routes.factory },
  { iconName: TextMining32, name: "Order Summary", url: routes.order },
  {
    dropdown: "yes",
    iconName: Report32,
    name: "Report",
    innerNevigation: [
      { iconName: HeatMap32, name: "Polish", url: routes.polishreport },
      {
        iconName: DataRefinery32,
        name: "Packet Status",
        url: routes.packetreport,
      },
      { iconName: Model32, name: "Total Cost", url: routes.costreport },
    ],
  },
  {
    dropdown: "yes",
    iconName: SaveModel32,
    name: "Selling",
    innerNevigation: [
      { iconName: FlaggingTaxi32, name: "Seller", url: routes.seller },
      {
        iconName: WatsonHealthCrossReference32,
        name: "Buyer",
        url: routes.buyer,
      },
      { iconName: UserProfileAlt32, name: "Broker", url: routes.broker },
    ],
  },
  {
    dropdown: "yes",
    iconName: Event32,
    name: "Employees",
    innerNevigation: [
      { iconName: FlaggingTaxi32, name: "Seller", url: routes.seller },
      {
        iconName: WatsonHealthCrossReference32,
        name: "Buyer",
        url: routes.buyer,
      },
      { iconName: UserProfileAlt32, name: "Broker", url: routes.broker },
    ],
  },
  { iconName: Product32, name: "Cost Master", url: routes.costMaster },
  { iconName: Settings32, name: "Setting", url: routes.settingpage },
];

const Sidebar = (props) => {
  return (
    <div className="container">
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="IBM Platform Name">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName prefix="Diamond ERP">[Platform]</HeaderName>
              <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                  <Search20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="Notifications"
                  onClick={() => {}}
                >
                  <Notification20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="App Switcher"
                  onClick={() => {}}
                >
                  <AppSwitcher20 />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
              <SideNav
                aria-label="Side navigation"
                expanded={isSideNavExpanded}
              >
                <SideNavItems>
                  {NevigationArray.map((value, id) => (
                    <>
                      {" "}
                      {value.dropdown ? (
                        <SideNavMenu
                          renderIcon={value.iconName}
                          title={value.name}
                        >
                          {value.innerNevigation.map((data) => (
                            <Link to={data.url}>
                              <SideNavLink renderIcon={data.iconName}>
                                {data.name}
                              </SideNavLink>
                            </Link>
                          ))}
                        </SideNavMenu>
                      ) : (
                        <Link to={value.url}>
                          <SideNavLink renderIcon={value.iconName}>
                            {value.name}
                          </SideNavLink>
                        </Link>
                      )}
                    </>
                  ))}
                </SideNavItems>
              </SideNav>
            </Header>
            <Content id="main-content">
              <div className="bx--grid">
                <div className="bx--row">
                  <section className="bx--offset-lg-3 bx--col-lg-13 sidebar-content">
                    {props.children}
                  </section>
                </div>
              </div>
            </Content>
          </>
        )}
      />
    </div>
  );
};

export default withRouter(Sidebar);
