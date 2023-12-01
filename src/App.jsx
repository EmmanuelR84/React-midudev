import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    initialIsFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'pablo H.',
    initialIsFollowing: false
  },
  {
    userName: 'pacoHdezs',
    name: 'paco Hdezs',
    initialIsFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    initialIsFollowing: false
  },
  {
    userName: 'emmanuelr84',
    name: 'Emmanuel Ramello',
    initialIsFollowing: true
  },
]

export default function  App () {

  // No es aconsejable hacerlo de esta forma, pasar todas las props en una constante, es mejor pasar todas las props al componente una por una, para que no renderece mas de una vez y mas claro de entender lo que se esta pasando a cada componente.
  // const midudev = { userName: 'midudev' };

  return (
    <section className='App'>
      {/* <TwitterFollowCard userName='emmanuelr84' >
        Emmanuel Ramello
      </TwitterFollowCard>
      <TwitterFollowCard {...midudev} >
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard userName='pheralb' initialIsFollowing={true} >
        Pablo Hernandez
      </TwitterFollowCard>
      <TwitterFollowCard userName='elonmusk' >
        Pablo Hernandez
      </TwitterFollowCard>
      <TwitterFollowCard >
        Vanderhart
      </TwitterFollowCard> */}

      {/* Mapeando desde un json */}

      {
        users.map(user =>{
          const { userName, name, initialIsFollowing } = user;
          return (
            < TwitterFollowCard 
          /** agregamos la key para diferenciar cada dato que traemos del json */
              key={userName}
              userName={userName}
              initialIsFollowing={initialIsFollowing}
              >
                {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
};