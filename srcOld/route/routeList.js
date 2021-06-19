import {
  AuthContainer,
  BecomeAVendorContainer,
  CustomerProfileContainer,
  HomeContainer,
  SplashContainer,
  OrderContainer,
  SettingContainer,
  CategoriesContainer,
  VendorProfileContainer,
  ServiceContainer
} from '../container'
import DevScreen from '../screens/devScreen'

// import {Intro} from '../screens'

export const initialRouteName = 'auth'
export const RouteList = [
  { name: 'devScreen', component: DevScreen },
  { name: 'splash', component: SplashContainer },
  // { name: 'intro', component: Intro },
  { name: 'auth', component: AuthContainer },
  { name: 'home', component: HomeContainer },
  { name: 'customerProfile', component: CustomerProfileContainer },
  { name: 'becomeAVendor', component: BecomeAVendorContainer },
  { name: 'order', component: OrderContainer },
  { name: 'seeAllCategories', component: CategoriesContainer },
  { name: 'setting', component: SettingContainer },
  { name: 'vendorProfile', component: VendorProfileContainer },
  { name: 'services', component: ServiceContainer }
]
