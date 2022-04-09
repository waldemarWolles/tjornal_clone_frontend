import { createTheme } from '@material-ui/core'

export const theme = createTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '8px',
      },
      contained: {
        backgroundColor: 'white',
      },
    },
  },
})
