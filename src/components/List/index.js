import React from 'react'

export default class List extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            list: [],
            updatedList: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInputSubmit = this.handleInputSubmit.bind(this)
    }

    handleInputChange(e) {
        this.setState({
            updatedList: e.target.value,
        })
        console.log(e.target.value)
    }

    handleInputSubmit(e) {
        if (this.state.updatedList !== '') {
            this.setState({
                list: [
                    ...this.state.list,
                    this.state.updatedList
                ],
                updatedList: ''
            })

            console.log(this.state.updatedList)
        }
        
        e.preventDefault()
    }

    render() {

        return (            
            <div>

                <ul>
                    {
                        this.state.list.map((messias, index) => (
                            <li key={index}>
                                {messias}
                            </li>
                        ))
                    }
                </ul>
                    
                <form onSubmit={this.handleInputSubmit}>
                    
                    <input type="text" onChange={this.handleInputChange} value={this.state.updatedList} />

                    <input type="submit" value="Enviar" />
                </form>

            </div>
        )
    }
}