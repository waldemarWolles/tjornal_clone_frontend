import React, { useEffect } from 'react'

import EditorJS from '@editorjs/editorjs'

type Props = {}

export const Editor: React.FC = (props: Props) => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Enter your article text',
    })

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy()
        })
        .catch((e) => {
          console.error('ERROR editor cleanup', e)
        })
    }
  }, [])

  return <div id="editor" />
}
