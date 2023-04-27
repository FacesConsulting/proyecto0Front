type IconSVGProps = {
  icon: string
  size: number
  color: string
}

const IconSvg = ({ icon, size, color }: IconSVGProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill={color}>
      <path d={icon} />
    </svg>
  )
}

export default IconSvg
