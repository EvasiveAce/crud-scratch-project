import Table from "../Components/DynamicTableComponent.js"
import data from '../tabledata.json'

const PersonTool = () => {
    return <Table 
      type="Person" 
      data={data} 
      column1={["column1", "ID"]} 
      column2={["column2", "Name", "Enter your name:"]}
      column3={["column3", "Address", "Enter your address:"]}
      column4={["column4", "Phone Number", "Enter your phone number:"]}
      />
  };
  
  export default PersonTool;
  