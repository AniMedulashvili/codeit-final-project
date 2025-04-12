import error from "./error";

const Profile = async () => {
   let products;
   try {
    const data = await fetch('https://fakestoreapi.com/products')
    products= await data.json();
   } catch(error){
    throw Error(error)
   }
   console.log(products)


    return (
        <div>
            {products.map((product) => (
                <section key={product.id}>
                <p>{product.title}</p>
                </section>
            ))}
        </div>
    )
}

export default Profile;