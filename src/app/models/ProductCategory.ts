import { deserializeAs, serializeAs } from 'cerialize';

export class ProductCategory {

  @serializeAs('id')
  @deserializeAs('id')
  private _id: string;

  @serializeAs('name')
  @deserializeAs('name')
  private _name: string;



  /**
   * Getter id
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter id
   * @param {string} value
   */
  public set id(value: string) {
    this._id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

}
