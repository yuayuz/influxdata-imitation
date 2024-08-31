export interface navBarMenuList {
  title: string
  subtitle: string
  items: string[]
}

export interface navBarMenu {
  title: string
  subheader: string
  color: string
  lists: navBarMenuList[]
}

export interface styleSignInMenu {
  title: string
  lists: string[]
}
