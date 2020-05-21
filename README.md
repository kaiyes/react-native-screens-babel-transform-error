This is an error reproduction repo.
The error comes from trying to use @react-navigation/bottom-tabs with
react-native-web in a CRA app.

The error follows

```

SyntaxError: /Users/kaiyes-15.4/projects/react-native-screens-babel-transform-error/node_modules/react-native-screens/src/screens.web.js: Support for the experimental syntax 'classProperties' isn't currently enabled (15:23):

  13 |
  14 | export class NativeScreen extends React.Component {
> 15 |   static defaultProps = {
     |                       ^
  16 |     active: true,
  17 |   };
  18 |

Add @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.


```
