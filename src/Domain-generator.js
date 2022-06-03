var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
let extension=['.com','.net','.us','.io','.es'];


/*let domains='';
for(j=0;j<adj.length;j++)
{
    for(i=0;i<pronoun.length;i++) {
        for(k=0;k<noun.length;k++){
                domains+=pronoun[i]+adj[j]+noun[k]+'.com\n';
        }
    }
}*/
let domains2=[];
adj.forEach(function(item1) {
    pronoun.forEach(function(item2){
        noun.forEach(function(item3){
            extension.forEach(function(item4){
                domains2+=[item2+item1+item3+item4+'\n']
            })
        })

    })
   
});

console.log(domains2);

