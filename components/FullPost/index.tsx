import React from 'react'

import styles from './FullPost.module.scss'
import { Paper, Typography } from '@material-ui/core'

export const FullPost: React.FC = () => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div className={styles.paper} style={{ margin: '0 auto', width: 680 }}>
        <Typography variant="h4" style={{ fontWeight: 500 }}>
          White House releases in-space servicing strategy
        </Typography>
        <div>
          <Typography>
            COLORADO SPRINGSsss — A new federal strategy seeks to coordinate activities among agencies and interaction with the private
            sector to advance work making and repairing spacecraft in space. The White House’s Office of Science and Technology Policy
            (OSTP) released a national strategy for what it calls in-space servicing, assembly and manufacturing (ISAM) April 4.
          </Typography>
          <Typography>
            The document, released with little fanfare by the administration, establishes a set of goals for supporting the development of
            technologies and services ranging from refueling and repairing satellites to building new spacecraft in orbit. “We see this
            inflection point where, at least for us, sustaining U.S.”
          </Typography>
        </div>
      </div>
    </Paper>
  )
}
