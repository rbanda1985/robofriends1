import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {
    return (
      <div>
        {
          robots.map((users, i) => {
            return (
              <Card 
              key={i}
              id={users[i].id}
              name={users[i].name}
              email={users[i].email}
              />
            )
          })
        }
      </div>
    )
}

export default CardList