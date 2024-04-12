const http = require('http');
const fetch = require('node-fetch');
const PORT = 8080;
const server = http.createServer(async (req, res) => {
 if (req.method === 'GET' && req.url === '/') {
 try {
 // Faz uma requisição para uma API aberta (por exemplo, JSONPlaceholder)
 const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
 const data = await response.json();
 // Exibe os dados no console
 console.log('Resultado da API:', data);
 // Retorna a resposta para o cliente (navegador) como JSON
 res.writeHead(200, { 'Content-Type': 'application/json' });
 res.end(JSON.stringify(data));
 } catch (error) {
 console.error('Erro ao fazer requisição:', error);
 res.writeHead(500, { 'Content-Type': 'text/plain' });
 res.end('Erro ao processar a requisição');
 }
 } else {
 res.writeHead(404, { 'Content-Type': 'text/plain' });
 res.end('Endpoint não encontrado');
 }
});
server.listen(PORT, () => {
 console.log(`Servidor rodando em http://localhost:${PORT}`);
})
;