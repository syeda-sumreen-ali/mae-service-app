import {AuthContainer, CustomerProfileContainer, HomeContainer, SplashContainer} from '../container'
import DevScreen from '../screens/devScreen';

export const initialRouteName='customerProfile'
export const RouteList = [
  {name:'devScreen', component:DevScreen},
  {name: 'splash', component: SplashContainer},
  {name: 'auth', component: AuthContainer},
  {name:'home', component:HomeContainer},
  {name:'customerProfile', component:CustomerProfileContainer}
]
