//funkcija uzima Array object-a. vraca 
//listu u kojoj se nalaze samo object i s jednim kljucem

ispis = [{'1:A'}, {'1:C', '2:A'}, {'2:C'}]

function objekt(ispis){
    for (const key of Object.key(ispis)){
        const sadrzi = Object.hasOwn(ispis, key);
        if(!sadrzi){
            return false;
        }
    }
    return true;
}



console.log(objekt(ispis)); 