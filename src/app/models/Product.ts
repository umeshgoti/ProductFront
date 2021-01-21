import { ProductCategory } from './ProductCategory';
import { deserializeAs, serializeAs } from "cerialize";


export class Product {

  @serializeAs('id')
  @deserializeAs('id')
  private _id: string;

  @serializeAs('productName')
  @deserializeAs('productName')
  private _productName: string;

  @serializeAs('costPrice')
  @deserializeAs('costPrice')
  private _costPrice: number;

  @serializeAs('retailPrice')
  @deserializeAs('retailPrice')
  private _retailPrice: number;


  @serializeAs('productCategory')
  @deserializeAs('productCategory')
  private _productCategory: ProductCategory;





  /**
   * Getter id
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Getter productName
   * @return {string}
   */
  public get productName(): string {
    return this._productName;
  }

  /**
   * Getter costPrice
   * @return {number}
   */
  public get costPrice(): number {
    return this._costPrice;
  }

  /**
   * Getter retailPrice
   * @return {number}
   */
  public get retailPrice(): number {
    return this._retailPrice;
  }

  /**
   * Setter id
   * @param {string} value
   */
  public set id(value: string) {
    this._id = value;
  }

  /**
   * Setter productName
   * @param {string} value
   */
  public set productName(value: string) {
    this._productName = value;
  }

  /**
   * Setter costPrice
   * @param {number} value
   */
  public set costPrice(value: number) {
    this._costPrice = value;
  }

  /**
   * Setter retailPrice
   * @param {number} value
   */
  public set retailPrice(value: number) {
    this._retailPrice = value;
  }


    /**
     * Getter productCategory
     * @return {ProductCategory}
     */
	public get productCategory(): ProductCategory {
		return this._productCategory;
	}

    /**
     * Setter productCategory
     * @param {ProductCategory} value
     */
	public set productCategory(value: ProductCategory) {
		this._productCategory = value;
	}



}
