import React, { Component } from "react";
import {
  Button,
  Input,
  Footer,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";

import blankImg from "./blank.gif";

import "./style.css";
import "./flags.min.css";

import countriesList from "./countries.json";

class App extends Component {
  state = {
    search: "",
    searchcolor: ""
  };

  renderCountry = country => {
    const search = this.state.search;
    const searchcolor = this.state.searchcolor;
    var code = country.code.toLowerCase();

    /*if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }*/

    return (
      <div className="col-md-3" style={{ marginTop: "20px" }}>
        <Card>
          <CardBody>
            <p className="">
              <img
                src={blankImg}
                className={"flag flag-" + code}
                alt={country.name}
              />
            </p>
            <CardText>{country.color}</CardText>
            <CardTitle title={country.name}>
              {country.name.substring(0, 15)}
              {country.name.length > 15 && "..."}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  onchange2 = e => {
    this.setState({ searchcolor: e.target.value });
  };

  render() {
    const search = this.state.search;
    const searchcolor = this.state.searchcolor;
    const filteredCountries = countriesList.filter(country => {
      return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

  const filteredcolors = countriesList.filter
  (color => {


    return color.color.toLowerCase().indexOf(searchcolor.toLowerCase()) !== -1;
  })


    return (
      <div className="flyout">
        <main style={{ marginTop: "4rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <center>
                  <h3>
                    <a
                      href="https://www.youtube.com/watch?v=RM_nXOyHwN0"
                      target="_blank"
                    >
                      Watch youtube demo here
                    </a>
                  </h3>
                </center>
              </div>
              <div className="col">
                <Input
                  label="Search Country"
                  icon="search"
                  onChange={this.onchange}
                />
              </div>
              <div >
                <Input
                  label="Search Color"
                  icon="search"
                  onChange={this.onchange2}
                />
              </div>

              <div className="col" />
            </div>

            
            <div className="row">
              {this.state.search ? filteredCountries.map(country => {
                return this.renderCountry(country);
              }): this.state.searchcolor ? filteredcolors.map(country => {
                return this.renderCountry(country);
              }): filteredCountries.map(country => {
                return this.renderCountry(country);
              })
            
            
            }
            </div>
          </div>
        </main>
        <Footer color="indigo">
          <p className="footer-copyright mb-0">
            &copy; {new Date().getFullYear()} Copyright
          </p>
        </Footer>
      </div>
    );
  }
}

export default App;
