import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
export type DeviceType = string;
export type DeviceInfo = {
  img: string;
  rate: number;
  price: number;
  tittle: string;
  id: string;
  oldPrice?: number;
};
export type DataType = [DeviceType, DeviceInfo[]];
const headphones: DeviceInfo[] = [
  {
    img: img1,
    rate: 4.7,
    id: "1",
    price: 2927,
    oldPrice: 3527,
    tittle: "Apple BYZ S852I",
  },
  {
    img: img2,
    rate: 4.5,
    id: "2",
    price: 2327,
    tittle: "Apple EarPods",
  },
  {
    img: img3,
    rate: 4.5,
    id: "3",
    price: 2327,
    tittle: "Apple EarPods",
  },
  {
    img: img1,
    rate: 4.7,
    id: "4",
    price: 2927,
    tittle: "Apple BYZ S852I",
  },
  {
    img: img2,
    rate: 4.5,
    id: "5",
    price: 2327,
    tittle: "Apple EarPods",
  },
  {
    img: img3,
    rate: 4.5,
    id: "6",
    price: 2327,
    tittle: "Apple EarPods",
  },
];
const wirelessHeadphones: DeviceInfo[] = [{
  img: img4,
  rate: 4.7,
  id: "7",
  price: 9527,
  tittle: "Apple AirPods",
},
  {
    img: img5,
    rate: 4.5,
    id: "8",
    price: 6527,
    tittle: "GERLAX GH-04",
  },
  {
    img: img6,
    rate: 4.5,
    id: "9",
    price: 7527,
    tittle: "BOROFONE BO4",
  },]
export const mockData: DataType[] = [["Наушники", headphones], ["Беспроводные наушники", wirelessHeadphones]];


