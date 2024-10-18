import React, { Component } from 'react'
import Table from './table';

export default class ShowUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }
    componentDidMount() {
        // console.log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({ users: data }))
    }
    render() {
        // const columns = [//Optimized Memeory Allocations
        //     { name: "id", title:"کد" },
        //     { name: "name", title:"نام" },
        //     { name: "username", title:"نام کاربری" },
        //     { name: "phone", title:"تلفن" },
        //     { name: "email", title:"ایمیل" },
        //     { name: "address.city", title:"شهر" },
        //     { name: "address.geo.lat", title:"lat" },
        // ];
        return (
            <div>
                Show Users
                <Table dataName="lstUsers"
                    dataSource={this.state.users}
                    dataTitle = "List Of Users"
                    // dataColumns={columns}
                    dataColumns={[
                        { name: "id", title:"کد" },
                        { name: "name", title:"نام" },
                        { name: "username", title:"نام کاربری" },
                        { name: "phone", title:"تلفن" },
                        { name: "email", title:"ایمیل" },
                        { name: "address.city", title:"شهر" },
                        { name: "address.geo.lat", title:"lat" },
                    ]}
                />
            </div>
        )
    }
}