/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

import styles from './Profile.module.scss'
import { Post } from '../Post'
import { Button, Paper, Tab, Tabs, Typography } from '@material-ui/core'

import SettingsIcon from '@material-ui/icons/Settings'
import ChatIcon from '@material-ui/icons/Chat'
import Link from 'next/link'

export type TabsTypes = 'articles' | 'comments' | 'bookmarks'

export const Profile: React.FC = () => {
  const [tabValue, setTabValue] = useState<TabsTypes>('articles')

  return (
    <div className={styles.content}>
      <Paper elevation={0} className="p-20 mb-30" classes={{ root: styles.paper }}>
        <div className={styles.profileContent}>
          <div>
            <img
              className={styles.avatar}
              width={300}
              height={200}
              src="https://www.k9ofmine.com/wp-content/uploads/2018/10/space-dog-names-850x520.jpg"
              alt=""
            />
            <h2 className={styles.title}>Space Doge</h2>
            <div className={styles.countContainer}>
              <span className={styles.plusCount}>+300</span>2 subscribers
            </div>
            <div>On the project since 05.04.2011</div>
          </div>
          <div>
            <Link href="/settings/1">
              <Button className={styles.settingsButton}>
                <SettingsIcon />
              </Button>
            </Link>
            <Button className={styles.writeButton}>
              <ChatIcon /> Write To
            </Button>
          </div>
        </div>
        <div className={styles.tabs}>
          <Tabs
            value={tabValue}
            onChange={(e, value) => setTabValue(value)}
            textColor="primary"
            indicatorColor="primary"
            aria-label="secondary tabs example"
          >
            <Tab value="articles" label="Articles" />
            <Tab value="comments" label="Comments" />
            <Tab value="bookmarks" label="Bookmarks" />
          </Tabs>
        </div>
      </Paper>
      <Post />
    </div>
  )
}
