export const isInCart = (product, basket) =>{
    return basket.find(item => item.id === product.id)
}