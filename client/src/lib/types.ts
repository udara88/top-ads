export type User = {
    email:string;
    firstname:string;
    lastname:string;
    mobilenumber:string;
    imageUrl:string;
    isAuthenticated:boolean;
    
}

export type  signUpFormProps = {
    email:string;
    firstname:string;
    lastname:string;
    mobilenumber:string;
    password:string;
   }

   export type signInProps = {
    user:User;
    accessToken:string;
    refreshToken:string;
   }

