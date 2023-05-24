function newImage (y,l,b) {
let x = document.createElement('img')    
x.src = y
x.style.position = 'fixed'
x.style.left = l
x.style.bottom = b 
document.body.append(x)
return x
}

//let greenCharacter = document.createElement('img')
newImage ('assets/green-character.gif','100px','100px')

//let pinetree = document.createElement('img')
newImage ('assets/pine-tree.png','450px','200px')

newImage ('assets/tree.png','200px','300px')

newImage ('assets/pillar.png','350px','100px')

newImage ('assets/crate.png','150px','200px')

newImage ('assets/well.png','500px','425px')

/*let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)
let pinetree = document.createElement('img')
pinetree.src = 'assets/pine-tree.png'
pinetree.style.position = 'fixed'
pinetree.style.accentColor.left = '450px'
pinetree.style.bottom= '200px'
document.body.append(pinetree)*/

/*let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})*/

function newItem(y,l,b) {
    let x = document.createElement('img')
    x.src = y
    x.position = 'fixed'
    x.left = l
    x.bottom = b
    document.body.append(x)
    
    x.addEventListener('click', function(){
        x.remove()    
    })
    return x
} 
newItem ('assets/sword.png','500px','405px')
newItem ('assets/shield.png','165px','185px')
newItem ('assets/staff.png','600px','100px')