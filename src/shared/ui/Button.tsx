import { ButtonHTMLAttributes, FC } from 'react'
// import './styles.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export const Button: FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  ...props 
}) => {
  return (
    <button className={`button ${variant}`} {...props}>
      {children}
    </button>
  )
}