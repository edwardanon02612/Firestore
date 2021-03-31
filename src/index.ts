import db from './firebase/config';

const usuario = {
    nombre: 'Maria',
    activo: true,
    fechaNaci: 0
}

const usuariosRef = db.collection('usuarios');

//db.collection('usuarios')
//.add( usuario )
//.then(docRef => {
    //console.log( docRef )
//})
//.catch( e => console.log('error', e) )

//Update usuarios set activo: false where...
//usuariosRef
 //.doc('DuLBmjRGrg0B8bS372FU')
 //.update({
  //   activo: true 
 //});

 //Destructivo
 //usuariosRef
 //.doc('DuLBmjRGrg0B8bS372FU')
 //.set({
   //  activo: true,
   //  edad: 44,
 //});

 //Delete from usuarios where id = 'xx'
 //usuariosRef
 //.doc('DuLBmjRGrg0B8bS372FU')
 //.delete()
 //.then( () => console.log('Borrado') )
 //.catch( e => console.log('error', e));

 //select * from usuarios;
 usuariosRef
   .onSnapshot( snap => {

    const usuarios: any[] = [];

    snap.forEach( snapHijo => {
      usuarios.push({
          id: snapHijo.id
          ...snapHijo.data() 
      });
    } );

    console.log(usuarios)

   } )