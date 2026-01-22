import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Dashboard',
      items: [
        { icon: 'home', label: 'Home', route: '/main-layout/home' },
        { icon: 'chart-pie', label: 'Analytics', route: '/main-layout/analytics' },
      ]
    },
    {
      group: 'User',
      items: [
        { icon: 'user-circle', label: 'Profile', route: '/main-layout/profile' },
        { icon: 'cog', label: 'Settings', route: '/main-layout/settings' },
        { icon: 'arrow-right-on-rectangle', label: 'Logout', route: '/logout' },
      ]
    }
  ];
}
