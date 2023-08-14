//rcc
import React, { Component } from "react";
import "../../assets/scss/style.scss";

const data = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./img/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./img/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./img/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./img/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./img/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./img/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];
export default class BaiTapChonKinh extends Component {
  state = {
    glassDetail: {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlass = () => {
    return data.map((glass, index) => {
      return (
        <div className="col-2 card__img" key={index}>
          <img
            src={glass.url}
            alt="..."
            width={100}
            onClick={() => {
              this.setState({
                id: glass.id,
                price: glass.price,
                name: glass.name,
                url: glass.url,
                desc: glass.desc,
              });
            }}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="glass h-100">
        <div
          className="header__main"
          style={{ background: "rgba(0,0,0,.5)", minHeight: "100vh" }}
        >
          <h3 className="text-center text-white p-4 title">
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="glass__wrap row p-2">
              <div className="card col-6 left">
                <div className="card-item">
                  <img src="./img/model.jpg" alt="" width={280} />
                  <div className="card__glass">
                    <img src="./img/v2.png" alt="" width={200} />
                  </div>
                  <div className="card-body">
                    <h3>GUCCI G8759H</h3>
                    <p>
                      Light pink square lenses define these sunglasses, ending
                      with amother of pearl effect tip.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card col-6 right">
                <div className="card-item">
                  <img src="./img/model.jpg" alt="" width={280} />
                  <div className="card__glass">
                    <img src={this.state.url} alt="" width={200} />
                  </div>
                  <div className="card-body">
                    <h3>{this.state.name}</h3>
                    <p>{this.state.desc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card__data" style={{ height: 200 }}>
              <div className="row card__wrap">{this.renderGlass()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
