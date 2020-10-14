import React, { Component } from 'react';
import './style.css'
import ReactPaginate from 'react-paginate';

class GaleryPage extends Component {
   constructor(props) { 
      super(props)
      this.state = {
         photos: [],
         offset: 0,
         perPage: 8,
         currentPage: 0
      }
   }

   componentDidMount() { 
      this.receivedData()
   }

   receivedData = async () => {
       await this.setState({ photos: this.props.photos })
       await console.log(this.props.photos)
      var data = this.props.photos;
      var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
      var postData = slice.map(photo =>
         <React.Fragment>
               <div className="col-lg-3 galery-item overflow-hidden p-1" key={photo.id}>
                     <a href={photo.url} data-lightbox="examplle-set" data-title={photo.title}>
                        <img src={photo.url} className="link-image"/>
                  </a>

               </div>
      </React.Fragment>)

      this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
         
          postData
      })
  }
   


   handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;

      this.setState({
          currentPage: selectedPage,
          offset: offset
      }, () => {
          this.receivedData()
      });

  };

   render() {
      return (
         <div className="container">
            <div className="row justify-content-center pt-3 pb-5 ">
               <div className="col-lg-12 justify-content-center" >
                  <h3 className="text-center">GALERY PAGE</h3>
               </div>
               {this.state.postData}
               <div id="pagination-wrapper">
               <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
                </div>
            </div>
         </div>
      );
   }
}

export default GaleryPage;