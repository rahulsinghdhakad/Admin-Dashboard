import { ChangeEvent, useState } from "react"
import AdminSidebar from "../components/AdminSidebar"

const img = "data:image/jpeg;base64,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"


const ProductManagement = () => {
  const [name,setName]=useState<string>("Puma Shoe");
  const [price,setPrice]=useState<number>(2000);
  const [stock,setStock]=useState<number>(10);
  const [photo,setPhoto]=useState<string>(img);
  
  const changeImageHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    const file: File | undefined = e.target.files?.[0];
    const reader= new FileReader();

    if(file){
      reader.readAsDataURL(file);
      reader.onloadend=()=>{
        if(typeof reader.result === "string") setPhoto(reader.result)
      }
    }
  }

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="product-management">
        <section>
          <strong>ID:adsfasdf</strong>
          <img src={photo} alt="img" />
          {
            stock>0?
            <span>{stock} Available</span>:
            <span>Not Availabe</span>
          }
          <p>{name}</p>
          <h1>${price}</h1>
        </section>
        <article>
          <h2>New Product</h2>
          <form>
            <div>
              <label>Name</label>
              <input
                required
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            
            <div>
              <label>Price</label>
              <input
                required
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e)=>setPrice(Number(e.target.value))}
              />
            </div>

            <div>
              <label>Stock</label>
              <input
                required
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e)=>setStock(Number(e.target.value))}
              />
            </div>

            <div>
              <label>Photo</label>
              <input
                required
                type="file"
                onChange={changeImageHandler}
              />
            </div>

            {
              photo && <img src={photo} alt="img" />
            }

            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  )
}

export default ProductManagement