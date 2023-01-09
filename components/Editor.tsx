import React, { useEffect } from 'react'

import EditorJS, { OutputData } from '@editorjs/editorjs'

interface IEditorProps {
  onChange: (blocks: OutputData['blocks']) => void
  initialBlocks?: OutputData['blocks']
}

export const Editor: React.FC<IEditorProps> = ({ onChange, initialBlocks }) => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Enter your article text',
      async onChange() {
        const { blocks } = await editor.save()
        onChange(blocks)
      },
      data: {
        blocks: initialBlocks ? initialBlocks : [],
      },
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
