import React from "react";
import arrMembers from "../../../../BDfake/BdFakeMembros";
import CardTime from "./CardTime";

const SectionDQuemSomos = () => {
  return (
    <section className="section-d-quemsomos">
      <div className="section-d-quemsomos-diretores">
        <h2>Diretores</h2>
        {arrMembers.map((membro) => {
          if (membro.grupo === "Diretores") {
            return (
              <CardTime
                foto={membro.foto}
                nome={membro.nome}
                cargo={membro.cargo}
                descricao={membro.descricao}
              />
            );
          }else{ return }
        })}
      </div>
      <div className="section-d-quemsomos-gerencial">
        <h2>Gerência</h2>
        {arrMembers.map((membro) => {
          if (membro.grupo === "Gerencial") {
            return (
              <CardTime
                foto={membro.foto}
                nome={membro.nome}
                cargo={membro.cargo}
                descricao={membro.descricao}
              />
            );
          }else{ return
          }
        })}
      </div>
      <div className="section-d-quemsomos-desenvolvedores">
        <h2>Desenvolvedores</h2>
        {arrMembers.map((membro) => {
          if (membro.grupo === "Desenvolvedores") {
            return (
              <CardTime
                foto={membro.foto}
                nome={membro.nome}
                cargo={membro.cargo}
                descricao={membro.descricao}
              />
            );
          }else{return
          }
        })}
      </div>
      <div className="section-d-quemsomos-designers">
        <h2>Designers</h2>
        {arrMembers.map((membro) => {
          if (membro.grupo === "Designers") {
            return (
              <CardTime
                foto={membro.foto}
                nome={membro.nome}
                cargo={membro.cargo}
                descricao={membro.descricao}
              />
            );
          }else{return}
        })}
      </div>
      <div className="section-d-quemsomos-redatores">
        <h2>Redatores</h2>
        {arrMembers.map((membro) => {
          if (membro.grupo === "Redatores") {
            return (
              <CardTime
                foto={membro.foto}
                nome={membro.nome}
                cargo={membro.cargo}
                descricao={membro.descricao}
              />
            );
          }else{return}
        })}
      </div>
    </section>
  );
};

export default SectionDQuemSomos;
