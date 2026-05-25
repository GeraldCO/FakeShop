export default async function fetchProducts (){
    return fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .catch((error) => console.error(error));
}