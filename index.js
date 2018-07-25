import { Navigation } from "react-native-navigation";

import App from "./App";
import CustomButton from "./CustomButton";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

Navigation.registerComponent(`example.App`, () => App);
Navigation.registerComponent(`example.Tab1`, () => Tab1);
Navigation.registerComponent(`example.Tab2`, () => Tab2);
Navigation.registerComponent(`example.Tab3`, () => Tab3);
Navigation.registerComponent(`example.CustomButton`, () => CustomButton);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            component: {
              name: "example.Tab1",
              passProps: {
                text: "This is tab 1"
              },
              options: {
                bottomTab: {
                  text: "Tab 1"
                }
              }
            }
          },
          {
            component: {
              name: "example.Tab2",
              passProps: {
                text: "This is tab 2"
              },
              options: {
                bottomTab: {
                  text: "Tab 2"
                }
              }
            }
          },
          {
            component: {
              name: "example.Tab3",
              passProps: {
                text: "This is tab 3"
              },
              options: {
                bottomTab: {
                  text: "Tab 3"
                }
              }
            }
          }
        ]
      }
    }
  });

  Navigation.showOverlay({
    component: {
      name: "example.CustomButton",
      options: {
        overlay: {
          interceptTouchOutside: false
        }
      }
    }
  });
});
