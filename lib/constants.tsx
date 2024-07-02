import {
  LayoutDashboard,
  Shapes,
  ShoppingBag,
  Tag,
  UsersRound,
  Store
} from 'lucide-react'

export const navLinks = [
  {
    url: '/',
    icon: <LayoutDashboard />,
    label: 'Dashboard'
  },
  {
    url: '/category',
    icon: <Shapes />,
    label: 'Categories'
  },
  {
    url: '/branch',
    icon: <Store />,
    label: 'Branches'
  },
  {
    url: '/users',
    icon: <UsersRound />,
    label: 'Users'
  },
  {
    url: '/assets',
    icon: <ShoppingBag />,
    label: 'Assets'
  }
]
