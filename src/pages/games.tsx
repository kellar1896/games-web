import react from 'react'
import GamesTable from '../components/games-table'
import { GameHeader } from '../models/games';

const headers = ['id', 'name', 'description', 'creationDate'] as GameHeader[];
const games = [
  {
    id: 1,
    name: "Chess",
    description: "A two-player strategy board game",
    creationDate: "2018-01-01T00:00:00.000Z"
  },
  {
    id: 2,
    name: "Poker",
    description: "A card game",
    creationDate: "2018-01-01T00:00:00.000Z"
  },
  {
    id: 3,
    name: "Chess",
    description: "A two-player strategy board game",
    creationDate: "2018-01-01T00:00:00.000Z"
  },
  {
    id: 4,
    name: "Poker",
    description: "A card game",
    creationDate: "2018-01-01T00:00:00.000Z"
  },
  {
    id: 5,
    name: "Chess",
    description: "A two-player strategy board game",
    creationDate: "2018-01-01T00:00:00.000Z"
  },
  {
    id: 6,
    name: "Poker",
    description: "A card game",
    creationDate: "2018-01-01T00:00:00.000Z"
  }
  ]

const Games = () => {
    return (
        <div className='p-2 md:p-10'>
            <div className="">
                <GamesTable headers={headers} data={games} />
            </div>
        </div>
    )
}

export default Games