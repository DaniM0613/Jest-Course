const fetchAPI = require('../src/callback')

test('should return the goku info', done => {
   const API = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'

   function callback(err, data){
    try {
        expect(err).toBeNull()
        expect(data).not.toBeNull()
    
        expect(data.name).toBe()
        done()

    }catch(err){
        done(err)
    }

   }
   fetchAPI(API, callback)

})