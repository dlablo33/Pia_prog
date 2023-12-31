import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  constructor(
    public firestore: AngularFirestore,
    public auth: AngularFireAuth
    ) { }
    login(data){
      return this.auth.signInWithEmailAndPassword(data.email, data.password);
    }

    signup(data){
      return this.auth.createUserWithEmailAndPassword(data.email, data.password);
    }

    saveDetails(data){
      return this.firestore.collection("users").doc(data.uid).set(data);
    }

    getDetails(data){
      return this.firestore.collection("users").doc(data.uid).valueChanges();
    }

    delete(data){
      return this.firestore.collection("users").doc(data.uid).delete();
    }

    update(data){
      return this.firestore.collection("users").doc(data.uid).set(data);
    }

    getAll(data){
      return this.firestore.collection("users").snapshotChanges();
    }
}
