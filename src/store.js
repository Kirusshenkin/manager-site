import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 8,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "District 4",
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      text: "Hello this working."
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Diamond Road",
      image: "/photo-1519608487953-e999c86e7455.jpeg",
      aspect: 1.5,
      text: "Hello this working."
    },
    {
      offset: 3,
      factor: 2.25,
      header: "Catalina",
      image: "/ph1.jpg",
      aspect: 1.5037,
      text: "Hello this working."
    },
    {
      offset: 4,
      factor: 2.0,
      header: "Building 21",
      image: "/ph3.jpg",
      aspect: 0.665,
      text: "Hello this working."
    },
    {
      offset: 5,
      factor: 1.75,
      header: "Sector 8",
      image: "/photo-1533577116850-9cc66cad8a9b.jpeg",
      aspect: 1.55,
      text: "Hello this working."
    },
    {
      offset: 7,
      factor: 1.05,
      header: "The Factory",
      image: "/photo-1548191265-cc70d3d45ba1.jpeg",
      aspect: 1.77,
      text: "Education and enlightenment."
    }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 0.6, factor: 1.8 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 0.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 0.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 1.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 0.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 1.5, factor: 6 }
  ],
  top: createRef()
}

export default state
