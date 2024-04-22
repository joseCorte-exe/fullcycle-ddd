import { Order } from "./order"
import { OrderItem } from "./order_item"

describe("Order unit tests", () => {
  it("should throw an error when id is empty", () => {
    expect(() => {
      const customer = new Order("", "123", [])
    }).toThrowError("ID is required")
  })
  it("should throw an error when customer id is empty", () => {
    expect(() => {
      const customer = new Order("123", "", [])
    }).toThrowError("CustomerId is required")
  })

  it("should throw an error when items is empty", () => {
    expect(() => {
      const customer = new Order("123", "123", [])
    }).toThrowError("Items are required")
  })

  it("should calculate total", () => {
    const item = new OrderItem("1", "item", 100, "p1", 2)

    const order = new Order("1", "1", [item])

    expect(order.total()).toBe(200)

    const item2 = new OrderItem("2", "item 2", 200, "p2", 2)

    const order2 = new Order("2", "2", [item, item2])

    expect(order2.total()).toBe(600)
  })

  it("should throw an error if item quantity is less or equals than zero", () => {
    expect(() => {
      const item = new OrderItem("1", "item", 100, "p1", 0)
  
      const order = new Order("1", "1", [item])
    }).toThrowError("Quantity must be greater than zero")
  })
})