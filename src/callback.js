const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'

function fetchAPI(url, callback){
    var req = new XMLHttpRequest()
    req.open('GET', url, true)
    req.onreadystatechange = function(event){
        if(req.readyState === 4){
            if(req.status === 200){
                callback(null, JSON.parse(req.responseText))
            } else {
                const error = new Error(`URL invalida ${url}`)
                return callback(error, null)
            }
        }
    }

    req.send()
}
module.exports = fetchAPI