export default function httpRequestHandler(data, connection) {
  const requestData = data.toString();
  console.log('Recebida requisição HTTP:\n', requestData);

  const response = `
HTTP/1.1 200 OK
Content-Type: text/plain

Olá! Esta é uma resposta padrão vinda do servidor.


`;
  connection.write(response);
  connection.end();
}