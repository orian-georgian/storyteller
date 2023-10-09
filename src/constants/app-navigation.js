import schedule from "./../assets/icons/schedule.svg";
import analytics from "./../assets/icons/analytics.svg";
import stories from "./../assets/icons/stories.svg";
import engagementUnits from "./../assets/icons/engagement-units.svg";
import ads from "./../assets/icons/ads.svg";
import cmsUsers from "./../assets/icons/cms-users.svg";
import roles from "./../assets/icons/roles.svg";
import apps from "./../assets/icons/apps.svg";
import userGuide from "./../assets/icons/user-guide.svg";

const App_Navigation = [
  {
    text: "Schedule",
    path: "/schedule",
    icon: schedule,
    isNewSection: true,
  },
  {
    text: "Analytics",
    path: "/analytics",
    icon: analytics,
    isNewSection: false,
  },
  {
    text: "Stories",
    path: "/stories",
    icon: stories,
    isNewSection: false,
  },
  {
    text: "Engagement Units",
    path: "/engagement-units",
    icon: engagementUnits,
    isNewSection: false,
  },
  {
    text: "Ads",
    path: "/ads",
    icon: ads,
    isNewSection: false,
  },
  {
    text: "CMS Users",
    path: "/cms-users",
    icon: cmsUsers,
    isNewSection: true,
  },
  {
    text: "Roles",
    path: "/roles",
    icon: roles,
    isNewSection: false,
  },
  {
    text: "Apps",
    path: "/apps",
    icon: apps,
    isNewSection: false,
  },
  {
    text: "User Guide",
    path: "/user-guide",
    icon: userGuide,
    isNewSection: true,
  },
];

export default App_Navigation;
