import { Product } from "./product"

describe("Product unit tests", () => {
  it("should throw and error when id is empty", () => {
    expect(() => {
      const product = new Product("", "Product 1", 100)
    }).toThrowError("ID is required")
  })

  it("should throw and error when name is empty", () => {
    expect(() => {
      const product = new Product("1", "", 100)
    }).toThrowError("Name is required")
  })

  it("should throw and error when price is less than zero", () => {
    expect(() => {
      const product = new Product("1", "Product 1", -100)
    }).toThrowError("Price must be greater than zero")
  })

  it("should throw and error when quantity is less or equals to zero", () => {
    expect(() => {
      const product = new Product("1", "Product 1", -100)
    }).toThrowError("Price must be greater than zero")
  })

  it("should change product name", () => {
    const product = new Product("1", "Product 1", 100)
    product.changeName("Product 2")
    expect(product.name).toBe("Product 2")
  })

  it("should change price", () => {
    const product = new Product("1", "Product 1", 100)

    product.changePrice(500)

    expect(product.price).toBe(500)
  })
})