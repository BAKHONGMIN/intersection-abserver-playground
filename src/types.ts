export interface Airline {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
}

export interface Passengerm {
  id: string;
  name: string;
  trips: number;
  airline: Airline;
  __v: number;
}

export interface Response {
  totalPassengers: number;
  totalPages: number;
  data: Array<Passengerm>;
}

export interface Props {
  isLastItem: boolean;
  onFetchMorePassengers: () => void;
  children: string;
}
