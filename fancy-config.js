//options for connecting to a leveldb database
//Uses multilevel for handling multiple client connections over tcp:
//https://github.com/juliangruber/multilevel
module.exports = {
  port:9689
  ,name:'user test server'
  ,manifest:'/tmp/user-manifest.json'
  ,database:'./database'    //location of database folder
  ,timeout:0 //will disconnect a client in X milliseconds of inactivity, 0 disables
  //passes configuration options when starting leveldb
  ,options:{
    valueEncoding:'json'
    //,db:require('memdown') //uncomment to use in memory storage. Will ignore database option.
  }
  //enable authentication for client connections, by default a user has full access unless denied
  //operations: get,put,del,batch,write
  ,auth:{
    enabled:false
  }
  //Define sublevels and secondary indexes here. Follow example conventions.
  //Uses sublevel and level-sec: 
  //https://github.com/dominictarr/level-sublevel
  //https://github.com/juliangruber/level-sec
  ,sublevels:[
    {
      name:'users' 
      ,indices:[
        {name:'Username',keys:['username','id']}
      ]
    }
    ,{
      name:'tokens' 
      ,indices:[
        {name:'Userid',keys:['user.id']}
      ]
    }
    ,{
      name:'roles'
    }
  ]
}
