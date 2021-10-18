import NoteContext from './NoteContext'
import { useState } from 'react'

const NoteState = (props)=>{
    const note = [
        {
          "_id": "6139e23c35a1c24405e8a292",
          "user": "613893c957d101ae0f6de5b1",
          "title": "Edited Naress",
          "description": "Edited secription",
          "tags": "general",
          "date": "2021-09-09T10:30:20.704Z",
          "__v": 0
        },
        {
          "_id": "613de4479cad369b8a9c408c",
          "user": "613893c957d101ae0f6de5b1",
          "title": "NaryVIhdfhdhdhp - new ",
          "description": "Heavy weight ddfdfhdfhdfhfhdfchamp",
          "tags": "general",
          "date": "2021-09-12T11:28:07.147Z",
          "__v": 0
        },
        {
            "_id": "613de4479cad369b8a9c408c",
            "user": "613893c957d101ae0f6de5b1",
            "title": "Nary fg  er  - new ",
            "description": "Heavy weight ddfdfhdfhdfhfhdfchamp",
            "tags": "general",
            "date": "2021-09-12T11:28:07.147Z",
            "__v": 0
          },
          {
            "_id": "613de4479cad369b8a9c408c",
            "user": "613893c957d101ae0f6de5b1",
            "title": "NaryVIhdsdsf tghg - new ",
            "description": "Heavy weight ddfdfhdfhdfhfhdfchamp",
            "tags": "general",
            "date": "2021-09-12T11:28:07.147Z",
            "__v": 0
          },
          {
            "_id": "613de4479cad369b8a9c408c",
            "user": "613893c957d101ae0f6de5b1",
            "title": "NaryVIhdsdsf tghg - new ",
            "description": "Heavy weight ddfdfhdfhdfhfhdfchamp",
            "tags": "general",
            "date": "2021-09-12T11:28:07.147Z",
            "__v": 0
          },
          {
            "_id": "613de4479cad369b8a9c408c",
            "user": "613893c957d101ae0f6de5b1",
            "title": "NaryVIhdsdsf tghg - new ",
            "description": "Heavy weight ddfdfhdfhdfhfhdfchamp",
            "tags": "general",
            "date": "2021-09-12T11:28:07.147Z",
            "__v": 0
          },
          {
            "_id": "613de4479cad369b8a9c408c",
            "user": "613893c957d101ae0f6de5b1",
            "title": "NaryVIhdsdsf tghg - new ",
            "description": "Heavy weight ddfdfhdfhdfhfhdfchamp",
            "tags": "general",
            "date": "2021-09-12T11:28:07.147Z",
            "__v": 0
          },{
            "_id": "613de4479cad369b8a9c408c",
            "user": "613893c957d101ae0f6de5b1",
            "title": "NaryVIhdsdsf tghg - new ",
            "description": "Heavy weight ddfdfhdfhdfhfhdfchamp",
            "tags": "general",
            "date": "2021-09-12T11:28:07.147Z",
            "__v": 0
          }
      ]
      const [notes, setNotes] = useState(note)
    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState