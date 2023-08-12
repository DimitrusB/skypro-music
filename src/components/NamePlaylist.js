export function NamePlaylist (props) {
    return (
        <div className="sidebar__item">
        <a className="sidebar__link" href="#">
          <img
            className="sidebar__img"
            src={props.src}
            alt="day's playlist"
          />
        </a>
      </div>
    )
}