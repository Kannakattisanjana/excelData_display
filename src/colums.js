import { Sorter } from "./sorter";
import ReactStars from "react-rating-stars-component";

export const userColumns = [
  {
    title: "Fund Name",
    dataIndex: "Fund_Name",
    key: "Fund_Name",
    sorter: {
      compare: Sorter.DEFAULT,
      multiple: 2
    }
  },
  {
    title: "ConJointAnalysis Ratings",
    dataIndex: "Ratings",
    key: "Ratings",
    sorter: {
      compare: Sorter.DEFAULT,
      multiple: 2
    }
  },
  {
    title: "5 STAR RATING BASED ON CONJOINTANALYSIS",
    key : "Ratings",  
    render: (records) => {
      const recod = records.Ratings;
      const reco = parseFloat(recod.toFixed(1));
        return (
          <ReactStars size={25} isHalf={true} edit={false} value={reco}/>
        );
      }
    
  },

  {
    title: "DEA Ratings",
    dataIndex: "RatingDEA",
    key: "RatingDEA",
    sorter: {
      compare: Sorter.DEFAULT,
      multiple: 2
    }
  },

  {
    title: "5 STAR RATING BASED ON DEA",
    key : "RatingDEA",  
    render: (records) => {
      const DEA = records.RatingDEA;
      const DEAS = parseFloat(DEA.toFixed(1));
        return (
          <ReactStars size={25} isHalf={true} edit={true} value={DEAS}/>
        );
      }
  }
  
];
