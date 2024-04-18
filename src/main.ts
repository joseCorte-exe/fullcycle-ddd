import { Address } from "./entity/address";
import { Customer } from "./entity/customer";
import { Order } from "./entity/order";
import OrderItem from "./entity/order_item";

const customer = new Customer("123", "José Corte");
const address = new Address("Rua xpto", 2, "02313120", "São Paulo");

customer.Address = address;
customer.active();

const item1 = new OrderItem("1", "Item 1", 10)
const item2 = new OrderItem("2", "Item 2", 15)

const order = new Order("1", "123", [item1, item2])