curl -X GET "http://localhost:3000/usuario"


curl -X POST "http://localhost:3000/usuario" \
     -H "Content-Type: application/json" \
     -d '{ "nome": "Alice", "email": "alice@example.com" }'


curl -X GET "http://localhost:3000/usuario/lucas"

curl -X DELETE "http://localhost:3000/usuario/lucas"