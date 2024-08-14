
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://dragon-ball-api.herokuapp.com/api'

function fetchAPI(url, callback){
    var req = new XMLHttpRequest()
    req.open('GET', url, true)
    req.onreadystatechange = function(event){
        if(req.readyState === 4){
            if(req.status === 200){
                callback(null, JSON.parsed(req.responseText))
            }else {
                const error= new Error(`URL invalida ${url}`)
                return callback(err, null)
            }
        }
    }
    req.send()
}

module.exports = fetchAPI