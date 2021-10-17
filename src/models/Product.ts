
type Product = { // tipando os dados
    title: string;
    price: number
};

const data: Product[] = [// recebendo as informações como fosse o banco de dados
    { title: 'Celular', price: 3097 },
    { title: 'Camera', price: 2500 },
    { title: 'TV', price: 10900 },
    { title: 'VideoCassete', price: 900 }
]

// Criei um objeto e dentro um metodo getAll tipando o metodo que ira receber um array
export const NewProduct = {
    getAll: (): Product[] => {
        return data
    },
// Novo metodo para filtrar por parametro passando price
    getBigFilters: (price:number): Product[] => {
        return data.filter(item => {
            if(item.price >= price){
                return true
            }
            else{
                return false
            }
        })
    }


}