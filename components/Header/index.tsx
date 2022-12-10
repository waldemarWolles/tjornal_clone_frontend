import React from 'react'
import Link from 'next/link'

import { Paper, Button, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import PenIcon from '@material-ui/icons/BorderColor'
import MessageIcon from '@material-ui/icons/ChatBubbleOutline'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AvatarIcon from '@material-ui/icons/PermIdentity'
import MenuIcon from '@material-ui/icons/Menu'
import styles from './Header.module.scss'
import { LogoSvg } from '../../assets/svg/logoSvg'
import { AuthDialog } from '../AuthDialog'

export const Header: React.FC = () => {
  const [openAuthDialog, setOpenAuthDialog] = React.useState(false)

  const handleClickOpen = () => {
    setOpenAuthDialog(true)
  }

  const handleClose = () => {
    setOpenAuthDialog(false)
  }

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a className="ml-15 d-flex align-center">
            <LogoSvg className={styles.logo} width={40} height={40} />
          </a>
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <Link href="/write">
          <a>
            <Button variant="contained" className={styles.penButton}>
              <PenIcon />
            </Button>
          </a>
        </Link>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton onClick={handleClickOpen}>
          <MessageIcon />
        </IconButton>
        <Link href="/profile/1">
          <a className="ml-15 d-flex align-center">
            <AvatarIcon />
          </a>
        </Link>
      </div>

      <AuthDialog open={openAuthDialog} onClose={handleClose} />
    </Paper>
  )
}
