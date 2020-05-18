import React from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import cellEditFactory,{Type} from 'react-bootstrap-table2-editor';
import swal from 'sweetalert';
import SaveFirebase from '../../components/firebase/save'


const { SearchBar } = Search;

const products = [{
    name:"Pedro",
    email:"pedro@gmail.com",
    id:"1"
},{
    name:"Juan",
    email:"pedro@gmail.com",
    id:"2"
},{
    name:"Lisbeth",
    email:"pedro@gmail.com",
    id:"3"
},{
    name:"Carlos",
    email:"pedro@gmail.com",
    id:"4"
}]

let columns = [{
  dataField: 'id',
  text: 'ID',
  style: { display: 'none' },
  headerStyle: { display: 'none' }
}, {
  dataField: 'name',
  text: 'Name',
  editable:false
}, {
  dataField: 'email',
  text: 'Email', 
  editor: {
    type:  Type.TEXT
 }
}];



class SelectionManagment extends React.Component {



    constructor(props) {
      super(props);
      this.state = { selected: [0, 1] };
      this.products = props.tareas
    }



  
    handleBtnClick = () => {
       
      if (!this.state.selected.includes(2)) {
        this.setState(() => ({
          selected: [...this.state.selected, 2]
        }));
      } else {
        this.setState(() => ({
          selected: this.state.selected.filter(x => x !== 2)
        }));
      }
    }
  
    handleOnSelect = (row, isSelect) => {
      if (isSelect) {
        this.setState(() => ({
          selected: [...this.state.selected, row.id]
        }));
      } else {
        this.setState(() => ({
          selected: this.state.selected.filter(x => x !== row.id)
        }));
      }
    }
  
    handleOnSelectAll = (isSelect, rows) => {
      const ids = rows.map(r => r.id);
      if (isSelect) {
        this.setState(() => ({
          selected: ids
        }));
      } else {
        this.setState(() => ({
          selected: []
        }));
      }
    }
  
    render() {



    const data =  this.props.tareas
    
    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        selected: this.state.selected,
        onSelect: this.handleOnSelect,
        onSelectAll: this.handleOnSelectAll,
        clickToEdit: true  
      };
      return (
        <div>
          <button className="btn btn-success" onClick={ this.handleBtnClick }>Select/UnSelect 3rd row</button>
          <ToolkitProvider
  keyField="id"
  data={ data }
  columns={ columns }
  search
>
  {
    props => (
      <div>
        <p>Input something at below input field:</p>
        <SearchBar { ...props.searchProps } />
        <hr />
        <BootstrapTable  keyField="id" data={ data  } columns={ columns } selectRow={ selectRow } 
          { ...props.baseProps }
          cellEdit={ cellEditFactory(
              {
                mode:'click',
                beforeSaveCell(oldValue, newValue, row, column, done) {
                  

                    let datafono = new Object();
                    datafono[column.dataField] = newValue;


                        if (window.confirm("Are you sure")) {

                            const adata = { 
                                collection:'Contacts',
                                data: datafono  ,
                                id: row.id

                            }

                            console.log(adata)

                            SaveFirebase(adata)
                            
                            done(true) // contine to save the changes
                        } else {
                            done(false) // contine to save the changes
                        }
      
                          return { async: true }
         
                 
                }
              }
            
          ) }
        />
      </div>
    )
  }
</ToolkitProvider>
        </div>
      );
    }
  }

  export default SelectionManagment