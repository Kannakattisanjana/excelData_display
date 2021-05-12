import { Sorter } from "./sorter";
import ReactStars from "react-rating-stars-component";

export const userColumns = [
  {
    title: "Fund Name",
    dataIndex: "Fund_Name",
    key: "Fund_Name",
    sorter: {
      compare: Sorter.DEFAULT,
      multiple: 1
    }
  },
  {
    title: "ConJointAnalysis Ratings",
    dataIndex: "Ratings",
    key: "Ratings",
    sorter: {
      compare: Sorter.DEFAULT,
      multiple: 1
    }
  },
  {
    title: "DEA Ratings",
    dataIndex: "RatingDEA",
    key: "RatingDEA",
    sorter: {
      compare: Sorter.DEFAULT,
      multiple: 1
    }
  },
  {
    title: "5 STAR RATING BASED ON CONJOINTANALYSIS",
    key : "Ratings",  
    render:(Ratings) => {
      const firstExample = {
        size: 30,
        value: 2.5,
        isHalf: true,
        edit: false
      };
      return (
      <ReactStars {...firstExample}/>);
      }
  },
  {
    title: "5 STAR RATING BASED ON DEA",
    key : "RatingDEA",  
    render:(Ratings) => {
      const firstExample = {
        size: 30,
        value: 2.5,
        isHalf: true,
        edit: false
      };
      return (
      <ReactStars {...firstExample}/>);
      }
  }
  
];
