import RatingStar from "./RatingStar";

export interface IRatingStar {
  id: number;
  value: number;
  isSelected: boolean
}

export default RatingStar;