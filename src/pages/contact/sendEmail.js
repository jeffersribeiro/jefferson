import api from '../../global/api';

const sendEmail = ({ email, name, message }) => {
  api
    .post('/send-email', {
      email,
      name,
      message,
    })
    .then(() => {
      alert('email enviado com sucesso !! ;)');
    })
    .catch(() => {
      alert('Não foi possivel enviar o e-mail !! :/');
    });
};

export default sendEmail;
