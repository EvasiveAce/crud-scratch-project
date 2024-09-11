import Table from "../Components/DynamicTableComponent.js"
import data from "../locationdata.json"

const LocationTool = () => {
    return <Table 
      type="Location" 
      data={data} 
      column1={["column1", "ID"]} 
      column2={["column2", "Name", "Enter the location name:"]}
      column3={["column3", "State", "Enter the state:"]}
      column4={["column4", "Country", "Enter the country:"]}
      />
  };
  
  
  export default LocationTool;
  