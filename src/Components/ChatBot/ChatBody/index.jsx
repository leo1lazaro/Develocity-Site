import React from "react";
import './chatbody.css';

const ChatBody = () => {
  return (
    <div className="chatbody">
      <div className="chatbody-mensagens">
        <p className="chatbody-mensagens-mensagem bot">
          Olá, como posso ajudar?
        </p>
        <p className="chatbody-mensagens-mensagem user">
          Gostaria de saber se esses cursos concedem certificados
        </p>
      </div>
      <div className="chatbody-inputs">
        <input type="text" className="chatbody-inputs-caixa-dialogo" />
        <button className="chatbody-inputs-btn-enviar">Enviar</button>
      </div>
    </div>
  );
};

export default ChatBody;
