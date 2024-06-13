const Maintenance = () => {
  return (
    <div className="h-[calc(100dvh-80px)] flex items-center justify-center">
      <span className="flex items-center gap-4">
        <svg
          height="32px"
          width="32px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 502.697 502.697"
          xmlSpace="preserve">
          <g>
            <g>
              <path
                style={{ fill: "currentcolor" }}
                d="M439.109,0H111.341C81.983,0,57.953,24.008,57.953,53.388v327.768
				c0,7.42,1.553,14.496,4.314,20.924l-42.559,42.343l0.216,0.237c-13.007,13.439-13.007,34.815,0.259,47.995
				c13.18,13.309,34.621,13.352,48.081,0.345l0.173,0.237l58.996-58.694h311.655c29.336,0,53.409-24.008,53.409-53.409V53.388
				C492.496,24.008,468.445,0,439.109,0z M54.286,480.058c-5.867,5.867-15.445,5.889-21.42-0.065c-5.889-5.889-5.91-15.531,0-21.42
				c5.91-5.867,15.488-5.91,21.398-0.022C60.175,464.484,60.175,474.083,54.286,480.058z M444.394,387.627H174.586l93.639-93.143
				l94.027-0.28l25.734-96.141l-10.225-10.246l-51.015,51.123l-49.936-49.872l51.058-51.101l-10.203-10.268l-96.055,25.82
				l-0.324,91.417l-0.518-0.582L102.432,362.109V99.01h341.983L444.394,387.627L444.394,387.627z"
              />
            </g>
          </g>
        </svg>
        <span>
          <h1>We are currently undergoing maintenance</h1>
          <p>Please check back later.</p>
        </span>
      </span>
    </div>
  );
};

export default Maintenance;
