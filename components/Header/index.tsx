import React from 'react'

import { Paper, Button, IconButton, styled } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import PenIcon from '@material-ui/icons/BorderColor'
import MessageIcon from '@material-ui/icons/ChatBubbleOutline'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AvatarIcon from '@material-ui/icons/PermIdentity'
import MenuIcon from '@material-ui/icons/Menu'
import styles from './Header.module.scss'
import { LogoSvg } from '../../assets/svg/logoSvg'

export const Header: React.FC = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <LogoSvg className={styles.logo} width={40} height={40} />
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <Button variant="contained" className={styles.penButton}>
          <PenIcon />
        </Button>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton className="ml-15">
          <AvatarIcon />
        </IconButton>
      </div>
    </Paper>
  )
}
