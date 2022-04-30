import { createTheme } from '@material-ui/core'

export const theme = createTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '12px',
      },
      contained: {
        backgroundColor: 'white',
      },
    },
  },
})
