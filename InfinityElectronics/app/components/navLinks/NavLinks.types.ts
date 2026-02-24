export type NavLinksProps = {
    navLinks?: NavLink[]
    socialLinks?: NavLink[]
    containerStyles?: string
}

export type NavLink = {
    to: string
    label?: string
    icon?: string
}