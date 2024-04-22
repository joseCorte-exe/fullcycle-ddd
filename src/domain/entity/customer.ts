import { Address } from "./address";

export class Customer {
  private _id: string;
  private _name: string = "";
  private _address!: Address;
  private _isActive: boolean = true;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string) {
    this._name = name
    this._id = id;
    this.validate()
  }

  get name() {
    return this._name
  }

  get rewardPoints() {
    return this._rewardPoints;
  }

  get id() {
    return this._id
  }

  validate() {
    if (this._id.length === 0) throw new Error("ID is required")
    if (this._name.length === 0) throw new Error("Name is required")
  }

  changeName(name: string) {
    this._name = name;
  }

  active() {
    if (this._address === undefined) {
      throw new Error("Address is mandatory to activate a customer");
    }
    this._isActive = true;
  }

  deactivate() {
    this._isActive = false
  }

  isActive(): boolean {
    return this._isActive
  }

  set Address(addres: Address) {
    this._address = addres
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points
  }

  changeAddress(address: Address) {
    this._address = address
  }
}