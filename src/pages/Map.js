function Map() {
  return (
    <div>
      <div className="page">
      <marquee className="marquee" >This is the Map page!</marquee>
      </div>
      <img src="/Näyttökuva 2025-03-04 112713.png" alt="Map Image" usemap="#image-map" />

      <map name="image-map">
          <area target="" alt="Ferris wheel" title="Ferris wheel" href="" coords="490,427,768,742" shape="rect" />
          <area target="" alt="Entrance" title="Entrance" href="" coords="101,813,562,1305" shape="rect" />
          <area target="" alt="Cafe" title="Cafe" href="" coords="1620,614,1899,930" shape="rect" />
          <area target="" alt="Outlet" title="Outlet" href="" coords="1029,835,1233,1081" shape="rect" />
      </map>
    </div>
  );
}

export default Map;