import React,  {useState} from 'react'
import { IPost } from '../types'

type Props = {
    savePost: (e: React.FormEvent, formData: IPost) => void
}


const AddPost = ({savePost} : Props) => {
    const [ formData, setFormData ] = useState<IPost>()

    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const { id, value } = e.currentTarget

        setFormData({
            ...formData,
              [id]: value
        })
    }
    return (
        <form className='Form' onSubmit={(e) => savePost(e, formData)}>
        <div>
          <div className='Form--field'>
            <label htmlFor='name'>Title</label>
            <input onChange={handleChange} type='text' id='title' />
          </div>
          <div className='Form--field'>
            <label htmlFor='body'>Description</label>
            <input onChange={handleChange} type='text' id='body' />
          </div>
        </div>
        <button
          className='Form__button'
          disabled={formData === undefined ? true : false}
        >
          Add Post
        </button>
      </form>
    )
}

export default AddPost
