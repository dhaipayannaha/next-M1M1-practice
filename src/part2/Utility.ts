type Product = {
    id: number
    name: string
    description: string
    price: number
    stock: number
    createdAt?: Date
}


type ProductSummary = Pick<Product, "id" | "name" | "price">



type ProductWithIdName = Omit<Product, "description" | "price" | "stock" | "createdAt">

type ProductWithOptional = Partial<Product>


type ProductWithoutOptional = Required<Product>


type ReadonlyProduct = Readonly<Product>