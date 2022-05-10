import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AgendaItemsScreen } from '../screens/AgendaItemsScreen';
import { AgendaScreen } from '../screens/AgendaScreen';
import { ReviewScreen } from '../screens/ReviewScreen';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { HelpScreen } from '../screens/HelpScreen';
import { SignupScreen } from '../screens/SignupScreen';
import { ForgotPasswordScreen } from '../screens/ForgotPasswordScreen';

export const AgendaNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator>
      <Screen name="Onboarding" component={OnboardingScreen} />
      <Screen name="Agenda Items" component={AgendaItemsScreen} />
      <Screen name="Agenda" component={AgendaScreen} />
      <Screen name="Review Testimony" component={ReviewScreen} />
      
    </Navigator>
  );
};
