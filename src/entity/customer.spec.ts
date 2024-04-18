import { Address } from "./address"
import { Customer } from "./customer"

describe("Customer unit tests", () => {
  it("should throw an error when id is empty", () => {
    expect(() => {
      let customer = new Customer("", "John Doe")
    }).toThrowError("ID is required")
  })
  it("should throw an error when id is empty", () => {
    expect(() => {
      let customer = new Customer("1", "")
    }).toThrowError("Name is required")
  })

  it("should change name", () => {
    let customer = new Customer("1", "Jonh Doe")

    customer.changeName("Doe John")

    expect(customer.name).toBe("Doe John")
  })

  it("should active customer", () => {
    const customer = new Customer("1", "Customer 1")
    const address = new Address("strees", 1, "00000-000", "São Paulo")
    customer.Address = address

    customer.active()

    expect(customer.isActive()).toBe(true)
  })

  it("should deactivate customer", () => {
    const customer = new Customer("1", "Customer 1")

    customer.deactivate()

    expect(customer.isActive()).toBe(false)
  })

  it("should throw error when address is undefined when activate a customer", () => {
    expect(() => {
      const customer = new Customer("1", "John Doe")

      customer.active()
    }).toThrowError("Address is mandatory to activate a customer")
  })

  it("should add reward points", () => {
      const customer = new Customer("1", "John Doe")

      expect(customer.rewardPoints).toBe(0)

      customer.addRewardPoints(10)

      expect(customer.rewardPoints).toBe(10)

      customer.addRewardPoints(10)

      expect(customer.rewardPoints).toBe(20)
  })
})