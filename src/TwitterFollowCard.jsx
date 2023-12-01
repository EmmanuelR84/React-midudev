import { useState } from "react";

export function TwitterFollowCard ( { children, userName = 'unknown', initialIsFollowing} ) {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);


  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  // color al btn si sigues o no.
  const btnClassName = isFollowing
    ? 'tw-followCard-btn isFollowing'
    : 'tw-followCard-btn';

    const handleClick = ()=> {
      setIsFollowing(!isFollowing);
    }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='avatar del usuario a seguir'
          src={`https://unavatar.io/github/${userName}`} />
        <div className='tw-followCard-info'>
          <strong className='tw-followCard-userName'>{children}</strong>
          <span className='tw-followCard-userId'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className= {btnClassName} onClick={handleClick} >
          <span className="tw-followCard-text">{ text }</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
};