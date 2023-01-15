//disable typesc
import { useEffect, useState } from 'react'
import { Api } from '../utils/api'
import { IComment } from '../utils/api/types'

interface IUseCommentsProps {
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>
  comments: IComment[]
}

export const useComments = (postId?: number): IUseCommentsProps => {
  const [comments, setComments] = useState<IComment[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const array = await Api().comment.getAll(postId)

        setComments(array)
      } catch (error) {
        console.warn('Fech comments', error)
      }
    })()
  }, [postId])

  return { comments, setComments }
}
