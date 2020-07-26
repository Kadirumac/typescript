import React,{useEffect} from 'react';
import axios from 'axios';


interface Fullname {
  firstname: string,
  lastname: string
}

interface Props{
  text: string,
  name?:Fullname
}

const Liste: React.FC<Props> = ({text,name}) => {  

     return (
        <div>
            liste Komponente {text}
            <h1>
              {name?.firstname}
            </h1>
        </div>
    );
};

export default Liste;