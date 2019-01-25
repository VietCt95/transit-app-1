<h1 align="center">
  <br>
  <a href="https://devpost.com/software/greenus"><img src="https://github.com/VietDinh17/transit-app/blob/master/assets/icons/main-logo.png" alt="Markdownify" width="200"></a>
  <br>
  Greenus
  <br>
</h1>

<h4 align="center">A mobile direction app built on top of <a href="https://facebook.github.io/react-native/" target="_blank">React Native</a>.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

![alt text](https://github.com/VietDinh17/transit-app/blob/master/demo_images/IMG_0385.PNG)
![alt text](https://github.com/VietDinh17/transit-app/blob/master/demo_images/map.PNG)
![alt text](https://github.com/VietDinh17/transit-app/blob/master/demo_images/IMG_0388.PNG)
![alt text](https://github.com/VietDinh17/transit-app/blob/master/demo_images/IMG_0389.PNG)

## Key Features

* Live map view and direction 
* Dashboard to report your good works
* Giveaway page


## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)), and [Expo](https://expo.io/) installed on your computer. Also, You need to install Expo app on your phone (iOS and Android supported).

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/VietDinh17/transit-app

# Go into the repository
$ cd transit-app

# Install dependencies
$ npm install 
```
Go to Map.js under src/screens directory and replace the Google Map API keys by your key


Install Expo to test your app on mobile phone:
```bash
# Install Expo command line tool
$ npm install expo-cli --global

# Run the app
$ expo start --tunnel 
```
Then follow the expo's instruction to run on Android or iOS. 


Note: Make sure your devices are on the same network!!! The configuration is done on a Windows machine. I hasn't test the app on MacOS or Linux.


## Credits

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [Expo](https://expo.io/)
- [React Native Elements ](https://github.com/react-native-training/react-native-elements)
- [React Navigation](https://reactnavigation.org/en/)
- [React Native Maps Directions](https://github.com/bramus/react-native-maps-directions)


## License

MIT

