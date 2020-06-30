import React, {Component} from 'react';
import {
    Header,
    HeaderName,
    HeaderNavigation,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent, HeaderMenu,
} from 'carbon-components-react/lib/components/UIShell';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';
import { Link } from 'react-router-dom';


class HeaderSection extends Component {
    render() {
        return (
            <div>
                <Header aria-label="Carbon Tutorial">
                    <SkipToContent />
                    <HeaderName element={Link} to="/" prefix="GAIS">
                        Fenriscan
                    </HeaderName>
                    <HeaderNavigation aria-label="IBM [Platform]">
                        <HeaderMenuItem element={Link} to="/urls">
                            URLS
                        </HeaderMenuItem>
                        <HeaderMenuItem element={Link} to="/raporlar">
                            Raporlar
                        </HeaderMenuItem>
                        <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                        <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                        <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                            <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                            <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                            <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                        </HeaderMenu>
                    </HeaderNavigation>
                    <HeaderGlobalBar>
                        <HeaderGlobalAction aria-label="Notifications">
                            <Notification20 />
                        </HeaderGlobalAction>
                        <HeaderGlobalAction aria-label="User Avatar">
                            <UserAvatar20 />
                        </HeaderGlobalAction>
                        <HeaderGlobalAction aria-label="App Switcher">
                            <AppSwitcher20 />
                        </HeaderGlobalAction>
                    </HeaderGlobalBar>
                </Header>
            </div>
        );
    }
}

export default HeaderSection;