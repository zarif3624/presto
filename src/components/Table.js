import React from 'react';
import { forwardRef } from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };



export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Hospital', field: 'name',
      cellStyle: {
        backgroundColor: '#FFF',
        color: '#000'
      },
      headerStyle: {
        backgroundColor: '#FFF',
      }
     },
      { title: 'Doctors', field: 'doctors', type: 'numeric' },
      { title: 'Nurses', field: 'nurses', type: 'numeric' },
      { title: 'Gloves', field: 'gloves', type: 'numeric' },
      { title: 'Masks', field: 'masks', type: 'numeric' },
      { title: 'Ventilators', field: 'vent', type: 'numeric' },

    ],
    data: [
      { name: 'Bellevue Hospital Center', doctors: 1564, nurses: 1132, gloves: 70000, masks: 55000, vent: 376 },
      { name: 'Lenox Hill Hospital', doctors: 685, nurses: 580, gloves: 80000, masks: 73000, vent: 231 },
      { name: 'Sloan Kettering Cancer Center', doctors: 1312, nurses: 1092, gloves: 53000, masks: 49130, vent: 435 },
      { name: 'NYU Langone Hospital', doctors: 986, nurses: 578, gloves: 12000, masks: 120000, vent: 378 },
      { name: 'Mount Sinai Hospital', doctors: 1932, nurses: 786, gloves: 9800, masks: 14000, vent: 111 },
      { name: 'NewYork-Presbyterian', doctors: 1123, nurses: 800, gloves: 40000, masks: 35000, vent: 124 },
      { name: 'Rockefeller Institute', doctors: 754, nurses: 543, gloves: 30000, masks: 45000, vent: 230 },
      { name: 'Harlem Hospital Center', doctors: 542, nurses: 403, gloves: 19000, masks: 23000, vent: 129 },
    ],
  });

  return (
    <MaterialTable
      title="Hospitals and Clinics in Manhattan"
      icons={tableIcons}
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
