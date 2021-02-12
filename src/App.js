import React, { Component } from 'react';
import Loader from './Loader/Loader';
import _ from 'lodash';
import {DetailRowView} from "./DetailRowView/DetailRowView";
import {ModeSelector} from "./ModeSelector/ModeSelector";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import {TableSearch} from './TableSearch/TableSearch';
import {Table} from "./Table/Table";


class App extends Component {
    state ={
        isModeSelected: false,
        isLoading: false,
        data: [],
        sort: 'asc',
        sortField: 'id',
        row: null,
        currentPage: 0,
        search:''
    }

    async fetchData(url) {
        const response = await axios.get(url)
        const data = await response.data

        this.setState({
            isLoading: false,
            data: _.orderBy(data, this.state.sortField, this.state.sort)
        })

    }
    onSort = sortField => {
        const cloneData = this.state.data.concat();
        const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
        const data = _.orderBy(cloneData, sortField, sort);
        this.setState({data, sort, sortField})
    }

    modeSelectHandler = url => {

        this.setState({
            isModeSelected: true,
            isLoading: true,
        })
        this.fetchData(url)
    }



    onRowSelect = row => (
        this.setState({row})
    )
    pageChangeHandler = ({selected}) => (
        this.setState({currentPage: selected})
    )
    searchHandler = search => {
        this.setState({search, currentPage: 0})
    }
    getFilteredData(){


        if (!this.state.search) {
            return this.state.data
        }
        var result = this.state.data.filter(item => {
            return (
                item["firstName"].toLowerCase().includes(this.state.search.toLowerCase()) ||
                item["lastName"].toLowerCase().includes(this.state.search.toLowerCase()) ||
                item["email"].toLowerCase().includes(this.state.search.toLowerCase())
            );
        });
        if(!result.length){
            result = this.state.data
        }
        return result
    }

    render() {
        const pageSize = 50;
        if(!this.state.isModeSelected){
            return (
                <div className="container">
                    <ModeSelector onSelect={this.modeSelectHandler}/>
                </div>
            )
        }

        const filteredData = this.getFilteredData();
        const pageCount = Math.ceil(filteredData.length / pageSize)
        const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage]
        return (
            <div className="container">
                {
                    this.state.isLoading
                        ? <Loader />
                        : <React.Fragment>
                            <TableSearch onSearch={this.searchHandler} />
                            <Table
                                data={displayData}
                                onSort={this.onSort}
                                sort={this.state.sort}
                                sortField={this.state.sortField}
                                onRowSelect={this.onRowSelect}
                            />
                        </React.Fragment>

                }
                {

                    this.state.data.length > this.state.pageSize
                        ? <ReactPaginate
                            previousLabel={'<'}
                            nextLabel={'>'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.pageChangeHandler}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            nextClassName="page-item"
                            previousLinkClassName="page-link"
                            nextLinkClassName="page-link"
                            forcePage={this.state.currentPage}
                        /> : null
                }
                {
                    this.state.row ? <DetailRowView person={this.state.row} /> : null
                }
            </div>
        );
    }
}

export default App;
