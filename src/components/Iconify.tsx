import { Icon, IconifyIcon } from '@iconify/react'
import { Box, BoxProps, SxProps } from '@mui/material'

interface Props extends BoxProps {
  sx?: SxProps
  icon: IconifyIcon | string
  size?: number
}

export const Iconify = ({ icon, size = 2, sx, ...other }: Props) => {
  return (
    <Box
      component={Icon}
      icon={icon}
      sx={{ fontSize: size * 10, ...sx }}
      {...other}
    />
  )
}
