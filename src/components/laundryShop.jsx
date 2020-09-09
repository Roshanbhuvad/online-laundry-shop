import React, { Component } from "react";
import { nearByShops } from "./data";
import MediaCard from "./shopComponent";
import { Grid } from "@material-ui/core";

class LaundryShops extends Component {
  state = {
    nearByShops: nearByShops,
  };

  render() {
    return (
      <div>
        <div>
          <Grid container spacing={4}>
            {this.state.nearByShops.map((shop, index) => (
              <Grid item xs={12} sm={6} md={4}>
                <MediaCard
                  name={shop.name}
                  email={shop.email}
                  phoneNumber={shop.phoneNumber}
                  image={shop.image}
                  address={shop.address}
                  openingTime={shop.openingTime}
                  closingTime={shop.closingTime}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default LaundryShops;
