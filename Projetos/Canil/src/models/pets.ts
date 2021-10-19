import {data, PetType, Pet} from '../data'

export const Pets = {
    //Metodo de buscar todos os pets
    getAll: ():Pet[] => {
        return data;
    },
    //Metodo de pegar os pets por tipo
    getFromType: (type: PetType): Pet[] => {
        return data.filter(item  => item.type === type)
    },
    //Metodo de buscar os pets pelo search
    getSearchName: (name: String): Pet[]=> {
        return data.filter(item => 
            item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
        )
    }
}