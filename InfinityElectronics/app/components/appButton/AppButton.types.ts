export type ButtonProps = {  
  label: string
  loadingLabel?: string
  isLoading?: boolean
  variant?:'primary' |'secondary'
  onClick?: () => void

}