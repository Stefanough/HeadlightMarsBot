# Mars Mining Challenge

## Issues

- to much time trying to debug the local test server.
- trouble getting return response from remote simulation server.

## Questions/Thoughts

My first thought was that I would need to instantiate a 'Bot' class to keep track of movement/resource data. I don't think I need to keep track of resources/movement? Making calls to the  `/move`, `/claim`, and `/scan` endpoints will allow the simulated environment to keep track most relevant information. The system returns data concerning location, location of nodes, claimed nodes, node value and score. Also, each call requires a callsign, which the simulation uses to ID and track the bot with all subsequent calls.

I feel like I need to keep track of how much of the map has been explored in order to create an efficient algorithm. 

Considering where to store data about how much of the map is explored. In side the main run function or inside a bot object?

Can I claim a limited number of nodes?

Do I have to move to a node to mine it?


## Strategy

### High Level

The bot will land (instantiate) and begin to scan the surrounding area. Basic loop will consist of

- Scan
- If no nodes found
  -Move to edge of scanned area (three units in any orthogonal direction).
-If nodes found
  -Claim node.
- Repeat until entire 100 x 100 area is scanned.

### Low Level

## Installation