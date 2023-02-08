const express = require("express");
const server = express();
server.use(express.json());

const projects = [];

server.listen(4000);

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
  };

  projects.push(project);

  return res.json(project);
});

server.get('/', (req, res) => {
  res.send(projects)
})
