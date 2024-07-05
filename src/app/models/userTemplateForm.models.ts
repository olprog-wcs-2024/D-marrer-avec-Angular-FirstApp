export interface Adress{

    city : string;
    street : string;
    postalCode : string;
  }
  
   export interface User {
  
      userName : string;
      userMail : string;
      userPassword : string;
      userAddress : Adress;
    }