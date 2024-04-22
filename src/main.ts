import { Address } from "./domain/entity/address";
import { Customer } from "./domain/entity/customer";
import { Order } from "./domain/entity/order";
import { OrderItem } from "./domain/entity/order_item";

const customer = new Customer("123", "José Corte");
const address = new Address("Rua xpto", 2, "02313120", "São Paulo");

customer.Address = address;
customer.active();

const item1 = new OrderItem("1", "Item 1", 10, "p1", 2)
const item2 = new OrderItem("2", "Item 2", 15, "p1", 2)

const order = new Order("1", "123", [item1, item2])