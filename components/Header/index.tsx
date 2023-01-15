/* eslint-disable @next/next/no-img-element */
import React, { ReactEventHandler } from 'react'
import Link from 'next/link'

import { Paper, Button, IconButton, ListItem, List } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import PenIcon from '@material-ui/icons/BorderColor'
import MessageIcon from '@material-ui/icons/ChatBubbleOutline'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AvatarIcon from '@material-ui/icons/PermIdentity'
import MenuIcon from '@material-ui/icons/Menu'
import styles from './Header.module.scss'
import { LogoSvg } from '../../assets/svg/logoSvg'
import { AuthDialog } from '../AuthDialog'
import { useAppSelector } from '../../redux/hooks'
import { selectUserData } from '../../redux/slices/user'
import { IPost } from '../../utils/api/types'
import { Api } from '../../utils/api'

export const Header: React.FC = () => {
  const userData = useAppSelector(selectUserData)
  const [openAuthDialog, setOpenAuthDialog] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')
  const [posts, setPosts] = React.useState<IPost[]>([])

  const handleClickOpen = () => {
    setOpenAuthDialog(true)
  }

  const handleClose = () => {
    setOpenAuthDialog(false)
  }

  React.useEffect(() => {
    if (openAuthDialog && userData) {
      setOpenAuthDialog(false)
    }
  }, [openAuthDialog, userData])

  const handleChangeInput = async (e: { target: { value: string } }) => {
    setSearchValue(e.target.value)
    try {
      const { items } = await Api().post.search({ title: e.target.value })
      setPosts(items)
    } catch (error) {}
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
          <input value={searchValue} onChange={handleChangeInput} type="text" placeholder="Search" />
          {posts.length > 0 && (
            <Paper className={styles.searchResults}>
              <List>
                {posts.map((post) => {
                  return (
                    <Link href={`/news/${post.id}`} key={post.id}>
                      <a>
                        <ListItem button>{post.title}</ListItem>
                      </a>
                    </Link>
                  )
                })}
              </List>
            </Paper>
          )}
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
        {userData ? (
          <Link href="/profile/1">
            <a className="ml-15 d-flex align-center">
              <img
                src="https://img.freepik.com/premium-vector/funny-chat-bot-with-headphones-voice-support-service-virtual-assistant-ai-online-helper_687327-188.jpg"
                alt="asd"
                width={30}
                height={30}
              />
            </a>
          </Link>
        ) : (
          <IconButton onClick={handleClickOpen}>
            <AvatarIcon />
          </IconButton>
        )}
      </div>

      <AuthDialog open={openAuthDialog} onClose={handleClose} />
    </Paper>
  )
}
