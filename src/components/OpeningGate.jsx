export default function OpeningGate({ open, onEnter }) {
  return (
    <div className={`gate ${open ? 'gate--closed' : ''}`} aria-hidden={open}>
      <p className="gate__label">The wedding of</p>
      <h1 className="gate__names">
        Shiba
        <span className="gate__amp">&amp;</span>
        Adheeb
      </h1>
      <p className="gate__date">23rd December 2026 · Tirur</p>
      <button className="gate__button" onClick={onEnter}>
        Open Invitation
      </button>
    </div>
  )
}
