module.exports = ({ env }) => ({
  cors: {
    enabled: true,
    origin: ['http://localhost:3000'], // Ajusta esto según tu frontend
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    keepHeaderOnError: true,
  },
  csrf: {
    enabled: false,
  },
}); 