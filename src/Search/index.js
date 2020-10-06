import React, { Component } from "react";
import {
  Button,
  Input,
  Footer,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
} from "mdbreact";

import blankImg from "./blank.gif";

import "./style.css";
import "./flags.min.css";

import countriesList from "./countries.json";

class App extends Component {
  state = {
    search: "",
    searchcolor: "",
    eitherone: "",
    display: false,
  };

  renderCountry = (country) => {
    const search = this.state.search;
    const searchcolor = this.state.searchcolor;
    const eitherone = this.state.eitherone;
    var code = country.code.toLowerCase();

    /*if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }*/

    return (
      <div
        className="col-md-3"
        name={country.name}
        style={{ marginTop: "20px" }}
      >
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
            <CardTitle title={country.name} onClick={this.onclick}>
              {country.name.substring(0, 15)}
              {country.name.length > 15 && "..."}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  };

onclick = (e) => {
this.setState({search: e.target.title})
console.log("Hello", e.target.title)
}


  onchange = (e) => {
    this.setState({ search: e.target.value });
  };

  onchange2 = (e) => {
    this.setState({ searchcolor: e.target.value });
  };

  onchange3 = (e) => {
    this.setState({ eitherone: e.target.value });
  };

  render() {
    const search = this.state.search;
    const searchcolor = this.state.searchcolor;
    const eitherone = this.state.eitherone;

    const filteredCountries = countriesList.filter((country) => {
      return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    const filteredcolors = countriesList.filter((color) => {
      return (
        color.color.toLowerCase().indexOf(searchcolor.toLowerCase()) !== -1
      );
    });

    const filteredEither = countriesList.filter((country) => {
      const both =
        country.name.toLowerCase().indexOf(eitherone.toLowerCase()) !== -1 ||
        country.color.toLowerCase().indexOf(eitherone.toLowerCase()) !== -1;
      console.log(both);
      return both;
    });

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
              <div>
                <Input
                  label="Search Color"
                  icon="search"
                  onChange={this.onchange2}
                />
              </div>

              <div>
                <Input
                  label="Search Either"
                  icon="search"
                  onChange={this.onchange3}
                />
                {this.state.eitherone && (
                  <div className="autoContainer">
                    {filteredEither
                      .map((value, i) => {
                        return (
                          <div
                            // onClick={() => updatePokeDex(value.name)}
                            className="option"
                            key={i}
                            tabIndex="0"
                          >
                            <span>{value.name}</span>
                            <img src={value.color} alt="pokemon" />
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>

              <div className="col" />
            </div>

            <div className="row">
              {this.state.search
                ? filteredCountries.map((country) => {
                    return this.renderCountry(country);
                  })
                : this.state.searchcolor
                ? filteredcolors.map((country) => {
                    return this.renderCountry(country);
                  })
                : this.state.eitherone
                ? filteredEither.map((country) => {
                    return this.renderCountry(country);
                  })
                : filteredCountries.map((country) => {
                    return this.renderCountry(country);
                  })}
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
