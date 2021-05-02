export class BookFilter extends React.Component {
    state = {
        filterBy: {
            title: '',
            minPrice: '',
            maxPrice: ''
        }
    }

    handelchange = (ev) => {
        const field = ev.target.name
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } },() =>{
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { title, minPrice, maxPrice } = this.state.filterBy
        return (
            <form className="book-filter" onSubmit={this.onFilter}>
                <label htmlFor="byTitle"></label>
                <input type="text" id="byTitle" name="title" placeholder="Title" value={title} onChange={this.handelchange}/>
                <label htmlFor="byMinPrice"></label>
                <input type="number" id="byMinPrice" name="minPrice" placeholder="Min Price" value={minPrice} onChange={this.handelchange}/>
                <label htmlFor="byMaxPrice"></label>
                <input type="number" id="byMaxPrice" name="maxPrice" placeholder="Max Price" value={maxPrice} onChange={this.handelchange}/>
                <button>Filter</button>
            </form>
        )
    }
}