import { Paper, Tab, Table, TableCell, TableHead, TableBody, TableRow, Tabs, Typography, Button } from '@material-ui/core'
import { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import CheckIcon from '@material-ui/icons/Check'
import styles from './Ratings.module.scss'
import clsx from 'clsx'

const Ratings: React.FC = () => {
  const [tabValue, setTabValue] = useState<string>('may')
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <>
      <Paper className="pt-20 pr-20 pl-20" elevation={0}>
        <Typography variant="h4" className="mb-20" style={{ fontWeight: 'bold', fontSize: 30 }}>
          Ratings of the Groups and Blogs
        </Typography>
        <Typography className="mb-20">
          You can now also choose the specific IDE version that you want to prepare project indexes for (the IDE version overrides the
          default version specified by the administrator). The default dev-container image includes a basic minimum of tools required for
          languages supported by the IDEs (PHP, Ruby, Node.js, etc.), which should be sufficient for evaluation purposes. However, for real
          projects, we suggest preparing custom images that suit the specific needs of your project. Try remote development with your
          favorite JetBrains IDE, and share your feedback with us!
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Tabs
            value={tabValue}
            onChange={(e, value) => setTabValue(value)}
            textColor="primary"
            indicatorColor="primary"
            aria-label="secondary tabs example"
          >
            <Tab value="may" label="may" />
            <Tab value="3 months" label="months" />
            <Tab value="all time" label="all" />
          </Tabs>
        </div>
      </Paper>
      <Paper className="pt-20 pr-20 pl-20" elevation={0}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="right">Rating</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ borderBottom: 'none', borderBottomColor: 'transparent' }}>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <span className="mr-15">1</span>
                JAck
              </TableCell>
              <TableCell align="right">1500</TableCell>
              <TableCell align="right">
                <Button onClick={() => setChecked(!checked)} className={clsx(styles.button, checked && styles.disabled)}>
                  {!checked ? <AddIcon /> : <CheckIcon />}
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </>
  )
}

export default Ratings
