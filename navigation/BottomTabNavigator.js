import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import IngredientsScreen from '../screens/IngredientsScreen';
import RecipesScreen from '../screens/Recipes';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Ingredients"
        component={IngredientsScreen}
        options={{
          title: 'Ingredients',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Recipes"
        component={RecipesScreen}
        options={{
          title: 'Recipes',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />

    <BottomTab.Screen
        name="Yields"
        component={RecipesScreen}
        options={{
          title: 'Yields',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-remove-circle-outline" />
        }}
      />

    <BottomTab.Screen
        name="Costs"
        component={RecipesScreen}
        options={{
          title: 'Costs',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-cash" />
        }}
      />

    <BottomTab.Screen
        name="Settings"
        component={RecipesScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-cash" />
        }}
      />


    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Ingredients':
      return 'Ingredients';
    case 'Recipes':
      return 'Recipes';
    case 'Yields':
      return 'Yields';
    case 'Costs':
      return 'Costs';
    case 'Settings':
      return 'Settings';
  }
}
