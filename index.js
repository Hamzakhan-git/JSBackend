require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData = {
    "login": "Hamzakhan-git",
    "id": 171766961,
    "node_id": "U_kgDOCjz0sQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/171766961?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Hamzakhan-git",
    "html_url": "https://github.com/Hamzakhan-git",
    "followers_url": "https://api.github.com/users/Hamzakhan-git/followers",
    "following_url": "https://api.github.com/users/Hamzakhan-git/following{/other_user}",
    "gists_url": "https://api.github.com/users/Hamzakhan-git/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Hamzakhan-git/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Hamzakhan-git/subscriptions",
    "organizations_url": "https://api.github.com/users/Hamzakhan-git/orgs",
    "repos_url": "https://api.github.com/users/Hamzakhan-git/repos",
    "events_url": "https://api.github.com/users/Hamzakhan-git/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Hamzakhan-git/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2024-06-05T04:38:44Z",
    "updated_at": "2024-11-12T16:25:44Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home',(req,res) => {
    res.send("Home page")
})
app.get('/github',(req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
