
#!/bin/bash
npm install express cors pg pm2 nodemon
export PGPASSWORD="Admin@1324";psql -h localhost -U admin -p 5432 -d xharktank < XharkTank.sql
