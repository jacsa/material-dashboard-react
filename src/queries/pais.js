import { gql } from "apollo-boost";
interface CreatePaisInput {
    name: String,
    estatus: Boolean
}

interface UpdatePaisInput {
    id: Int,
    name: String,
    estatus: Boolean
}

interface DeletePaisInput {
    id: Int
}

const GET_PAIS_BY_ID = gql`
    query Pais($id: Int) {
        pais(id: $id) {
            id
            name
            estatus
    }
}`;

const GET_ALL_PAISES = gql`
    query {
        paises {
            id
            name
            estatus
    }
}`;

const GET_PAISES_DD = gql`
   query {
    paisesDD {
        id
        name
    }
}`;

const ADD_PAIS = gql`
 mutation AddPais($input: CreatePaisInput) {
    addPais(input: $input ) {
        id
    }
}`;

const UPDATE_PAIS = gql` 
mutation updatePais( $input: UpdatePaisInput,$id:Int) {
     updatePais(input: $input, id:$id ) {
        id
    }
}`;


const DELETE_PAIS = gql`
  mutation deletePais($input: DeletePaisInput!) {
    deletePais(input: $input){
        id
    }
}`;


export {
    GET_ALL_PAISES,
    GET_PAIS_BY_ID,
    GET_PAISES_DD,
    ADD_PAIS,
    DELETE_PAIS,
    UPDATE_PAIS
};