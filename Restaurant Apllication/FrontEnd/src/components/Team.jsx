import { data } from "../restApi.json";

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            temporibus amet rerum nobis ad eligendi, voluptas sed corporis
            dolorum inventore.
          </p>
        </div>
        <div className="team_container">
            {
                data[0].team.map(elemet=>{
                    return(
                        <div className="card" key={elemet.id}>
                            <img src={elemet.image} alt={elemet.name} />
                            <h3>{Element.name}</h3>
                            <p>{elemet.designation}</p>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  );
};

export default Team;
