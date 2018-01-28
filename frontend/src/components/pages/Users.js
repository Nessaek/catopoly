// Utils
import React, { Component } from "react";
import matchSorter from "match-sorter";
import { datetime } from "utils";

// MobX
import { observer, inject } from "mobx-react";
import { toJS } from "mobx"
// Components
import ReactTable from "react-table";

class Users extends Component {
  constructor(props) {
    super(props)
    this.props.dataStore.getUsers();
  }





  render() {
    var data = [];
    const columns = [
      {
        Header: "ID",
        accessor: "id",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["id"] }),
        filterAll: true
      },
      {
        Header: "Name",
        accessor: "name",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["name"] }),
        filterAll: true
      },
      {
        Header: "Piece",
        accessor: "piece",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["piece"] }),
        filterAll: true
      }
    ];

    if (this.props.dataStore.users) {
      data = this.props.dataStore.users.map(user => {
        return {
          id: user.id,
          name: user.name,
          piece: user.piece
        };
      });
    }
    return (
      <div>
        <h1>Users</h1>
        <span>
          {this.props.dataStore.usersIsFetching ? (
            <h3>No data to display!</h3>
          ) : (
              <span>
                {this.props.dataStore.users && (
                  <ReactTable filterable data={data} columns={columns} />
                )}
              </span>
            )}
        </span>
      </div>
    );
  }
}

export default inject("dataStore")(observer(Users));
