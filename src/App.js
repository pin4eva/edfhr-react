import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardLayout from "./Layouts/Dashboard/DashboardLayout";
import Front from "./Layouts/Front/Front";
import Applicants from "./pages/Dashboard/applicants/Applicants";
import Applicant_Profile from "./pages/Dashboard/applicants/_id";
import Draft from "./pages/Dashboard/Draft";
import Dashboard from "./pages/Dashboard/Home";
import Lawyers from "./pages/Dashboard/lawyers/index";
import Lawyer from "./pages/Dashboard/lawyers/_id";
import Sponsors from "./pages/Dashboard/sponsors/index";
import Sponsor from "./pages/Dashboard/sponsors/_id";
import Users from "./pages/Dashboard/Users";
import About from "./pages/Front/About";
import Blog from "./pages/Front/blog/index";
import BlogDetail from "./pages/Front/blog/_id";
import Contact_us from "./pages/Front/Contact";
import ErrorPage from "./pages/Front/Error";
import Faq from "./pages/Front/Faq";
import Home from "./pages/Front/Home";
import Donate from "./pages/Front/Donate";
import Apply from "./pages/Front/Apply/index";
import ApplicantLogin from "./pages/Front/Apply/ApplicantLogin";
import dash from "./pages/Front/Apply/dash";
import ApplicantDashboard from "./Layouts/Applicant";
import Todos from "./pages/Front/Todos";
import Relative from "./pages/Front/Apply/Relative";
import ExhibitPage from "./pages/Front/Apply/ExhibitPage";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const App = () => (
  <div>
    <Router>
      <Switch>
        <AppRoute exact path="/" layout={Front} component={Home} />
        <AppRoute exact path="/about" layout={Front} component={About} />
        <AppRoute exact path="/blog" layout={Front} component={Blog} />
        <AppRoute exact path="/contact" layout={Front} component={Contact_us} />
        <AppRoute exact path="/faq" layout={Front} component={Faq} />
        <AppRoute exact path="/donate" layout={Front} component={Donate} />
        <AppRoute exact path="/apply" layout={Front} component={Apply} />
        <AppRoute exact path="/todos" layout={Front} component={Todos} />
        <AppRoute
          exact
          path="/applicant/dashboard"
          layout={ApplicantDashboard}
          component={dash}
        />
        <AppRoute
          exact
          path="/applicant/dashboard/exhibit"
          layout={ApplicantDashboard}
          component={ExhibitPage}
        />
        <AppRoute
          exact
          path="/applicant/dashboard/relatives"
          layout={ApplicantDashboard}
          component={Relative}
        />
        <AppRoute
          exact
          path="/applicant"
          layout={Front}
          component={ApplicantLogin}
        />
        <AppRoute
          exact
          path="/blog/:id"
          layout={Front}
          component={BlogDetail}
        />
        <AppRoute
          exact
          path="/dashboard"
          layout={DashboardLayout}
          component={Dashboard}
        />
        <AppRoute
          exact
          path="/dashboard/users"
          layout={DashboardLayout}
          component={Users}
        />
        <AppRoute
          exact
          path="/dashboard/applicants"
          layout={DashboardLayout}
          component={Applicants}
        />
        <AppRoute
          exact
          path="/dashboard/applicants/:id"
          layout={DashboardLayout}
          component={Applicant_Profile}
        />
        <AppRoute
          exact
          path="/dashboard/lawyers"
          layout={DashboardLayout}
          component={Lawyers}
        />
        <AppRoute
          exact
          path="/dashboard/lawyers/:id"
          layout={DashboardLayout}
          component={Lawyer}
        />
        <AppRoute
          exact
          path="/dashboard/sponsors"
          layout={DashboardLayout}
          component={Sponsors}
        />
        <AppRoute
          exact
          path="/dashboard/sponsors/:id"
          layout={DashboardLayout}
          component={Sponsor}
        />
        <AppRoute
          exact
          path="/dashboard/drafts"
          layout={DashboardLayout}
          component={Draft}
        />
        <AppRoute component={ErrorPage} layout={Front} />
      </Switch>
    </Router>
  </div>
);

export default App;
