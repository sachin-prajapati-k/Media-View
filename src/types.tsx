export interface productsTypes {
  product_name: string;
  product_price: number | String;
  sale_price: number | String;
  product_description: String;
  product_rating: number;
  product_discount_per: String;
  in_stock: Number;
  product_img: string;
  key?: number;
}

///////////////////Movies Pages//////////////////////

export interface IMovieTypes {
  id?: number;
  title?: string;
  release_year?: number;
  release_date?: string;
  genre?: string[];
  language?: string;
  duration_minutes?: number;
  rating?: string;
  imdb_rating?: number;
  director?: string;
  cast?: string[];
  description?: string;
  poster_url?: string;
  trailer_url?: string;
  watch_url?: string;
}
