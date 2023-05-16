# MyMenu React Native

- [Clone Repository](#clone-repository)
- [Install Node Modules](#install-node-modules)
- [Run Project](#run-project)
- [Running your React Native application](#running-your-react-native-application)
- [Git Flow](#git-flow)
- [Overviews](#overviews)

## Clone Repository

```bash
git clone https://github.com/AliinaStar/MyMenu
cd MyMenu
```

## Install Node Modules

```bash
npm install
```

## Run Project

```bash
npx expo start
```

This will start a development server for you.

## Running your React Native application

Install the [Expo Go](https://expo.dev/client) app on your iOS or Android phone and connect to the same wireless network as your computer. On Android, use the Expo Go app to scan the QR code from your terminal to open your project. On iOS, use the built-in QR code scanner of the default iOS Camera app.

## Git Flow

1. Before starting work on a new feature, go to the **_master_** branch and download the latest changes:

```bash
git checkout master
git pull
```

2. For new task create new branch:

```bash
git checkout -b your-branch-new-feature
```

3. Save your changes in commits and push them to the server:

```bash
git add .
git commit -m 'your text message'
git push
```

4. Create create a [**Pull Request**](https://github.com/AliinaStar/MyMenu/pulls) in a remote GitHub repository
5. Conflict resolution:

```bash
git checkout your-branch-new-feature
git pull origin master
```

or if you want to pull all remote branches:

```bash
git checkout master
git pull
git checkout your-branch-new-feature
git fetch
git merge master
```

fix conflicts, then add changes:

```bash
git add .
git commit -m 'fix merge conflicts'
git push
```

use lint and format code:

```bash
git run lint
git run format
```

## Overviews

1. React Native [https://reactnative.dev](https://reactnative.dev/)
2. React Native Material [https://www.react-native-material.com](https://www.react-native-material.com/)
