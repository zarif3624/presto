import React from "react";
import "./../styles/global.scss";
import logo from "./../styles/logo.png";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import PricingPage from "./pricing";
import ContactPage from "./contact";
import DashboardPage from "./dashboard";
import AuthTypePage from "./authtype";
import SettingsPage from "./settings";
import { Switch, Route, Router } from "./../util/router.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import { ProvideAuth } from "./../util/auth.js";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <NavbarCustom
            bg="primary"
            variant="dark"
            expand="md"
            logo={logo}
          ></NavbarCustom>

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/faq" component={FaqPage} />

            <Route exact path="/pricing" component={PricingPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/dashboard" component={DashboardPage} />

            <Route exact path="/auth/:type" component={AuthTypePage} />

            <Route exact path="/settings" component={SettingsPage} />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            bg="primary"
            textColor="light"
            size="md"
            bgImage=""
            bgImageOpacity={1}
            description="A Marketplace to help in times of Disaster"
            copyright="© 2020 Company"
            logo={logo}
          ></Footer>
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
