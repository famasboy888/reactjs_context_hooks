import { Component } from "react";

class BookList extends Component {
    render() { 
        return (
            <div className="book-list">
                <ul>
                    <li>The wway of kings</li>
                    <li>Art of War</li>
                    <li>Lord of the Rings</li>
                    <li>Dune</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;